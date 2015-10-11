'use strict';

import React, { PropTypes, Component } from 'react';

/**
 * @class Square
 * @extends React.Component
 */
class Square extends Component {

  /**
   * This is the click handler function of the tile
   *
   * @method onTileClick
   */
  onTileClick() {
    if (this.props.isGameBeingPlayed && !this.props.tile.symbol) {
      this.props.tile.symbol = this.props.getCurrentSymbol();
      this.props.tileClick(this.props.tile);
    }
  }

  /**
   * @method render
   * @returns {JSX}
   */
  render() {
    return (
      <div className='square' onClick={this.onTileClick.bind(this)}>{this.props.tile.symbol}</div>
    );
  }
}

export default Square;