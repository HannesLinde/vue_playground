import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
    tripleCounter: state => {
      return state.counter * 3;
    }
  },
  mutations: {
    increment: (state,payload) => {
      state.counter +=payload;
    },
    setToZero: (state, payload) => {
      state.counter = 0;
    }
  },
  actions: {
    asyncIncrement: ({commit}, asyncNum) => {
      setTimeout(() => {
        commit('increment', asyncNum.by); // call increment mutation
      }, asyncNum.duration)
    },
    reset:({commit}) => {
      commit('setToZero')
    }
  },
  modules: {
  }
})
