import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/mainPage/index'),
    },
    {
        path: '/convert',
        component: () => import('@/pages/conversionPage/index'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
