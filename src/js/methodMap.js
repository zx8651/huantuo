/**
 * Created by truncate on 2018/7/20.
 * 请求地址API 说明打？号的表示有问题或者不确定
 */

const methodMap = {
  /** 公共图片素材列表 **/
  CommonImg: {url: '/manage/material/common_img', method: 'get'},
  /** 公共删除图片接口 **/
  CommonRemoveAttachment: {url: '/common/upload/oss_remove', method: 'post'},
  /** 编辑器素材列表 **/
  EditorMaterialList: {url: '/manage/editor_material/list', method: 'get'},
  /** 编辑器素材分类 **/
  EditorMaterialCategory: {url: '/wechat/wxMaterial/getRichTextCate', method: 'get'},
  /** 商户平台登陆中心 **/
  MerchantLogin: {url: '/manage/user/login', method: 'post'},
  /** 商户平台登陆中心退出 **/
  MerchantQuit: {url: '/manage/user/login', method: 'post'},
  /** 商户注册 **/
  MerchantRegister: {url: '/manage/passport/register', method: 'post'},
  /** 商户退出 **/
  MerchantSignOut: {url: '/manage/passport/sign_out', method: 'post'},
  /** 微信菜单获取 **/
  WeChatMenu: {url: '/wechat/menu/getMenu', method: 'get'},
  /** 微信菜单保存 **/
  WeChatMenuSave: {url: '/wechat/menu/setMenu', method: 'post', json: true},
  /** 微信菜单同步 **/
  WeChatMenuSync: {url: '/wechat/menu/menuSync', method: 'post', json: true},

  IdentifyCode: {url: '/manage/user/getCode', method: 'post'},
  // 用户登陆
  UserLogin: {url: '/public/user/login', method: 'post'},
  // 用户注册
  UserSignup: {url: '/public/user/signup', method: 'post'},

  CouponList: {url: '/public/coupon/couponList', method: 'get'},

  CouponSave: {url: '/api/coupon/couponSave', method: 'post'},

  CouponSave: {url: '/api/coupon/couponSave', method: 'post'},


  CouponDetail: {url: '/public/coupon/couponDetail', method: 'get'},

  CouponRemove: {url: '/api/coupon/couponRemove', method: 'post'},

  QuanMMCoupon: {url: '/api/coupon/quanmama', method: 'get'},

  CategoryList: {url: '/public/coupon/category', method: 'get'},

  CategorySave: {url: '/api/coupon/category/save', method: 'post'},

  CategoryDestory: {url: '/api/coupon/category/destory', method: 'post'},

  CategoryGoods: {url: '/public/coupon/categoryGoods', method: 'get'},

  RecommendList: {url: '/public/coupon/recommend', method: 'get'},

  RecommendSave: {url: '/api/coupon/recommend/save', method: 'post'},

  RecommendDestory: {url: '/api/coupon/recommend/destory', method: 'post'},

  BannerList: {url: '/public/banner/list', method: 'get'},

  BannerSave: {url: '/api/banner/save', method: 'post'},

  BannerDestory: {url: '/api/banner/destory', method: 'post'},

  PDDCoupon: {url: '/api/coupon/pdd', method: 'get'},

  VersionSave: {url: '/api/version/save', method: 'post'},

  VersionList: {url: '/api/version/list', method: 'post'},

  VersionDestory: {url: '/api/version/destory', method: 'post'},

  VersionInfo: {url: '/public/version/info', method: 'get'},

  SpiderList: {url: '/api/spider/list', method: 'get'},

  SpiderRemove: {url: '/api/spider/remove', method: 'post'},

  SpiderSave: {url: '/api/spider/save', method: 'post'},


  StartSpider: {url: '/api/spider/startSpider', method: 'post', json: true},

  StartSpiderList: {url: '/api/spider/getStartSpiderList', method: 'get'},
  CouonDeletePage: {url: '/api/coupon/deleteCurrentPage', method: 'post', json: true},
  CouonDeleteAll: {url: '/api/coupon/deleteAll', method: 'post'}
};
export default methodMap;
