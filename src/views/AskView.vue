<template>
  <div>
    <p v-for="(ask, index) in fetchedAsk" :key="index">
      <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
      <small> {{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
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
