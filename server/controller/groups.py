from flask import jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)
from utils.dbHelper import dbSupport as db__
import __variable__ as v__
import json
type = v__.GROUPS
def receive_request_data():
  return (
    request.form["GROUP_NAME"],
    request.form["NUMBER_NOTE"],
  )
def get_all():
  rows = db__.selectTableAll(type)
  arr = []
  if rows == False:
    return "Get "+type+" Fail!!",500
  for row in rows:
    arr.append({
      "ID":row[0],
      "GROUP_NAME":row[1],
      "NUMBER_NOTE":row[2],
    })
  return {"data":arr}


###################################
def insert():
  value = receive_request_data()
  is_success = db__.insertTable(type,value)
  if is_success:
    return "Insert "+type+" Successful!!",200
  else:
    return "Insert "+type+" Fail !!",500

def update(id):
  value = receive_request_data()
  is_success = db__.updateTableById(id,type,value)
  if is_success:
    return "Update "+type+" Successful!!",200
  else:
    return "Update "+type+" Fail !!",500

def delete(id):
  is_success = db__.deleteTableById(id,type)
  if is_success:
    return "Delete "+type+" Successful!!",200
  else:
    return "Delete "+type+" Fail !!",500