'use strict';

export default class Player {

  constructor(symbol, name) {
    this.symbol = symbol;
    this.name = name;
    this.score = 0;
  }

  updateScore(val) {
    this.score += val;
  }

  getScore() {
    return this.score;
  }

}