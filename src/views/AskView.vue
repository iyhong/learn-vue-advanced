<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import bus from '@/utils/bus';

export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner');

    setTimeout(() => {
      this.$store
        .dispatch('FETCH_ASKS')
        .then(() => {
          console.log('fetched!!');
          bus.$emit('end:spinner');
        })
        .catch((err) => {
          console.error(err);
        });
    }, 3000);
  },
};
</script>

<style lang="css" scoped></style>
