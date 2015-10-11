'use strict';

import React from 'react';
import { Modal, Input, ButtonInput } from 'react-bootstrap';

class PlayerModal extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs.player1.getValue(), this.refs.player2.getValue());
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                  <Modal.Title>Enter the name of the players</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={this.onSubmit.bind(this)}>
                    <Input ref="player1" required type="text" label="Player 1 name" placeholder="Enter name" />
                    <Input ref="player2" required type="text" label="Player 2 name" placeholder="Enter name" />
                    <ButtonInput bsStyle="primary" type="submit" value="Submit" />
                  </form>
                </Modal.Body>
              </Modal>
      </div>

    );
  }
}

export default PlayerModal;