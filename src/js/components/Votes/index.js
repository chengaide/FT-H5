import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import styles from './index.scss'
import { hashHistory } from 'react-router'
import { postData } from '../../system/apiHelper'
export default class Votes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: { width: 0 },
      data:[],
      allCount:[],
      resule:0,
      allWidth:[]
    }
  }
  componentWillMount() {
    let that=this;
    let obj={

    };
    postData('result/list', JSON.stringify(obj)).then(function (res) {
      let result=0;
      let allCount=[];
      let allWidth=[];
      let data=res.data;
      data.map((item)=>{
        result+=item.guangfeng_count;
        allCount.push(item.guangfeng_count)
      });
      
    
        console.log(result)
        allCount.map((i)=>{
          if(i){
            let psent=i/result*100+"%";
          let obj={
            width:psent
          }
          allWidth.push(obj);
          }else{
            allWidth.push({width:"0%"});
          }
          
      })
    setTimeout(()=>{
      //alert("11");
      that.setState({
        data,
        result,
        allCount,
        allWidth
      })
    },1000)
     console.log(allWidth)
      
    })
  }
  componentDidMount(){
    // let that=this;
    // let {result,allCount}=this.state;
    // let allWidth=[];
    // if(result){
    //     allCount.map((i)=>{
    //       let psent=i/result*100+"%";
    //       let obj={
    //         width:psent
    //       }
    //       allWidth.push(obj);
    //   })
    // }
    // setTimeout(()=>{
    //   that.setState({
    //     allWidth  
    //   })
    // },1000)
    
  }
  render() {
    let {data,allCount,allWidth}=this.state;
    console.log(allWidth)
    return (
      <div className={styles.from}>
        <div className={styles.fromtop}>
          <img className={styles.fromred} src="static/images/p8.png" />
          <img className={styles.fromword} src="static/images/p10.png" />
        </div>
        
        <div className={styles.frominput}>

          <div className={styles.frominput0}>
            <div className={styles.inputleft}>1</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem01} style={allWidth[0]}> </div>
              <div className={styles.inputnum}><div>{allCount[0]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>2</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem02} style={allWidth[1]}> </div>
              <div className={styles.inputnum}><div>{allCount[1]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>3</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem03} style={allWidth[2]}> </div>
              <div className={styles.inputnum}><div>{allCount[2]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>4</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem04} style={allWidth[3]}> </div>
              <div className={styles.inputnum}><div>{allCount[3]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>5</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem05} style={allWidth[4]}> </div>
              <div className={styles.inputnum}><div>{allCount[4]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>6</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem06} style={allWidth[5]}> </div>
              <div className={styles.inputnum}><div>{allCount[5]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>7</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem07} style={allWidth[6]}> </div>
              <div className={styles.inputnum}><div>{allCount[6]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>8</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem08} style={allWidth[7]}> </div>
              <div className={styles.inputnum}><div>{allCount[7]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>9</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem09} style={allWidth[8]}> </div>
              <div className={styles.inputnum}><div>{allCount[8]}票</div></div>
            </div>
          </div>
          <div className={styles.frominput0}>
            <div className={styles.inputleft}>10</div>
            <div className={styles.inputing}>
              <div className={styles.frominputitem10} style={allWidth[9]}> </div>
              <div className={styles.inputnum}><div>{allCount[9]}票</div></div>
            </div>

          </div>


        </div>
        <img className={styles.votedot} src="static/images/p11.png" />
        <img className={styles.votedot2} src="static/images/p11.png" />
        <img className={styles.sharebg} src="static/images/p12.png" />
        <img className={styles.share} src="static/images/p13.png" onClick={() => { hashHistory.push("end") }} />
      </div>
    )
  }
}

