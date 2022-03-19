<template>
  <div>
    <ul class="jobs-list">
      <li
        class="post"
        v-for="(job, index) in this.$store.state.jobs"
        :key="index"
      >
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="jobs-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }},
            <!-- <router-link :to="`item/${job.id}`" class="link-text">
              {{ job.domain }}
            </router-link> -->
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style lang="css" scoped>
.jobs-list {
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
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828393;
}
</style>
