import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItem,
} from '../api';

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
  FETCH_USER(context, userName) {
    fetchUserInfo(userName)
      .then((res) => {
        context.commit('SET_USER_INFO', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  FETCH_ITEM(context, itemId) {
    fetchItem(itemId)
      .then((res) => {
        context.commit('SET_ITEM', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
