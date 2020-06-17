from flask import Flask
from flask import jsonify, request
from flask_restful import Api
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
)
from controller import (users, groups, lists, smart_lists, tasks, controller)
import json

def create_app(test_config=None):
  app = Flask(__name__,instance_relative_config=True)
  return app

app =create_app()
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api =Api(app)
controller.route(app)
app.run(host='192.168.1.7',port='5001')

# from flask import Flask
# from flask_restful import Resource, Api

# app = Flask(__name__)
# cors = CORS(app, resources={r"/*": {"origins": "*"}})
# api = Api(app)

# class HelloWorld(Resource):
#     def get(self):
#         return {'hello': 'world'}

# api.add_resource(HelloWorld, '/')
# if __name__ == '__main__':
#     app.run(host='192.168.1.7',port='5001',debug=True)