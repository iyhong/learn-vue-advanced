<template>
  <div>
    <UserProfile :userInfo="fetchedUser">
      <template #userName> UserName: {{ fetchedUser.id }} </template>
      <template #time>
        <span> Joined {{ fetchedUser.created }} </span>
      </template>
      <template #karma>
        <span>
          {{ fetchedUser.karma }}
        </span>
      </template>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>

<style></style>
