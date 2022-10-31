import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import axios from 'axios'
// 有可能有跨域问题
// 怎么解决：
//   1）nginx  2）让后端解决

// 1. 项目打包托管的时候打开
// axios.defaults.baseURL = "http://47.94.210.129:3001"
axios.defaults.baseURL = "http://43.143.39.179:3000/"

//2. 本地接口
// axios.defaults.baseURL = "http://127.0.0.1:3000"
// 前面没有写IP（域名）和端口，就表示向当前服务器发请求

//3. 在开发的时候使用代理解决跨域时候打开，开发的时候使用的接口
// axios.defaults.baseURL = "/api"

Vue.prototype.$http = axios

Vue.directive("height", {
  inserted (el, options) {
    if (typeof options.value == "number") {
      return el.style.height = (window.innerHeight - options.value) + "px";
    } else {
      return el.style.height = (window.innerHeight) + "px";
    }
  }
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
