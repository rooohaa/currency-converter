import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/MainPage'),
    },
    {
        path: '/convert',
        component: () => import('@/pages/ConversionPage'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
