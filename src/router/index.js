/**
 * Created by sailengsi on 2017/5/11.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import { Home } from 'layout/'
import { Login } from 'views/'
import Function from './function/'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      hidden: true,
      redirect (to) {
        return 'login'
      }
    }, {
      path: '/login',
      name: '登录',
      hidden: true,
      component: Login
    },
    Function
  ]
})
