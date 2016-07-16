import React, { Component } from 'react';
import styles from './Main.scss';
import GoalsList from './GoalsList';
import SearchBar from './SearchBar';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className={styles.red}>Main</div>
        <SearchBar />
        <GoalsList />
      </div>
    );
  }
}
