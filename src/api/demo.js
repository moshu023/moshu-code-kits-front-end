import http from "../utils/http"

/**
 * get访问测试
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export const demoGet=(params)=>{
    return http.get("/demoGet",params);
}
/**
 * post访问测试
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export const demoPost=(params)=>{
    return http.post("/demoPost",params);
}

export const demoMD=()=>{
    return http.get("http://localhost:3000/demo.md", {});
}
export const demoMDOSS=()=>{
    return http.get("https://vitedemo.oss-cn-beijing.aliyuncs.com/demo/1638779297980.md", {});
}