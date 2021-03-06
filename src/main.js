import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import axios from 'axios'
import store from './vuex'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:1904"

// 请求拦截：发送token
axios.interceptors.request.use(config=>{
  // 每次利用axios发起的请求，都会进入到这里
  // 添加token
  let token = localStorage.getItem('Authorization')
  if(config.url != '/login'){
    config.headers.Authorization = token;
  }
  return config;
}, error=>{
  // 请求失败进入这个回调
  return Promise.reject(error);
});

// 响应拦截：校验token
axios.interceptors.response.use(res=>{
  // 判断token是否校验成功
  // 校验不成功：过期或被伪造
  if(router.currentRoute.matched.some(item=>item.meta.requiresAuth) && res.data.code == 401){
    store.commit("changeLog",false);
    router.replace({
      path:'/login',
      query:{
        des:router.currentRoute.fullPath
      }
    })
  }
  return res;
}, error=>{
    // Do something with response error
    return Promise.reject(error);
});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
// 将router和store注入app根实例。调用的时候用this，eg：this.store
