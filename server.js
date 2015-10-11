'use strict';

var app = require('./server/app');
var config = require('./server/config');
var mongoose = require('mongoose');

// Bootstrap db connection
mongoose.connect(config.db);

// Bootstrap models
require('./server/models/game');

// Configure express
require('./server/config/express')(app, config);

var server = require('http').Server(app);

server.listen(app.get('port'), function () {
  console.log('Express app listening at port', app.get('port'));
});



