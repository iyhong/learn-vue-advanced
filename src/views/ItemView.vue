<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <UserProfile>
        <template #userName>
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </template>
        <template #time>
          {{ item.time_ago }}
        </template>
      </UserProfile>
    </section>
    <section>
      <h2>
        {{ item.title }}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
    this.$store.dispatch('FETCH_USER', this.item.user);
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
