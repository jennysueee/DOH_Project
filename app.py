from flask import Flask, redirect, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
import requests
import json
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)
mongo = PyMongo(app, uri="mongodb://localhost:27017/restaurantgradesDB")

@app.route('/')
def home():
    return "Welcome to MongoDB data retrieval, for Group A data enter url/a, for group b data enter url/b, for group b data enter url/c"


@app.route("/a")
def grade_a_func():
    a_restaurant_data = mongo.db.GroupA.find()
    a_dumped_data = dumps(a_restaurant_data)
    a_load_data = json.loads(a_dumped_data)
    a_response = {"data":a_load_data}
    return a_response

@app.route("/b")
def grade_b_func():
    b_restaurant_data = mongo.db.GroupB.find()
    b_dumped_data = dumps(b_restaurant_data)
    b_load_data = json.loads(b_dumped_data)
    b_response = {"data":b_load_data}
    return b_response

@app.route("/c")
def grade_c_func():
    c_restaurant_data = mongo.db.GroupC.find()
    c_dumped_data = dumps(c_restaurant_data)
    c_load_data = json.loads(c_dumped_data)
    c_response = {"data":c_load_data}
    return c_response

if __name__ == "__main__":
    app.run(debug=True)
    