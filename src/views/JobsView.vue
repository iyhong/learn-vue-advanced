<template>
  <div>
    <div v-for="(job, index) in this.$store.state.jobs" :key="index">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
