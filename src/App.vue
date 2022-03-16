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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
