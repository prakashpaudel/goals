import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';

export default class Search extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<Filters />
			</div>
		);
	}
}
