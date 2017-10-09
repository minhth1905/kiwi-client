import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name : 'Login',
      component : Login
    },
    {
      path: '/register',
      name : 'Register',
      component : Register
    },
  ]
})
