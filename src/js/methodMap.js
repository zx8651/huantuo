/**
 * Created by truncate on 2018/7/20.
 * 请求地址API 说明打？号的表示有问题或者不确定
 */

const methodMap = {
  // 用户管理
  IdentifyCode: {url: '/manage/user/getCode', method: 'post'},
  // 用户登陆
  UserLogin: {url: '/api/auth/Login', method: 'post'},
};
export default methodMap;
