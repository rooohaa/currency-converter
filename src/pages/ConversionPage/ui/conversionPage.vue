<template>
    <section class="mt-4 mb-4">
        <div class="container">
            <currency-converter-form />
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { CurrencyConverterForm } from '@/features/currencyConverter'
import { useCurrencyRatesStore } from '@/entities/currencyRates'

const currencyRatesStore = useCurrencyRatesStore()

onMounted(() => {
    if (!currencyRatesStore.currencyRates) {
        currencyRatesStore.fetchCurrencyRates()
    }
})
</script>
