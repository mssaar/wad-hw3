import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import Posts from '@/views/Posts.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/about', name: 'AboutView', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
