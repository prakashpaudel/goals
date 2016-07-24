import React, { Component, PropTypes } from 'react';
import Streamable from './Streamable/Streamable';
import GoalDetails from './GoalDetails/GoalDetails';
import styles from './styles.scss';

export default class Goal extends Component {
  render() {
    const { streamableId } = this.props;
    return (
      <div className={styles.container}>
        <GoalDetails
          {...this.props}
        />
        <Streamable id={streamableId} />
      </div>
    );
  }
}

Goal.propTypes = {
  streamableId: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  teamFor: PropTypes.string.isRequired,
  teamAgainst: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  competition: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  scoreFor: PropTypes.number.isRequired,
  scoreAgainst: PropTypes.number.isRequired,
};
