import React, { Component } from 'react';
import styles from './styles.scss';
import GoalsList from './GoalsList/GoalsList';
import SearchBar from './SearchBar/SearchBar';

export default class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        <SearchBar />
        <GoalsList />
      </div>
    );
  }
}
