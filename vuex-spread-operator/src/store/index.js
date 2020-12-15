import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dummy: "vuex dummy state"
  },
  getters: {
    getDummy(state) {
      return state.dummy;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
