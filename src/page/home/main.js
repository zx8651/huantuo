// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'

// import Validate from '../build/validate'
import Http from './js/http'
import 'vant/lib/index.css'
// Vue.prototype.$http = Http
// import Vant from 'vant'


Vue.use(Http)
Vue.config.productionTip = false
Vue.use(animate)
// Vue.use(Vant)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
