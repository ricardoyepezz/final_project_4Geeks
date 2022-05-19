"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    email = request.form['email']
    password = request.form['password']
        
    if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
    if not password: return jsonify({"msg": "Password es requerido!"}), 400

    user = User.query.filter_by(email=email).first()

    if not user: return jsonify({"msg": "email/password son incorrectos"}), 400
    if not check_password_hash(user.password, password): return jsonify({"msg": "email/password son incorrectos"}), 400

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

@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():

    email = get_jwt_identity()
    dictionary = {
        "message": "hello " + name
    }
    return jsonify(dictionary)

