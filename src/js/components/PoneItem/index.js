import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import styles from './index.scss'
import { hashHistory } from 'react-router'
export default class PoneItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {



  }
  render() {
    return (
      <div className={styles.pro} id="home">
        <div id="probg" className={styles.proimg}>
          <img className={styles.probgbg} src="static/images/p14.png" />
          <img className={styles.probg00} src="static/images/H5-01_00.png" />
          <img className={styles.probg01} src="static/images/H5-01_01.png" />
          <img className={styles.probg02} src="static/images/H5-01_02.png" />
          <div className={styles.probg}>
            <img className={styles.probg03} src="static/images/H5-001_01.png" />
            <img className={styles.probg03} src="static/images/H5-001_02.png" />
            <img className={styles.probg04} src="static/images/H5-001_03.png" />
            <img className={styles.probg05} src="static/images/H5-001_04.png" />
          </div>
        </div>
        <img className={styles.protime} src="static/images/p16.png" />
      </div>
    )
  }
}

