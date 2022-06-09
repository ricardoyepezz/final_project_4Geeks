"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import pandas as pd
from flask.helpers import send_from_directory
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, request, jsonify, url_for, send_from_directory, render_template
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS, cross_origin
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager

def createSimilarity():
    data = pd.read_csv('main_data.csv') # reading the dataset
    cv = CountVectorizer()
    countMatrix = cv.fit_transform(data['comb'])
    similarity = cosine_similarity(countMatrix) # creating the similarity matrix
    return (data, similarity)


def getAllMovies():
    data = pd.read_csv('main_data.csv')
    return list(data['movie_title'].str.capitalize())

def Recommend(movie):
    movie = movie.lower()
    try:
        data.head()
        similarity.shape
    except:
        (data, similarity) = createSimilarity()
    if movie not in data['movie_title'].unique():
        return 'Sorry! The movie you requested is not present in our database.'
    else:
        movieIndex = data.loc[data['movie_title'] == movie].index[0]
        lst = list(enumerate(similarity[movieIndex]))
        lst = sorted(lst, key=lambda x: x[1], reverse=True)
        lst = lst[1:20]  # excluding first item since it is the requested movie itself and taking the top20 movies
        movieList = []
        for i in range(len(lst)):
            a = lst[i][0]
            movieList.append(data['movie_title'][a])
        return movieList

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET_KEY')  # Change this!
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

@app.route('/api/movies', methods=['GET'])
@cross_origin()
def movies():
    # returns all the movies in the dataset
    movies = getAllMovies()
    result = {'arr': movies}
    return jsonify(result)

@app.route('/api/similarity/<name>')
@cross_origin()
def similarity(name):
    movie = name
    recommendations = Recommend(movie)
    if type(recommendations) == type('string'):
        resultArray = recommendations.split('---')
        apiResult = {'movies': resultArray}
        return jsonify(apiResult)
    else:
        movieString = '---'.join(recommendations)
        resultArray = movieString.split('---')
        apiResult = {'movies': resultArray}
        return jsonify(apiResult)


@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
