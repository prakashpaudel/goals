import React, { Component } from 'react';
import styles from './styles.scss';
import Goal from '../Goal/Goal';
import goals from '../goals';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export default class GoalsList extends Component {
  componentDidMount() {
    fetch('http://reddit.com/r/soccer.json')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log('parsed json', json);
      }).catch(function(ex) {
        console.log('parsing failed', ex);
      });
  }
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
