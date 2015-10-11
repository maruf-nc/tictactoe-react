'use strict';

import React from 'react';
import { PieChart } from 'react-d3';

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
        <div>
          {this.getHtml()}
        </div>
        <h4>This game has been played {this.props.timesPlayed} times</h4>
        <hr />
        <PieChart
          data={this.props.pieData}
          width={400}
          height={400}
          radius={100}
          innerRadius={20}
          sectorBorderColor="white"
          title="Pie Chart"
        />
      </div>
    );
  }
}

export default LeaderBoard;