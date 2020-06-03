from flask import Flask
from flask import jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)
from controller import (users, groups, lists, smart_lists, tasks, controller)
import json

def create_app(test_config=None):
  app = Flask(__name__,instance_relative_config=True)
  return app

app =create_app()
controller.route(app)
app.run(host='0.0.0.0',port='5001')