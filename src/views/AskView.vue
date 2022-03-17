<template>
  <div>
    <div v-for="(ask, index) in fetchedAsk" :key="index">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },

  computed: {
    ...mapGetters(['fetchedAsk']),

    // ...mapState({
    //   ask: (state) => state.asks,
    // }),
    // ask() {
    //   return this.$store.state.asks;
    // },
  },
};
</script>

<style></style>
