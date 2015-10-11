'use strict';

import React from 'react';
import { Button } from 'react-bootstrap';
import PlayerModal from './PlayerModal';

class GameHeader extends React.Component {

  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getInPlayHtml() {
    return (
      <div>
        <div><strong>{this.props.getCurrentPlayer().name}'s Turn</strong></div>
        <div>Please click on a tile</div>
      </div>
    );
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  onSubmit(player1, player2) {
    this.close();
    this.props.start(player1, player2);
  }


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