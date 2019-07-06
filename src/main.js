import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import 'font-awesome/scss/font-awesome.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})

router.beforeEach((to,from,next)=>{
  if(to.path ==='/login'){
    sessionStorage.removeItem('user');
  }
  var user=sessionStorage.getItem('user');
  if(!user&&to.path!=='/login'){
    next({
      path:'/login'
    })
  }else{
    next();
  }
})