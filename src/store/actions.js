import { fetchNewsList, fetchJobsList, fetchAskList } from '../api';

export default {
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
};
