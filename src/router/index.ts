import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/image/:id',
            name: 'single-img',
            component: () => import('../views/image/SingleImage.vue')
        },
        {
            path: '/follow',
            name: 'about',
            component: () => import('../views/FollowView.vue')
        }
    ]
})

export default router
