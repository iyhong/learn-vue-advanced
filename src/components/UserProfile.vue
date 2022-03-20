<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="userName"></slot>
      <div class="time">
        <slot name="time"></slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['userInfo'],
  computed: {
    ...mapGetters(['fetchedUser']),
  },
};
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.content {
  border: 1px solid;
}
.time {
  font-size: 7px;
}
</style>
