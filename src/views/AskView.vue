<template>
  <div>
    <div v-for="(ask, index) in ask" :key="index">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },

  computed: {
    ...mapState({
      ask: (state) => state.asks,
    }),
    // ask() {
    //   return this.$store.state.asks;
    // },
  },
};
</script>

<style></style>
