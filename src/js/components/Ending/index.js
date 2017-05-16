import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import styles from './index.scss'
import { hashHistory } from 'react-router'
import { postData } from '../../system/apiHelper'
export default class Ending extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {

  }
  handleSubmit(e){
        let self = this;
        e.preventDefault();
        let obj={
          xx:22
        }
        postData('shopManageApi/account/login', JSON.stringify(obj)).then(function (res) {
                
            })
        }

  render() {
    return (
      <div className={styles.from}>
        <img className={styles.logo} src="static/images/p20.png" />
        <div className={styles.h5}>
          <img className={styles.h502} src="static/images/H5-06.png" />
          {/*<img className={styles.h503} src="static/images/H5-06_03.png" />
          <img className={styles.h504} src="static/images/H5-06_04.png" />
          <img className={styles.h505} src="static/images/H5-06_05.png" />
          <img className={styles.h506} src="static/images/H5-06_06.png" />
          <img className={styles.h507} src="static/images/H5-06_07.png" />*/}
        </div>
          <div className={styles.frominput04} onClick={()=>window.location.href="http://gac-toyota.zhiye.com/Intern"}>
             <img src="static/images/end.png" />
          </div>
        </div>
    )
  }
}

