<template>
    <Card>
        <template #title>
            <div class="flex justify-content-between align-items-center">
                <h3>Курсы валют</h3>
                <Button
                    icon="pi pi-refresh"
                    @click="currencyRatesStore.fetchCurrencyRates"
                />
            </div>
        </template>
        <template #content>
            <div
                v-if="currencyRatesStore.loading"
                class="flex justify-content-center"
            >
                <ProgressSpinner
                    style="width: 40px; height: 40px"
                    stroke-width="6"
                />
            </div>
            <ul v-else class="mt-4 mb-4">
                <li v-for="(rate, idx) in filteredRates" :key="rate.to">
                    <span>1 {{ rate.from }} = </span>
                    <span class="font-semibold">
                        {{ formatCurrencyValue(rate.value) }} {{ rate.to }}
                    </span>
                    <Divider v-if="idx !== filteredRates.length - 1" />
                </li>
            </ul>
        </template>
    </Card>
</template>

<script setup>
import { onMounted } from 'vue'

import Card from 'primevue/card'
import Divider from 'primevue/divider'
import ProgressSpinner from 'primevue/progressspinner'
import Button from 'primevue/button'

import { useFilteredRates } from '@/features/showCurrencyRates'
import { useCurrencyRatesStore } from '@/entities/currencyRates'
import { formatCurrencyValue } from '@/shared/lib/formatCurrencyValue'

const currencyRatesStore = useCurrencyRatesStore()
const filteredRates = useFilteredRates()

onMounted(() => {
    currencyRatesStore.fetchCurrencyRates()
})
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}
</style>
