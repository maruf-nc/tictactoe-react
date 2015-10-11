'use strict';

jest.dontMock('../Square');

var Square = require('../Square');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var getCurrentSymbol = jest.genMockFunction();
var tileClick = jest.genMockFunction();

describe('Square', function () {

  var tile, square, squareNode;

  beforeEach(function () {
    tile = {
      value: 1,
      symbol: 'x'
    }
  });

  beforeEach(function () {
    square = ReactTestUtils.renderIntoDocument(
      <Square tile={tile}
              getCurrentSymbol={getCurrentSymbol}
              tileClick={tileClick}
              isGameBeingPlayed={true}  />
    );
    squareNode = ReactDOM.findDOMNode(square);
  });

  it('should render properly', function () {
    expect(squareNode.textContent).toEqual('x');
  });

  describe('Click event', function () {
    it('should do good', function () {
      ReactTestUtils.Simulate.click(squareNode);
      expect(tileClick).not.toBeCalled();
    });
  });
});