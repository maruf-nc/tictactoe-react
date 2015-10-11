'use strict';

var bodyParser = require('body-parser');

module.exports = function (app, config) {

  app.set('port', config.port);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Set up routes
  require('../routes')(app);

};