'use strict';

import React from 'react';

class LeaderBoard extends React.Component {

  getHtml() {
    return this.props.winner ? (
      <div className="alert alert-success" role="alert">
        <strong>{this.props.winner} won</strong>
      </div>
    ) : '';
  }

  render() {
    return (
      <div>
          {this.getHtml()}
      </div>
    );
  }
}

export default LeaderBoard;