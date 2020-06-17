from flask import jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)
from utils.dbHelper import dbSupport as db__
import __variable__ as v__
import json
type = v__.TASKS
def receive_request_data():
  return (
    request.form["TASK_NAME"],
    request.form["DETAIL"],
    request.form["STARTTIME"],
    request.form["ENDTIME"],
    request.form["TASK_STATUS"],
    request.form["ID_SMART_LIST"],
    request.form["ID_LIST"],
  )
def get_all():
  rows = db__.selectTableAll(type)
  arr = []
  if rows == False:
    return "Get "+type+" Fail!!",500
  for row in rows:
    arr.append({
      "ID":row[0],
      "TASK_NAME":row[1],
      "DETAIL":row[2],
      "STARTTIME":row[3],
      "ENDTIME":row[4],
      "TASK_STATUS":row[5],
      "ID_SMART_LIST":row[6],
      "ID_LIST":row[7],
    })
  return {"data":arr}


#######################################
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