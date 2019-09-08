// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import './mock/mock.js'


//所有的组件都继承自Vue的原型，把axios方法赋值到vue的原型中，vue的实例就能使用axios了。
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
