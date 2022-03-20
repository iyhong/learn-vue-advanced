<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
export default {
  components: { ListItem },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style lang="css" scoped></style>
