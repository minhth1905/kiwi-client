import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import AddPortfolio from '../pages/AddPortfolio.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    {
      path : '/new-portfolio',
      name : 'AddPortfolio',
      component : AddPortfolio
    }
  ]
})
