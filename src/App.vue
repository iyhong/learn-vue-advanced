<template>
  <div id="app">
    <ToolBar />
    <router-view></router-view>
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

<style></style>
