'use strict';

import React, { PropTypes, Component } from 'react';

class Square extends Component {

  onTileClick() {
    if (this.props.isGameBeingPlayed && !this.props.tile.symbol) {
      this.props.tile.symbol = this.props.getCurrentSymbol();
      this.props.tileClick(this.props.tile);
    }
  }

  render() {
    return (
      <div className='square' onClick={this.onTileClick.bind(this)}>{this.props.tile.symbol}</div>
    );
  }
}

export default Square;