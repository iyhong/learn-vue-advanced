<template>
  <div>
    <ul class="ask-list">
      <li class="post" v-for="(ask, index) in fetchedAsk" :key="index">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ ask.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="ask-title">
            <a :href="ask.url">{{ ask.title }}</a>
          </p>
          <small class="link-text">
            {{ ask.time_ago }} by
            <router-link :to="`item/${ask.id}`" class="link-text">
              {{ ask.user }}
            </router-link></small
          >
        </div>
      </li>
    </ul>
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

<style lang="css" scoped>
.ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828393;
}
</style>
