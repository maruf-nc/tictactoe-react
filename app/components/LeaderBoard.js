'use strict';

import React from 'react';

/**
 * @class LeaderBoard
 * @extends React.Component
 */
class LeaderBoard extends React.Component {

  /**
   * @method getHtml
   * @returns {JSX}
   */
  getHtml() {
    return this.props.winner ? (
      <div className="alert alert-success" role="alert">
        <strong>{this.props.winner} won</strong>
      </div>
    ) : '';
  }

  /**
   * @method render
   * @returns {JSX}
   */
  render() {
    return (
      <div>
          {this.getHtml()}
      </div>
    );
  }
}

export default LeaderBoard;