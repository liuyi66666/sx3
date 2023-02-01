import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:''
  },
  getters: {
    
  },
  mutations: {
    add(state,val){
      state.name=val
    }
  },
  actions: {
  },
  modules: {
  }
})
