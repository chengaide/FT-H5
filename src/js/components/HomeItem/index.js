import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import styles from './index.scss'
const tips = ["作品1", "作品2"]
export default class HomeItem extends Component {

  render() {
    return (
      <div id="page1" className={styles.home}>
        <img className={styles.top} src="static/images/p17.png" />
        <img className={styles.rotate} src="static/images/p1.png" />
        <img className={styles.dot} src="static/images/dot.png" />
        <img className={styles.dot2} src="static/images/dot.png" />
        <div className={styles.allquan}>
          <img style={{ width: "100%" ,display: "block"}} src="static/images/p3_1.png" />
          <img className={styles.circle2} src="static/images/p2.png" />
          <img className={styles.circle4} src="static/images/p4.png" />
          <img className={styles.circle2} src="static/images/p3.png" />
          <div className={styles.circle3}>
            <img style={{ width: "100%" ,display: "block"}} src="static/images/p3_1.png" />
            <a className={styles.aurl} onClick={() => { hashHistory.push("pro/1") }}></a>
            <a className={styles.aur2} onClick={() => { hashHistory.push("pro/2") }}></a>
            <a className={styles.aur3} onClick={() => { hashHistory.push("pro/3") }}></a>
            <a className={styles.aur4} onClick={() => { hashHistory.push("pro/4") }}></a>
            <a className={styles.aur5} onClick={() => { hashHistory.push("pro/5") }}></a>
            <a className={styles.aur6} onClick={() => { hashHistory.push("pro/6") }}></a>
            <a className={styles.aur7} onClick={() => { hashHistory.push("pro/7") }}></a>
            <a className={styles.aur8} onClick={() => { hashHistory.push("pro/8") }}></a>
            <a className={styles.aur9} onClick={() => { hashHistory.push("pro/9") }}></a>
            <a className={styles.aurl0} onClick={() => { hashHistory.push("pro/10") }}></a>
          </div>
        </div>


        <div className={styles.word1}><p><span className={styles.spans}>哈尔滨工业大学(威海校区)：A-ring</span></p><p>《我想让大家“enjoy camry”》</p></div>
        <div className={styles.word2}><p><span className={styles.spans}>哈尔滨工业大学(威海校区)：Living Levin</span></p><p>《我想来场“雷凌突击”》</p></div>
        <div className={styles.word3}><p><span className={styles.spans}>西安交通大学：PUMP队</span></p><p>《我想“电”掣风驰“泵”发激情》</p></div>
        <div className={styles.word4}><p><span className={styles.spans}>武汉理工大学：乘丰破浪队</span></p><p>《我想复活MPV》</p></div>
        <div className={styles.word5}><p><span className={styles.spans}>哈尔滨工业大学(威海校区)：享·未来 队</span></p><p>《我要“致享”遍天下》</p></div>
        <div className={styles.word6}><p><span className={styles.spans}>湖南大学：麓山脚下造个车</span></p><p>《我想打造汽车穿的A.J》</p></div>
        <div className={styles.word7}><p><span className={styles.spans}>合肥工业大学：开拓者</span></p><p>《我想优化车载导航》</p></div>
        <div className={styles.word8}><p><span className={styles.spans}>华南理工大学：内外同心队</span></p><p>《我想给汉兰达遮风挡雨》</p></div>
        <div className={styles.word9}><p><span className={styles.spans}>湖南大学：千年学府队</span></p><p>《我想将营销做在“下一代”》</p></div>
        <div className={styles.word10}><p><span className={styles.spans}>重庆大学：藤原とうふ店</span></p><p>《我想让玻璃变身》</p></div>
        <p className={styles.title}>点击座位查看作品</p>
      </div>
    )
  }
}



