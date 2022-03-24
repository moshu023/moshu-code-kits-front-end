import http from "../../utils/http"

/**
 * 创建用户
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export const createUser=(params)=>{
    return http.post("/createUser",params);
}
/**
 * 更新用户
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export const updateUser=(params)=>{
    return http.post("/updateUser",params);
}

/**
 * 获取用户
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
 export const readUser=(params)=>{
    return http.post("/readUser",params);
}
/**
 * 删除用户
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export const delUser=(params)=>{
    return http.post("/delUser",params);
}
