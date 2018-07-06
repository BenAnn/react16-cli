import axios from 'axios';
import qs from 'qs'
import { createHashHistory } from 'history'

let url = "xxx"

// 创建一个新的axios实例
const instance = axios.create({
    baseURL: url,
    headers: {
        "content-type": 'application/x-www-form-urlencoded;charset=utf-8'
    },
    withCredentials: true, // 是否允许带cookie这些
})

// 请求拦截器
instance.interceptors.request.use((config) => {
	return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use((config) => {
    // 关闭loading
    return config;
}, (error) => {
    return Promise.reject(error)
})

// 公用http方法
const Http = {

	ajax({
        url = "",
        method = 'get',
        data = {},
        params = {},
    }) {
        return new Promise((resolve, reject) => {
            instance({ method, url, data, params }).then((res) => {
                if(res.data.status == -1){
                    message.error('用户未登录，请重新登录');

                    createHashHistory().push('/user/login')
                }else if(res.data.status == 500) {
                    message.error('服务器错误')
                }
                resolve(res.data)
            }, (error) => {
                // alert('系统繁忙，请稍候再试')
                reject(err)
            }).catch(err => {
                console.log(err)
            })
        })
    },

    // 公用get方法
    get({ url = "", params = {} }) {
        return this.ajax({
            method: 'get',
            url,
            params
        })
    },

    // 公用post方法
    post({
        url = '',
        data = {},
        params = {},
    }) {
        return this.ajax({
            method: 'post',
            url,
            data: qs.stringify(data),
            params,
        })
	},

}

export default Http;
