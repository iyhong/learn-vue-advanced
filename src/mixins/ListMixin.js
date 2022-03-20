export default {
  // 재사용할 컴포넌트 옵션
  created() {
    console.log('mixin!!');
    this.$emit('on:progress');
    this.$store
      .dispatch('FETCH_LIST', this.$route.name)
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
  },
};
