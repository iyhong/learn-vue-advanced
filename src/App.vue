<template>
  <div id="app">
    <ToolBar />
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';

export default {
  name: 'App',
  components: { ToolBar },
  data() {
    return {
      arr: [],
    };
  },
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
