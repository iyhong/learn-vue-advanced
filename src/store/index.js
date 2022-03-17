import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASKS(state, asks) {
      state.asks = asks;
    },
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((res) => {
          console.log(res);
          console.log(context);
          context.commit('SET_NEWS', res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    FETCH_ASKS(context) {
      fetchAskList()
        .then((res) => {
          context.commit('SET_ASKS', res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
