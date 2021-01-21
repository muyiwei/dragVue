import Vue from 'vue'
import mutations from "./mutations"
import actions from "./action"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginResult:JSON.parse(localStorage.getItem("loginResult")||"{}"),
    pageIndex:localStorage.getItem("pageIndex")||0,
    menuIndex:localStorage.getItem("menuIndex")||0
  },
  mutations,
  actions,
  modules: {
  }
})
