<template>
  <div>
    <p>Title: {{ item.title }}</p>
    <p class="content">
      Content:
      <span v-html="item.content"></span>
    </p>
    <p>Time_ago: {{ item.time_ago }}</p>
    <p>User: {{ item.user }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style scoped>
.content {
  border: 1px solid;
}
</style>
>
