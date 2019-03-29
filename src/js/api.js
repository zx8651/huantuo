import axios from 'axios'
import { Toast } from 'vant'
import utils from './util'
import Qs from 'qs'

// const CancelToken = axios.CancelToken
// const source = CancelToken.source()

const config = {
  baseURL: process.env.NODE_ENV === 'development' ? 'https://core.facc.net.cn' : '',
  timeout: 200000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
    // token: utils.local('token')
  },
  // cancelToken: source.token,
  transformRequest: [function (data) {
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    data = Qs.stringify(data)
    return data
  }],
  // 返回数据类型
  responseType: 'json'
}
const AxiosInst = axios.create(config)
// 请求验证拦截器
AxiosInst.interceptors.request.use(config => {
  // store.commit('UPDATE_LOADING', true); //显示loading,这里没有用vuex可以省去
  // 判断请求不是登陆接口的时候,字段是不是过期了,(根据业务逻辑做对应的处理)
  // 根据业务逻辑做对应的处理
  if (utils.local.get('token')) {
    config.headers['token'] = `${window.localStorage.getItem('token')}`
  }
  // 判断是否是login页面
  if (config.url.indexOf('login') < 0) {
    let lessTime = Number(utils.local.get('expireTime')) - Date.now() // 后台返回的过期时间与现在的进行计算
    if (lessTime <= 0) {
      Toast.fail('登陆过期')
      // source.token('token过期了')
      // store.commit('UPDATE_LOADING', false); //隐藏loading
      // window.location.href = '/login'
      utils.local.clear()
    }
  }
  return config
})
// 返回数据拦截器
AxiosInst.interceptors.response.use(res => {
  if (res.config.url.indexOf('login') >= 0) {
    const { token, expireTime, code, data } = res.data
    if (code === '200') {
      // 登陆后做出一些本地的处理，按需加载,()
      // ...................
      utils.local.set('expireTime', expireTime) // 过期时间
      utils.local.set('token', token)
    }
    if(code === '401') {
      gettoken(res.config.url,)
      window.location.href = '/login'

    }
  }
  return res
})
const gettoken = () => {
  window.localStorage.setItem('token', 11)
  locatiton.reload();
}
// 封装请求方法
const formatReq = function (method, url, data, json) {
  if (json) {
    AxiosInst.defaults.headers['Content-Type'] = 'application/json'
    AxiosInst.defaults.transformRequest = [function (data) {
      data = JSON.stringify(data)
      return data
    }]
  }
  return new Promise((resolve, reject) => {
    AxiosInst({
      method,
      url,
      data
    })
      .then(r => {



        //统一处理
        // store.commit('UPDATE_LOADING', false); //隐藏loading
        // 这里可以添加指定对应状态码的处理方式,比如登陆过期,res.data.code === '6666' 路由跳转到login
        resolve(r)
      })
      .catch(e => {
        // store.commit('UPDATE_LOADING', false); //隐藏loading
        Toast.fail('登陆过期')
        reject(e.message)
        // Message.error(e.message);
      })
  })
}


export default AxiosInst
