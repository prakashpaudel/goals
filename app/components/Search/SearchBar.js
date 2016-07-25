import React, { Component } from 'react';
import styles from './styles.scss'

export default class SearchBar extends Component {
	constructor(props){
		super(props)
		this.state = {
			query: ''
		}
	}
	onChange(e) {
		this.setState({query: e.target.value});
	}
  render() {
    return (
      <div className={styles.container}>
      	<input className={styles.input}
      		onChange={::this.onChange}
      		placeholder="e.g. vardy, arsenal, etc."
      		value={this.state.query} />
      </div>
    );
  }
}
