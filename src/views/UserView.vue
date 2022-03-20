<template>
  <div>
    <UserProfile :userInfo="fetchedUser"></UserProfile>
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
