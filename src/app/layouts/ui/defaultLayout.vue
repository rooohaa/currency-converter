<template>
    <div class="layout-container">
        <app-header />
        <main class="layout-content">
            <slot />
        </main>
    </div>
</template>

<script setup>
import { AppHeader } from '@/widgets/appHeader'
</script>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.layout-content {
    flex: 1;
    overflow: auto;
}
</style>
