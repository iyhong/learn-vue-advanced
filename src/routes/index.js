import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';
// import CreateListView from '@/views/CreateListView';
import NewsView from '@/views/NewsView';
import AskView from '@/views/AskView';
import JobsView from '@/views/JobsView';
import bus from '@/utils/bus';
import { store } from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: CreateListView('NewsView')
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log(5);
            // bus.$emit('end:spinner');
            next();
          })
          .catch(() => console.log('fail'));
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: CreateListView('AskView')
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log(5);
            // bus.$emit('end:spinner');
            next();
          })
          .catch(() => console.log('fail'));
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: CreateListView('JobsView')
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log(5);
            // bus.$emit('end:spinner');
            next();
          })
          .catch(() => console.log('fail'));
      },
    },
    { path: '/user/:id', name: 'user', component: UserView },
    { path: '/item/:id', name: 'item', component: ItemView },
  ],
});

export default router;
