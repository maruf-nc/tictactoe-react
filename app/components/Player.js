'use strict';

/**
 * @class Player
 *
 * This class is used to model the player of the TicTacToe Game
 */
export default class Player {

  /**
   * @constructs Player
   * @param {string} symbol
   * @param {string} name
   */
  constructor(symbol, name) {
    this.symbol = symbol;
    this.name = name;
    this.score = 0;
  }

  /**
   * Increase the score of the player with the given amount
   *
   * @method updateScore
   * @param {number} val
   */
  updateScore(val) {
    this.score += val;
  }

  /**
   * Returns the score of the player
   *
   * @method getScore
   * @returns {number}
   */
  getScore() {
    return this.score;
  }

}