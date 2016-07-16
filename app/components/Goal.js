import React, { Component } from 'react';
import Streamable from './Streamable';
import GoalDetails from './GoalDetails';

export default class Goal extends Component {
  render() {
    const { streamableId } = this.props;
    return (
      <div>
        <GoalDetails
          {...this.props}
        />
        <Streamable id={streamableId} />
      </div>
    );
  }
}
