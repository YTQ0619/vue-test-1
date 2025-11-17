import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import home from '../views/home.vue';
import New from '../views/new.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/new',
    name: 'new',
    component: New,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router