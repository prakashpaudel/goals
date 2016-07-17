import React, { Component } from 'react';
import styles from './styles.scss';
import Goal from '../Goal/Goal';
import goals from '../goals';

export default class GoalsList extends Component {
  render() {
    return (
      <div className={styles.list}>
        {goals.map(goal => 
          <Goal key={goal.streamableId} {...goal} />
        )}
      </div>
    );
  }
}
