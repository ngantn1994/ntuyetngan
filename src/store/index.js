import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homepageActiveSection: 1,
  },
  mutations: {
    updateHomepageSection(state, value) {
      state.homepageActiveSection = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
