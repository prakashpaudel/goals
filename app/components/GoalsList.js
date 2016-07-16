import React, { Component } from 'react';
import styles from './GoalsList.scss';
import Goal from './Goal';
import goals from './goals';

export default class GoalsList extends Component {
  render() {
    return (
      <div className={styles.list}>Goals List
        {goals.map(goal => 
          <Goal key={goal.streamableId} {...goal} />
        )}
      </div>
    );
  }
}
