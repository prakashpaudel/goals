import React, { Component } from 'react';
import styles from './styles.scss';
import GoalsList from './GoalsList/GoalsList';
import Search from './Search/Search';

export default class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Search />
        <GoalsList />
      </div>
    );
  }
}
