<template>
  <div>
    <div v-for="(news, index) in newsList" :key="index">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api';

export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    fetchNewsList().then((res) => (this.newsList = res.data));
  },
};
</script>

<style></style>
