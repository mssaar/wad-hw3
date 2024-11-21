import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/LoginView.vue'
import View1 from '../views/Posts.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [{
        path: '/',
        name: 'login',
        component: HomeView
    },
    {
        path: '/posts',
        name: 'posts',
        component: View1
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router