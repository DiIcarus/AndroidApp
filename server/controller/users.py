from flask import jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)

def sign_in_user():
  return request.data

def register_user():
  return request.data

def get_profile(id):
  return {"id":id}