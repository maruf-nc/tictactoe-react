'use strict';

var mongoose = require('mongoose');
var Game = mongoose.model('Game');

var list = function (req, res) {
  Game.find({}, function (err, games) {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.json(games);
  });
};

var create = function (req, res) {
  new Game(req.body).save(function (err) {
    if (err) {
      res.sendStatus(400);
      return;
    }

    res.sendStatus(201);
  });
};

module.exports = {
  list: list,
  create: create
};