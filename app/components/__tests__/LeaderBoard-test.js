'use strict';

jest.dontMock('../LeaderBoard');
var LeaderBoard = require('../LeaderBoard');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

describe('LeaderBoard', function () {

  var leaderBoard, leaderBoardNode;

  beforeEach(_render);

  it('should render properly', function () {
    expect(leaderBoardNode.textContent).toContain('james won');
  });

  function _render() {
    leaderBoard = ReactTestUtils.renderIntoDocument(
      <LeaderBoard winner={'james'} />
    );
    leaderBoardNode = ReactDOM.findDOMNode(leaderBoard);
  }
});