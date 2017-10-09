import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import LandingPage from '../pages/LandingPage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }
  ]
})
