import 'babel-polyfill'
// import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import promise from 'es6-promise';
promise.polyfill();

Vue.prototype.$ajax = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
