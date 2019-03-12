// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import axios from 'axios'

// import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(axios)
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
