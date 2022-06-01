"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re
import pandas as pd
from flask import Flask, request, jsonify, url_for, render_template, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin


api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    email = request.form['email']
    password = request.form['password']
        
    if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
    if not password: return jsonify({"msg": "Password es requerido!"}), 400

    user = User.query.filter_by(email=email).first()

    if not user: return 400
    if not check_password_hash(user.password, password): return 400

    access_token = create_access_token(identity=email)

    data = {
            "access_token": access_token,
            "user": user.serialize()
        }
       
    return jsonify(data), 200
    
@api.route('/signup', methods=['POST'])
def signup():
    
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']
        
    user = User.query.filter_by(email=email).first()

    if not name: return jsonify({"msg": "Usuario ya existe ó el nombre es requerido"}), 400
    if not email: return jsonify({"msg": "Usuario ya existe ó el email es requerido"}), 400
    if not password: return jsonify({"msg": "Usuario ya existe ó el password es requerido"}), 400

    if user: return jsonify({"msg": "Usuario ya existe"}), 400

    user = User()
    user.name = name
    user.email = email
    user.password = generate_password_hash(password)
    user.save()

    if not check_password_hash(user.password, password): return jsonify({"msg": "email/password son incorrectos"}), 400

    access_token = create_access_token(identity=email)

    data = {
        "access_token": access_token,
        "user": user.serialize()
    }

    if user: return jsonify(data), 201

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

@api.route('/api/movies', methods=['GET'])
@cross_origin()
def movies():
    # returns all the movies in the dataset
    movies = getAllMovies()
    result = {'arr': movies}
    return jsonify(result)


@api.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@api.route('/api/similarity/<name>')
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


@api.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)