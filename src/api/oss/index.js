import http from "../../utils/http"
import axios from "axios";

/**
 * oss获取后端签名
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export const ossSign=(params)=>{
    return http.post("/ossSign",params);
}

/**
 * oss删除文件
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
 export const ossDel=(params)=>{
    return http.post("/ossDel",params);
}

/**
 * 前端直传oss
 * @param file
 * @param ossInfo
 */
 export const ossUpload=(file,ossInfo)=>{

    const files = file
    const point = files.name.lastIndexOf('.')
    const suffix = files.name.substr(point) // 获取文件后缀名
    const fileName = ossInfo.key + suffix
    let param = new FormData() // 创建form对象
    param.append('OSSAccessKeyId', ossInfo.OSSAccessKeyId)
    param.append('policy', ossInfo.policy)
    param.append('key', ossInfo.startsWith + fileName)
    param.append('success_action_status', 200)
    param.append('signature', ossInfo.signature)
    param.append('file', files, fileName)
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    }
    // 添加请求头
    return new Promise((res,rej)=>{
        axios.post(ossInfo.host, param, config)
            .then(response => {
                console.log(response)
                if(response.status == 200){
                    console.log('上传成功')
                    res(response)
                }else{
                    rej(response);
                }
            })
    })
    // return http.post("/admin/login",params);
}

/**
 * md 文件直传oss
 * @param file
 * @param mdName
 * @param ossInfo
 * @returns {Promise<unknown>}
 */
 export const ossMDUpload=(file,mdName,ossInfo)=>{
    const files = file
    const point = mdName.lastIndexOf('.')
    const suffix = mdName.substr(point) // 获取文件后缀名
    const fileName = ossInfo.key + suffix
    let param = new FormData() // 创建form对象
    param.append('OSSAccessKeyId', ossInfo.OSSAccessKeyId)
    param.append('policy', ossInfo.policy)
    param.append('key', ossInfo.startsWith + fileName)
    param.append('success_action_status', 200)
    param.append('signature', ossInfo.signature)
    param.append('file', files, mdName)
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    }
    // 添加请求头
    return new Promise((res,rej)=>{
        axios.post(ossInfo.host, param, config)
            .then(response => {
                console.log(response)
                if(response.status == 200){
                    console.log('上传成功')
                    res(response)
                }else{
                    rej(response);
                }
            })
    })
}
