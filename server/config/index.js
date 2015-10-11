'use strict';

var env = process.env.NODE_ENV || 'development';
var port = process.env.NODE_PORT || 3000;

var config = {
  env: env,
  port: port,
  db: process.env.MONGOLAB_URI || 'mongodb://localhost/tictactoe'
};

module.exports = config;