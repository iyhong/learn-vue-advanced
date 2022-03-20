<template>
  <div id="app">
    <ToolBar />
    <transition name="page">
      <router-view></router-view>
    </transition>
    <MySpinner :loading="lodingStatus"></MySpinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import MySpinner from './components/MySpinner.vue';
import bus from '@/utils/bus';

export default {
  name: 'App',
  components: { ToolBar, MySpinner },
  methods: {
    startSpinner() {
      this.lodingStatus = true;
    },
    endSpinner() {
      this.lodingStatus = false;
    },
  },
  data() {
    return {
      arr: [],
      lodingStatus: false,
    };
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
