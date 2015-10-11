'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  createdAt: {type: Date, 'default': Date.now},
  player1: String,
  player2: String,
  winner: String
});

mongoose.model('Game', GameSchema);

module.exports = {
  GameSchema: GameSchema
};
