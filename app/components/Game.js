'use strict';

import React from 'react';
import Board from './Board';
import Player from './Player';
import GameHeader from './GameHeader';
import LeaderBoard from './LeaderBoard';
import {SYMBOL_O, SYMBOL_X} from '../constants';

export default class Game extends React.Component {

  constructor() {
    super();
    this.state = this.getState();
    this.winningNumbers = [7, 56, 448, 73, 146, 292, 273, 84];

    this.tileClick = this.tileClick.bind(this);
    this.start = this.start.bind(this);
    this.getCurrentPlayer = this.getCurrentPlayer.bind(this);
    this.getCurrentSymbol = this.getCurrentSymbol.bind(this);
  }

  getState() {
    return {
      tiles: this.generateTiles(),
      isGameBeingPlayed: false,
      round: 0,
      moves: 0,
      isX: false,
      showPlayerFormModal: false,
      winner: null
    }
  }

  generateTiles() {
    return Array.from((new Array(9)).keys()).map(x => {return {symbol: null, value: Math.pow(2, x)}});
  }

  start(player1, player2) {
    this.playerWithSymbolO = new Player(SYMBOL_O, player1);
    this.playerWithSymbolX = new Player(SYMBOL_X, player2);
    this.setState(Object.assign(this.getState(), {isGameBeingPlayed: true}));
  }

  getCurrentSymbol() {
    return this.state.isX ? SYMBOL_X : SYMBOL_O;
  }

  getCurrentPlayer() {
    return this.state.isX ? this.playerWithSymbolX : this.playerWithSymbolO;
  }

  tileClick(tile) {
    this.getCurrentPlayer().updateScore(tile.value);
    this.setState({
      moves: this.state.moves + 1,
      tiles: this.state.tiles
    }, function () {
      this.checkWinConditions();
      this.setState({isX: !this.state.isX})
    });
  }

  checkWinConditions() {
    if (this.isCurrentPlayerWinner()) {
      this.setState({winner: this.getCurrentPlayer().name, isGameBeingPlayed: false});
    } else if (this.state.moves > 8) {
      this.setState({winner: 'Nobody', isGameBeingPlayed: false});
    }
  }

  isCurrentPlayerWinner() {
    return this.winningNumbers.some(x => (x & this.getCurrentPlayer().getScore()) === x);
  }

  render() {
    return (
      <div className='row'>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <GameHeader isGameBeingPlayed={this.state.isGameBeingPlayed}
                          start={this.start} getCurrentPlayer={this.getCurrentPlayer} />
            </div>
            <div className="col-md-12">
              <Board tiles={this.state.tiles}
                     isGameBeingPlayed={this.state.isGameBeingPlayed}
                     getCurrentSymbol={this.getCurrentSymbol}
                     tileClick={this.tileClick} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <LeaderBoard winner={this.state.winner} />
        </div>
      </div>
    );
  }
}