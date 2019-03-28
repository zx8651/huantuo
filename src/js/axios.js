/**
 * Created by truncate on 2017/4/10.
 */
import axios from 'axios';
import Qs from 'qs';
import router from '@/router';
const config = {
  //baseURL: '',
  timeout: 200000, //同步素材会导致报错，时间短了 先关闭掉
  //`withCredentails`选项表明了是否是跨域请求
  withCredentials: true,
  headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'},
  transformRequest: [function (data) {
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    data = Qs.stringify(data);
    return data;
  }],
  //返回数据类型
  responseType: 'json'
}
//那年乱世如麻，愿你们来世拥有锦绣年华.此生无悔入华夏，来世还在种花家
const AxiosInst = axios.create(config);
//请求拦截器
AxiosInst.interceptors.request.use((config) => {
  if (window.localStorage.getItem('userToken')) {
    config.headers.Authorization = 'Bearer ' + `${window.localStorage.getItem('userToken')}`;
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});
//响应拦截器
AxiosInst.interceptors.response.use(response => {
  const resp = response.data;
  let code = resp.code
  let success = resp.success;
  //检查数据是否返回NULL
  if (response.data === null) {
    //return response;
    return Promise.reject(response);
  }
  //检查是否有权限
  if (code === 1001 && status === false) {
    return Promise.reject(response);
  }
  // 未登录
  if (code === 401) {
    router.push({
      name: 'login'
    });
  }
  // 重置token  根
  if (code === 1003) {
    let userInfo = window.localStorage.getItem('userInfo');
    userInfo = userInfo ? JSON.parse(userInfo) : '';
    let data = {
      token: resp.data.token || null,
      account: userInfo.account || null
    }
    window.localStorage.setItem('userInfo', JSON.stringify(data));
    window.localStorage.setItem('userToken', data.token);
    router.push({
      name: 'coupon-list'
    });
  }
  //检查登陆信息是否还存在
  if (code === 2000 && status === false) {
    window.localStorage.removeItem('userInfo');
    window.localStorage.removeItem('userToken');
    router.push({
      path: '/login'
    });
    return Promise.reject(response);
    //return response;
  }
  return response;
}, (error) => {
  // 下面是接口回调的status ,因为我做了一些错误页面,所以都会指向对应的报错页面
  if (error.response.status === 404) {
    router.push({
      path: '/error/404'
    });
  }
  //请求错误时做些事
  return Promise.reject(error);
});
export default AxiosInst;
