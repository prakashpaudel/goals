import React, { Component } from 'react';
import styles from './styles.scss';
import Goal from '../Goal/Goal';
import goals from '../goals';
require('reddit.js/reddit.min.js');

export default class GoalsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      goals: []
    };
  }
  componentDidMount() {
    reddit.search('subreddit:soccer site:streamable goal')
    .t('day')
    .sort('top')
    .limit(5)
    .fetch((res => {
      let goals = res.data.children;
      goals = goals.map(goal => {
        return {
          title: goal.data.title,
          url: goal.data.url,
          data: goal.data
        };
      });
      this.setState({
        goals: goals
      });
    }), (err => {
      console.log(err);
    }));
  }
  render() {
    console.log('goals', this.state.goals)
    return (
      <div className={styles.list}>
        {goals.map(goal => 
          <Goal key={goal.streamableId} {...goal} />
        )}
      </div>
    );
  }
}
