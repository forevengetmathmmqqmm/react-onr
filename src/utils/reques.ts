import axios from "axios";

const axiosApi =  axios.create({
    baseURL: '/api/v1/',
    timeout: 2000,
    headers: { 'X-Custom-Header': 'foobar', 'Token': localStorage.getItem('token') }
  });
// 添加请求拦截器
axiosApi.interceptors.request.use(function (config) {
    config.headers.Token = localStorage.getItem('token');
// 在发送请求之前做些什么
return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});
export default axiosApi;