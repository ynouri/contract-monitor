// Mongoose connection
var config = require('../config.js').get(process.env.NODE_ENV);
var mongoose = require('mongoose');
mongoose.connect(config.mongodb);
mongoose.Promise = global.Promise;

var Tx = require('../models/tx');

var fluffy = new Tx({blockNumber: 123, hash: '0x', input: '0x'});

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
});


var q = Tx.find().limit(5)
q.exec(function(err, results) {
  console.log(results)
});
