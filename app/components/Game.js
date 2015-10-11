'use strict';

import React from 'react';
import Board from './Board';
import Player from './Player';
import GameHeader from './GameHeader';
import LeaderBoard from './LeaderBoard';
import {SYMBOL_O, SYMBOL_X} from '../constants';

/**
 * @class Game
 * @extends React.Component
 */
export default class Game extends React.Component {

  /**
   * @constructs Game
   */
  constructor() {
    super();
    this.state = this.getState();
    this.winningNumbers = [7, 56, 448, 73, 146, 292, 273, 84];

    this.tileClick = this.tileClick.bind(this);
    this.start = this.start.bind(this);
    this.getCurrentPlayer = this.getCurrentPlayer.bind(this);
    this.getCurrentSymbol = this.getCurrentSymbol.bind(this);
  }

  /**
   * @method getState
   * @returns {{tiles: array, isGameBeingPlayed: boolean, moves: number, isX: boolean, showPlayerFormModal: boolean, winner: null}}
   */
  getState() {
    return {
      tiles: this.generateTiles(),
      isGameBeingPlayed: false,
      moves: 0,
      isX: false,
      showPlayerFormModal: false,
      winner: null
    }
  }

  /**
   * @method generateTiles
   * @returns {Array}
   */
  generateTiles() {
    return Array.from((new Array(9)).keys()).map(x => {return {symbol: null, value: Math.pow(2, x)}});
  }

  /**
   * @method start
   * @param player1
   * @param player2
   */
  start(player1, player2) {
    this.playerWithSymbolO = new Player(SYMBOL_O, player1);
    this.playerWithSymbolX = new Player(SYMBOL_X, player2);
    this.setState(Object.assign(this.getState(), {isGameBeingPlayed: true}));
  }

  /**
   * @method getCurrentSymbol
   * @returns {String}
   */
  getCurrentSymbol() {
    return this.state.isX ? SYMBOL_X : SYMBOL_O;
  }

  /**
   * @method getCurrentPlayer
   * @returns {Player}
   */
  getCurrentPlayer() {
    return this.state.isX ? this.playerWithSymbolX : this.playerWithSymbolO;
  }

  /**
   * @method tileClick
   * @param tile
   */
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

  /**
   * @method checkWinConditions
   */
  checkWinConditions() {
    if (this.isCurrentPlayerWinner()) {
      this.setState({winner: this.getCurrentPlayer().name, isGameBeingPlayed: false});
    } else if (this.state.moves > 8) {
      this.setState({winner: 'Nobody', isGameBeingPlayed: false});
    }
  }

  /**
   * @method isCurrentPlayerWinner
   * @returns {boolean}
   */
  isCurrentPlayerWinner() {
    return this.winningNumbers.some(x => (x & this.getCurrentPlayer().getScore()) === x);
  }

  /**
   * @method render
   * @returns {JSX}
   */
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