import React, { Component } from 'react';
import styles from './Streamable.scss';

export default class Streamable extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <iframe src={`https://streamable.com/e/${id}?logo=0`}
                  className={styles.iframe}
                  frameBorder="0"
                  allowFullScreen
                  scrolling="no"></iframe>
        </div>
      </div>
    );
  }
}
