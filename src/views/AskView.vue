<template>
  <div>
    <div v-for="(ask, index) in askList" :key="index">{{ ask }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api';
export default {
  data() {
    return {
      askList: [],
    };
  },
  created() {
    fetchAskList().then((res) => (this.askList = res.data));
  },
};
</script>

<style></style>
