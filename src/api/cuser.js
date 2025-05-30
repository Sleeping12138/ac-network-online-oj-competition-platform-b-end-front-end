import axios from '@/utils/require.js';

/**
 * 获取用户列表
 * @param {*} param 
 * @returns 
 */
export function getUserList(param) {
    return axios.get('/user/getUserList', { params: param });
}


/**
 * 更改用户状态
 * @param {*} data 
 * @returns 
 */
export function changeStatus(data) {
    return axios.put('/user/changeStatus', data);
}