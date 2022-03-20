<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import bus from '@/utils/bus';
import ListItem from '@/components/ListItem.vue';
export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner');

    setTimeout(() => {
      this.$store
        .dispatch('FETCH_NEWS')
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
