<template>
  <div>
    <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    console.log('ggg');
    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
      .then((res) => (this.users = res.data))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
