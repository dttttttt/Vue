// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import './mock/mock.js'

Vue.prototype.$axios = axios

Vue.config.productionTip = false
//js 
import FastClick from 'fastclick'
FastClick.attach(document.body);
//css
import  './assets/css/reset.css'
import  './assets/css/iconfont.css'
import './assets/css/mintui.css'
import { version } from 'punycode';



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
