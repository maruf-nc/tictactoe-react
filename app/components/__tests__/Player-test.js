'use strict';

jest.dontMock('../Player');
var Player = require('../Player');

describe('Player', function () {

  var player;

  beforeEach(function () {
    player = new Player('x', 'james');
  });

  describe('constructor', function () {

    it('should construct player correctly', function () {
      expect(player.name).toBe('james');
      expect(player.symbol).toBe('x');
      expect(player.score).toBe(0);
    });

  });

  describe('.updateScore', function () {
    it('should increase the player\'s score with the given amount', function () {
      player.updateScore(10);
      expect(player.score).toBe(10);
    });
  });

  describe('.getScore', function () {
    it('should return the player\'s score', function () {
      expect(player.getScore()).toBe(0);
    });
  });

});