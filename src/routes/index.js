import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';
import CreateListView from '@/views/CreateListView';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    { path: '/news', name: 'news', component: CreateListView('NewsView') },
    { path: '/ask', name: 'ask', component: CreateListView('AskView') },
    { path: '/jobs', name: 'jobs', component: CreateListView('JobsView') },
    { path: '/user/:id', name: 'user', component: UserView },
    { path: '/item/:id', name: 'item', component: ItemView },
  ],
});

export default router;
