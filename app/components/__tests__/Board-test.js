'use strict';

jest.dontMock('../Board');
jest.dontMock('../Square');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

var Board = require('../Board');

describe('Board', function () {

  var board, boardNode, tiles;

  beforeEach(function () {
    tiles = [{value: 1, symbol: null}, {value: 2, symbol: null}];
  });

  beforeEach(_render);

  it('should render properly', function () {
    expect(boardNode.querySelectorAll('.square').length).toBe(2);
  });

  function _render() {
    board = ReactTestUtils.renderIntoDocument(
      <Board tiles={tiles} />
    );
    boardNode = ReactDOM.findDOMNode(board);
  }
});