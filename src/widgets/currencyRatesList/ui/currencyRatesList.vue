<template>
    <Card>
        <template #title>
            <div class="flex justify-content-between align-items-center">
                <h3>Курсы валют</h3>
                <Button icon="pi pi-refresh" @click="emit('refresh')" />
            </div>
        </template>
        <template #content>
            <div v-if="loading" class="flex justify-content-center">
                <ProgressSpinner
                    style="width: 40px; height: 40px"
                    stroke-width="6"
                />
            </div>
            <ul v-else class="mt-4 mb-4">
                <li v-for="(rate, idx) in rates" :key="rate.to">
                    <span>1 {{ rate.from }} = </span>
                    <span class="font-semibold">
                        {{ formatCurrencyValue(rate.value) }} {{ rate.to }}
                    </span>
                    <Divider v-if="idx !== rates.length - 1" />
                </li>
            </ul>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import ProgressSpinner from 'primevue/progressspinner'
import Button from 'primevue/button'

import { formatCurrencyValue } from '@/shared/lib/formatCurrencyValue'

const props = defineProps({
    rates: {
        type: Array,
        required: true,
    },
    loading: {
        type: Boolean,
        required: true,
    },
})

const emit = defineEmits(['refresh'])
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}
</style>
