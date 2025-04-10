<template>
    <default-layout>
        <router-view />
    </default-layout>

    <toast />
</template>

<script setup>
import Toast from 'primevue/toast'
import { DefaultLayout } from '@/app/layouts'
</script>
