import React, { Component } from 'react'
import { Flex, Toast } from 'antd-mobile';
import styles from './index.scss'
import { hashHistory } from 'react-router'
import { postData } from '../../system/apiHelper'
let checkSubmitFlg = false;
import moment from 'moment';
import { handleLocalStorage } from '../../system/dataStorage'

export default class Froms extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      guangfeng_name: "",
      guangfeng_phone: "",
      guangfeng_school: "",
      guangfeng_major: ""
    }
  }
  componentDidMount() {
    //console.log(zhNow)
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("xxxxx");
    const zhNow = moment().utcOffset(8).format('YYYY-MM-DD');
    if (checkSubmitFlg == true) {
      Toast.info("您已经提交过啦", 1);
      return; //当表单被提交过一次后checkSubmitFlg将变为true,根据判断将无法进行提交。 

    }
    checkSubmitFlg == true;
    let self = this;
    let { id } = this.props;
    let votetime = handleLocalStorage.get("votetime");
    let { guangfeng_name, guangfeng_phone, guangfeng_school, guangfeng_major } = this.state;
    if (guangfeng_name == "" || guangfeng_phone == "" || guangfeng_school == "" || guangfeng_major == "") {
      Toast.info("信息不能为空", 1);
      return
    }
    let req = /^1(3|4|5|7|8)\d{9}$/;
    let req2 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
    if (!(req.test(guangfeng_phone))) {
      Toast.info("请输入正确的电话号码", 1);
      return
    }
    if (votetime) {
      if (votetime == zhNow) {
        Toast.info("您今天已经投过啦！", 1);
        return
      }
    }
    let obj = {
      guangfeng_number: id,
      guangfeng_name,
      guangfeng_phone,
      guangfeng_school,
      guangfeng_major
    }
    Toast.loading('加载中...', 10, () => {
    console.log('加载完成!!!');
    });
    postData('save', JSON.stringify(obj)).then(function (res) {
      
      if (res.code == 200) {
        Toast.info("投票成功", 1, () => {
          hashHistory.push("vote");
          handleLocalStorage.set("votetime", zhNow)
        });
      } 
      
    })
  }
  handlerChange(e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className={styles.from}>
        <div className={styles.fromtop}>
          <img className={styles.fromred} src="static/images/p8.png" />
          <img className={styles.fromword} src="static/images/p9.png" />
        </div>
        <form>
          <div className={styles.frominput}>
            <div className={styles.frominput00}>
              <div className={styles.inputleft}>姓名：</div>
              <input required name="guangfeng_name" value={this.state.guangfeng_name} onChange={this.handlerChange} className={styles.frominputitem} />
            </div>
            <div className={styles.frominput01}>
              <div className={styles.inputleft}>电话：</div>
              <input required name="guangfeng_phone" value={this.state.guangfeng_phone} onChange={this.handlerChange} className={styles.frominputitem} />
            </div>
            <div className={styles.frominput02}>
              <div className={styles.inputleft}>学校：</div>
              <input required name="guangfeng_school" value={this.state.guangfeng_school} onChange={this.handlerChange} className={styles.frominputitem} />
            </div>

            <div className={styles.frominput03}>
              <div className={styles.inputleft}>专业：</div>
              <input required name="guangfeng_major" value={this.state.guangfeng_major} onChange={this.handlerChange} className={styles.frominputitem} />
            </div>
            <div className={styles.tips}>投票赢取广州观战机会</div>
            <button className={styles.frominput04} type="submit" onClick={this.handleSubmit}>
              确定
          </button>
          </div>
        </form>
      </div>
    )
  }
}

