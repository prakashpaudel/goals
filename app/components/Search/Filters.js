import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class Filters extends Component {
	constructor(props){
		super(props)
		this.state = {
			startDate: moment(),
			endDate: moment()
		}
	}
	onStartDateChange(date) {
		this.setState({
			startDate: date
		})
	}
	onEndDateChange(date) {
		this.setState({
			endDate: date
		})
	}
	render() {
		return (
			<div>
				<span>Between: </span>
				<DatePicker
	        selected={this.state.startDate}
				  startDate={this.state.startDate}
				  endDate={this.state.endDate}
	        onChange={::this.onStartDateChange} />
	      <span> and </span>
	      <DatePicker
	        selected={this.state.endDate}
	        startDate={this.state.startDate}
				  endDate={this.state.endDate}
	        onChange={::this.onEndDateChange} />
			</div>
		);
	}
}
