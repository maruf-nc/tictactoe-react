'use strict';

import React from 'react';
import Square from './Square';

/**
 * @class Board
 * @extends React.Component
 */
class Board extends React.Component {

  /**
   * This method is responsible to generate one tile in the game board
   *
   * @method createTile
   * @param {object} tile
   * @param {number} key
   * @returns {JSX}
   */
  createTile(tile, key) {
    return <Square tile={tile} key={key}
                   getCurrentSymbol={this.props.getCurrentSymbol}
                   isGameBeingPlayed={this.props.isGameBeingPlayed}
                   tileClick={this.props.tileClick} />
  }

  /**
   * @method render
   * @returns {JSX}
   */
  render() {
    return (
      <div className='board'>{this.props.tiles.map(this.createTile.bind(this))}</div>
    );
  }
}

export default Board;