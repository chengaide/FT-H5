import React, { Component } from 'react'
import styles from './index.scss'

export default class Loading extends Component {
  render() {
    return (
      <div id="loading" className={styles.load}>
        <div className={styles.contains}>
          <div className={styles.loading}>
            <div id="loadings" className={styles.loadingbg}></div>
          </div>
          <div id="load-num" className={styles.num}>
            
          </div>
        </div>
      </div>
    )
  }
}

