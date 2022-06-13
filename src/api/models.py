from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.String(120), unique = False, nullable = False)
    movie_id = db.Column(db.Integer, unique = False, nullable = False)
    user_id = db.Column(db.Integer, unique = False, nullable = False)

    def serialize(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "movie_id": self.movie_id,
            "user_id": self.user_id
        }