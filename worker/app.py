import os
import monitor
from pymongo import MongoClient
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
	summary = "test"
	client = MongoClient('mongodb:27017')
	db = client.myFirstMB
	db.countries.insert({"name" : "Canada"})
	return summary

if __name__ == '__main__':
	# Bind to PORT if defined, otherwise default to 5000.
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)
