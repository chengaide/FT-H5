/**
 * Created by cg
 */
import * as logger from './logger.js';
import {hashHistory} from 'react-router'
let apiHostUrl = "http://api.jiyiguan.nowui.com/guangfeng/";
import { Toast } from 'antd-mobile';

//get数据的方法
export const getData = (url, data)=> {
    return operateData(apiHostUrl+url, 'get', data)
};
//post 数据方法
export const postData = (url, data)=> {
   return operateData(apiHostUrl+url, 'post', data);
};
//操作数据的方法
export const operateData = (url, method, data)=> {
    return new Promise(function (resolve, reject) {
        //var token = systemConfig.handleToken.get();
        $.ajax({
            url: url,
            type: method,
            data: data,
            
            contentType:'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("token", "");
                xhr.setRequestHeader("platform", "WEB");
                xhr.setRequestHeader("version", "1.0.0");
            },
            success: function (res) {
                Toast.hide();
                if(res.code==200){
                    resolve(res);
                }else{
                Toast.info(res.message,1,()=>{hashHistory.push("vote");});
                //return
            };
             
            },
            error: function (req, status, errinfo) {
                logger.error(req);
                logger.log(req.status);
                Toast.info(res.message,1);
                reject(req);
               
            }
        });
    });
};