<template>
  <div>
    <div v-for="(job, index) in jobs" :key="index">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api';
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((res) => (this.jobs = res.data))
      .catch();
  },
};
</script>

<style></style>
