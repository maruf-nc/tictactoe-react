'use strict';

var gameController = require('../controllers/game');

module.exports = function (app) {
  app.get('/api/games', gameController.list);
  app.post('/api/games', gameController.create);
};