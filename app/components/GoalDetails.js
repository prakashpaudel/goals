import React, { Component } from 'react';
import styles from './GoalDetails.scss';

export default class GoalDetails extends Component {
  render() {
    const { streamableId, player, teamFor, teamAgainst, date, competition, time, scoreFor, scoreAgainst } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.player}>{player}</div>
      </div>
    );
  }
}
