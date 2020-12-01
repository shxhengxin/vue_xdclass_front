import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem("token") || ''
  },
  //同步修改state里面的值
  mutations: {
    SET_TOKEN:(state,token)=>{
      state.token = token;
    }
  },
  //异步修改mutations里面的方法
  //context.commit利用上下文触发mutations某个方法
  //vue 代码里面this.$store.dispatch触发action里面的方法
  actions: {
    setToken(context,token){
      context.commit('SET_TOKEN',token)
    },

    clearToken(context) {
      context.commit('SET_TOKEN','')
    }
  },
  modules: {
  }
})
