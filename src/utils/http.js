/**
 * @description axios 封装
 */

import axios from "axios";
import { ElMessage } from 'element-plus'

// 配置rootUrl
const service = axios.create({
    // 基准路径
    baseURL :"/api",//3、设置开发域名
    //4、 超时时间的设置 ms
    timeout: 3000,
    // withCredentials: true ,// 允许携带cookie
    headers:{
        "Content-Type": "application/json;charset=UTF-8",
    } //5、携带过去的请求头
})

// axios 请求拦截 可以设置token
service.interceptors.request.use(
    config => { return config },
    err => { 	return Promise.reject(err); }
);

//axios 相应拦截
service.interceptors.response.use(
    response => {return response },
    err => { 	return Promise.reject(err); }
);



/**
 * 自定义访问路由 可以自由拼接，可用于resful 请求
 * @param url
 * @param params
 * @returns {string}
 */
let cusUrl=(url, params)=>{
    //可以自由凭借 eg：模拟get请求
    let totalUrl =url;
    if(params){
        totalUrl+="?"
        for (let param in params){
            console.log(param);
            totalUrl+=param+"="+params[param]+"&"
        }
        totalUrl=totalUrl.substring(0,totalUrl.length-1);
    }
    return totalUrl;
}

//抛出 get post方法  方法可对传参或url进行修改
export default {
    service,
    post(url, params) {
        console.log(`res(POST):-${url}:${JSON.stringify(params)}`);
        return new Promise((resolve,reject)=>{
            service.post(url,params).then(res=>{
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    get(url, params={}) {
        console.log(`res(GET):-${url}:${JSON.stringify(params)}`);
        return new Promise((resolve,reject)=>{
            service.get(url,{
                params
            }).then(res=>{
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
