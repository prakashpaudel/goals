import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

export default class GoalDetails extends Component {
  render() {
    const { player, teamFor, teamAgainst, date, competition, time, scoreFor, scoreAgainst } = this.props;
    return (
      <div className={styles.container}>
        <p>{player}, ({teamFor}) v {teamAgainst} <span className="pull-right">{time}' {scoreFor}-{scoreAgainst}</span></p>
        <p>{competition}, {date}</p>
      </div>
    );
  }
}

GoalDetails.propTypes = {
  streamableId: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  teamFor: PropTypes.string.isRequired,
  teamAgainst: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  competition: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  scoreFor: PropTypes.number.isRequired,
  scoreAgainst: PropTypes.number.isRequired,
};
