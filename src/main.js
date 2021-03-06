// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'
import axios from './config/axios'
import qs from 'qs'
import MintUI from 'mint-ui'

Vue.config.productionTip = false
Vue.prototype.$http= axios
import $ from 'jquery'

Vue.use(MintUI)

import 'mint-ui/lib/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
