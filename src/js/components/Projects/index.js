import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import styles from './index.scss'
import { hashHistory } from 'react-router'
export default class Projects extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let { params } = this.props;
    let { id } = params;
    //document.title=id+"号参赛作品"


  }
  render() {
    let { params } = this.props;
    let { id } = params;
    return (
      <div className={styles.pro}>
        <div id="probg" className={styles.proimg}>
          <div className={styles.procontain}>
            {/*<div className={styles.gun}></div>
            <div className={styles.gun2}></div>*/}
            <div className={styles.protitle}></div>
            <div className={styles.propics}>
              <img src={"static/images/" + id + ".jpg"} />
            </div>
            <div className={styles.protitle}></div>
          </div>

        </div>
        <div className={styles.prorow}>
          <img src="static/images/row.png" />
        </div>
        <div className={styles.probutton}>
          <Flex>
            <Flex.Item><button className={styles.probutton1} onClick={() => { hashHistory.push("home") }}>返回</button></Flex.Item>
            <Flex.Item><button className={styles.probutton1} onClick={() => { hashHistory.push("from/" + id) }}>我要投票</button></Flex.Item>
          </Flex>
        </div>
      </div>
    )
  }
}

