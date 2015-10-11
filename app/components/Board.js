'use strict';

import React from 'react';
import Square from './Square'

class Board extends React.Component {

  createTile(tile, key) {
    return <Square tile={tile} key={key}
                   getCurrentSymbol={this.props.getCurrentSymbol}
                   isGameBeingPlayed={this.props.isGameBeingPlayed}
                   tileClick={this.props.tileClick} />
  }

  render() {
    return (
      <div className='board'>{this.props.tiles.map(this.createTile.bind(this))}</div>
    );
  }
}

export default Board;