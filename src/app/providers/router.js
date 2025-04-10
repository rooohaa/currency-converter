import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/mainPage'),
    },
    {
        path: '/convert',
        component: () => import('@/pages/conversionPage'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
