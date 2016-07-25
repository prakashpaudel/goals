import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

export default class GoalDetails extends Component {
  render() {
    const { date, title } = this.props;
    return (
      <div className={styles.container}>
        <p>{title}</p>
        <p>{date.format("MMM D, YYYY")}</p>
      </div>
    );
  }
}

GoalDetails.propTypes = {
  date: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  streamableId: PropTypes.string.isRequired,
  // player: PropTypes.string.isRequired,
  // teamFor: PropTypes.string.isRequired,
  // teamAgainst: PropTypes.string.isRequired,
  // competition: PropTypes.string.isRequired,
  // time: PropTypes.number.isRequired,
  // scoreFor: PropTypes.number.isRequired,
  // scoreAgainst: PropTypes.number.isRequired,
};
