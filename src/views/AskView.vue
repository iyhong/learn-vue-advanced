<template>
  <div>
    <div v-for="(ask, index) in askList" :key="index">{{ ask.title }}</div>
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
  async created() {
    try {
      const result = await fetchAskList();
      this.askList = result.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
