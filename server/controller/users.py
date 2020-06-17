from flask import jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)
from utils.dbHelper import dbSupport as db__
import __variable__ as v__
import json
type = v__.USERS
def receive_request_data():
  return (
    request.form["SIGN_IN_NAME"],
    request.form["PASSWORDS"],
    request.form["GMAIL"],
  )
#######################################
def register_user():
  value = receive_request_data()
  is_success = db__.insertTable(type,value)
  if is_success:
    return "Insert "+type+" Successful!!",200
  else:
    return "Insert "+type+" Fail !!",500

def sign_in_user():
  sign_in_name = request.form["sign_in_name"]
  password = request.form["passwords"]
  rows = db__.selectTableByName(sign_in_name)
  print(rows)
  if rows == []:
    return "0"
  for row in rows:
    print(row[2]==password)
    if row[2] == password:
      return {
        "status":200,
        "info":"Sign in successful"
      }
    else :
      return {
        "status":500,
        "info":"Sign in fail",
      }

def get_profile(id):
  sign_in_name = request.form["sign_in_name"]
  rows = db__.selectTableByName(sign_in_name)
  for row in rows:
    return {
      "id":row[0],
      "sign_in_name":row[1],
      "password":row[2],
      "gmail":row[3],
    }