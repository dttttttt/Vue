import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
   count:0,
   price:0
}
const mutations = {
  ADD(state){
    state.count++ ;
    state.price = state.price+20 
  },
  MINUS(state){
    state.count--;
    state.price = state.price-20
  }

}
const actions = {
  add({commit}){
    commit('ADD')
  },
  minus({commit,state}){
    if(state.count >0){
    commit('MINUS')
  }
}

}
const getters = {
  add(state){
    return state.count += 1;
  }
}

export default new Vuex.Store ({
  state,
  mutations,
  actions,
  getters
})