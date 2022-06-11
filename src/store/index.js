import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
    LOGIN_USER(state) {
state.isLoggedIn = true;
    }
  },
  actions: {
  },
  modules: {
  },
  strict: true // only in development mode
})
