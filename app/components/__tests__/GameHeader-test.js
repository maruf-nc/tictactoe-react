'use strict';

jest.dontMock('../GameHeader');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

var GameHeader = require('../GameHeader');

describe('GameHeader', function () {

  var gameHeader, gameHeaderNode;

  beforeEach(_render);

  it('should render properly', function () {
    expect(gameHeaderNode.textContent).toEqual('Start game');
    expect(gameHeaderNode.querySelectorAll('button').length).toBe(1);
  });

  function _render() {
    gameHeader = ReactTestUtils.renderIntoDocument(
      <GameHeader isGameBeingPlayed={false} />
    );
    gameHeaderNode = ReactDOM.findDOMNode(gameHeader);
  }
});