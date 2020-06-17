from controller import (users, groups, lists, smart_lists, tasks)
from flask import Flask
from flask import jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)

def route(app):
  @app.route("/user/sign-in",methods=['POST'])
  def sign_in():
    return users.sign_in_user()
  
  @app.route("/user/register",methods=['POST'])
  def register():
    return users.register_user()
  
  @app.route("/user/<string:id>",methods=['GET'])
  def get_pro_file(id):
    return users.get_profile(id)
  
  @app.route("/list",methods=['GET'])
  def get_list():
    return lists.get_all()

  @app.route("/list",methods=['POST'])
  def insert_list():
    return lists.insert()
  
  @app.route("/list/<string:id>",methods=['PUT'])
  def update_list(id):
    return lists.update(id)

  @app.route("/list/<string:id>",methods=['DELETE'])
  def delete_list(id):
    return lists.delete(id)

  @app.route("/groups",methods=['GET'])
  def get_groups():
    return groups.get_all()

  @app.route("/groups",methods=['POST'])
  def insert_groups():
    return groups.insert()
  
  @app.route("/groups/<string:id>",methods=['PUT'])
  def update_groups(id):
    return groups.update(id)

  @app.route("/groups/<string:id>",methods=['DELETE'])
  def delete_groups(id):
    return groups.delete(id)
  
  @app.route("/tasks",methods=['GET'])
  def get_tasks():
    return tasks.get_all()

  @app.route("/tasks",methods=['POST'])
  def insert_tasks():
    return tasks.insert()
  
  @app.route("/tasks/<string:id>",methods=['PUT'])
  def update_tasks(id):
    return tasks.update(id)

  @app.route("/tasks/<string:id>",methods=['DELETE'])
  def delete_tasks(id):
    return tasks.delete(id)
  
  @app.route("/smart_lists",methods=['GET'])
  def get_smart_lists():
    return smart_lists.get_all()

  @app.route("/smart_lists",methods=['POST'])
  def insert_smart_lists():
    return smart_lists.insert()
  
  @app.route("/smart_lists/<string:id>",methods=['PUT'])
  def update_smart_lists(id):
    return smart_lists.update(id)

  @app.route("/smart_lists/<string:id>",methods=['DELETE'])
  def delete_smart_lists(id):
    return smart_lists.delete(id)