import React, { Component } from 'react';
import styles from './styles.scss';
import Goal from '../Goal/Goal';
// import goals from '../goals';
import { parse } from './streamableParser';

require('reddit.js/reddit.min.js');
import moment from 'moment';

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
        const { title, url, created_utc } = goal.data
        const streamableId = parse(url);
        return {
          title: title,
          streamableId: streamableId,
          date: moment.unix(created_utc),
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
    const { goals } = this.state;
    console.log(goals)
    return (
      <div className={styles.list}>
        {goals.map(goal => 
          <Goal key={goal.streamableId} {...goal} />
        )}
      </div>
    );
  }
}
