import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/mainPage/ui/mainPage.vue'),
    },
    {
        path: '/convert',
        component: () => import('@/pages/conversionPage/ui/conversionPage.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
