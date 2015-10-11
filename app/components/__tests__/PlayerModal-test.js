'use strict';

jest.dontMock('../PlayerModal');
jest.dontMock('react-bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');

var PlayerModal = require('../PlayerModal');
var noop = function() {};

describe('PlayerModal', function () {

  var playerModal;

  beforeEach(_render);

  it('should render properly', function () {
    expect(document.querySelectorAll('.modal-content input').length).toBe(3);
  });

  function _render() {
    playerModal = ReactTestUtils.renderIntoDocument(
      <PlayerModal close={noop} showModal={true} />
    );
  }
});