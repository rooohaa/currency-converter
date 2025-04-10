<template>
    <header class="app-header">
        <div class="container">
            <div class="flex align-items-center justify-content-between h-full">
                <ul class="flex align-items-center gap-2">
                    <li v-for="link in links" :key="link.path">
                        <router-link :to="link.path">
                            <Button
                                :label="link.label"
                                :icon="link.icon"
                                :severity="
                                    $route.path === link.path
                                        ? undefined
                                        : 'secondary'
                                "
                            />
                        </router-link>
                    </li>
                </ul>

                <select-base-currency />
            </div>
        </div>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Button from 'primevue/button'
import { SelectBaseCurrency } from '@/features/selectBaseCurrency'

const $route = useRoute()

const links = [
    {
        path: '/',
        label: 'Главная',
        icon: 'pi pi-home',
    },
    {
        path: '/convert',
        label: 'Конвертация',
        icon: 'pi pi-money-bill',
    },
]
</script>

<style scoped>
.app-header {
    height: 64px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.app-header ul {
    list-style: none;
}
</style>
