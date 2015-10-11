'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';
import PlayerModal from './PlayerModal';

/**
 * @class GameHeader
 * @extends React.Component
 */
class GameHeader extends React.Component {

  /**
   * @constructs GameHeader
   */
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * This method sets the HTML while a game is in progress
   * to show who's turn is next
   *
   * @method getInPlayHtml
   * @returns {JSX}
   */
  getInPlayHtml() {
    return (
      <div>
        <div><strong>{this.props.getCurrentPlayer().name}'s Turn</strong></div>
        <div>Please click on a tile</div>
      </div>
    );
  }

  /**
   * This method sets showModal state vairable to false and hence modal closes
   *
   * @method close
   */
  close() {
    this.setState({showModal: false});
  }

  /**
   * This method sets showModal state vairable to true and hence modal opens
   *
   * @method open
   */
  open() {
    this.setState({showModal: true});
  }

  /**
   * This method closes the modal and calls its start method to start the game eventually
   *
   * @method onSubmit
   * @param {string} player1
   * @param {string} player2
   */
  onSubmit(player1, player2) {
    this.close();
    this.props.start(player1, player2);
  }


  /**
   * @method render
   * @returns {JSX}
   */
  render() {
    var children = this.props.isGameBeingPlayed ? this.getInPlayHtml(): '';
    return (
      <div className='row'>
        <div className="col-md-12">
          <Button bsStyle="primary" onClick={this.open}>Start game</Button>
        </div>
        <div className="col-md-12">
          {children}
        </div>
        <PlayerModal showModal={this.state.showModal} close={this.close} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default GameHeader;