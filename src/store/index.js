import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug
})