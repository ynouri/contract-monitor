// var config = require('./config.js').get(process.env.NODE_ENV);

var config = {
  production: {
    mongodb: 'mongodb://mongodb:27017/TestDB2'
  },
  development_docker: {
    mongodb: 'mongodb://mongodb:27017/TestDB2'
  },
  default: {
    mongodb: 'mongodb://localhost:27017/TestDB2'
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}
