import axios from 'axios';
import { GLOBAL_URL } from './GLOBAL_conf';
import { _message } from '@utils';

axios.defaults.baseURL = GLOBAL_URL;
axios.defaults.timeout = 60 * 1000;
// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // console.log(config)
    config.data  = new URLSearchParams(config.data);
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(!response.data.success) {
        _message.error(response.data.message);
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default axios;