import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedUser(state) {
      return state.user;
    },
  },
  mutations,
  actions,
});
