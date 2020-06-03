from flask import jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)
from utils.dbHelper import dbSupport as db__
import __variable__ as v__
import json

def get_all():
  rows = db__.selectTableAll(v__.LISTS)
  arr = []
  for row in rows:
    arr.append({
      "ID":row[0],
      "LIST_NAME":row[1],
      "LIST_STATUS":row[2],
      "ID_GROUP":row[3],
    })
  return {"data":arr}

def insert():
  # y = request.form["username"]
  print(request.form) #form data
  print(request.files)
  return "OK"

def update(id):
  db__.updateTableById(id,v__.LISTS)
  return request.data

def delete(id):
  return {"value":db__.deleteTableById(id,v__.LISTS)}