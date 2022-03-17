<template>
  <div>
    <div v-for="(ask, index) in $store.state.asks" :key="index">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      askList: [],
    };
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style></style>
