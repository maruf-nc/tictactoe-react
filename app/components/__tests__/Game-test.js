'use strict';

jest.dontMock('../Board');
jest.dontMock('../Square');
jest.dontMock('lodash');
jest.dontMock('../Player');
jest.dontMock('../Game');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

var Game = require('../Game');
var GameService = require('../../GameService');
var mockPromise = {then: (cb) => {cb([]); return {catch: (cb) => {cb()}}}};
GameService.query = jest.genMockFunction().mockReturnValue(mockPromise);
GameService.save = jest.genMockFunction().mockReturnValue(mockPromise);

describe('Game', function () {

  var game, gameNode;

  beforeEach(_render);

  it('should render properly', function () {
    expect(gameNode.querySelectorAll('.square').length).toBe(9);
  });

  describe('.generateTiles', function () {
    it('should renerate tiles properly', function () {
      expect(game.generateTiles().length).toBe(9)
    });
  });

  describe('.start', function () {
    it('should start the game', function () {
      game.start('', '');
      expect(game.state.isGameBeingPlayed).toBeTruthy();
    });
  });

  describe('.getCurrentSymbol', function () {
    it('should get current symbol', function () {
      expect(game.getCurrentSymbol()).toBe('O');
    });
  });

  describe('.getCurrentPlayer', function () {
    it('should get current player', function () {
      game.start('james', 'tim');
      expect(game.getCurrentPlayer().name).toBe('james');
    });
  });

  describe('.tileClick', function () {
    it('should update various states', function () {
      game.start('james', 'tim');
      game.tileClick({value: 4});
      expect(game.playerWithSymbolO.getScore()).toBe(4);
      expect(game.state.moves).toBe(1);
    });
  });

  describe('.checkWinConditions', function () {
    it('should check if the game has a winner or it is a draw', function () {
      game.start('james', 'tim');
      game.getCurrentPlayer().updateScore(7);
      game.checkWinConditions();
      expect(game.state.isGameBeingPlayed).toBeFalsy();
      expect(game.state.winner).toBe('james');
    });
  });

  describe('.isCurrentPlayerWinner', function () {
    it('should return boolean if the current player is winner or not', function () {
      game.start('james', 'tim');
      game.getCurrentPlayer().updateScore(7);
      expect(game.isCurrentPlayerWinner()).toBeTruthy();
    });
  });

  function _render() {
    game = ReactTestUtils.renderIntoDocument(
      <Game />
    );
    gameNode = ReactDOM.findDOMNode(game);
  }
});