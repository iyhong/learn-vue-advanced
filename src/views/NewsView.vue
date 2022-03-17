<template>
  <div>
    <div v-for="news in this.$store.state.news" :key="news.id">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
