import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/mainPage').then((m) => m.mainPage),
    },
    {
        path: '/convert',
        component: () =>
            import('@/pages/conversionPage').then((m) => m.conversionPage),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
