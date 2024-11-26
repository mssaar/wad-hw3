import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import Posts from '@/views/Posts.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/posts', name: 'Posts', component: Posts }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
