<template>
    <section class="mt-4 mb-4">
        <div class="container">
            <currency-rates-list
                :rates="filteredRates"
                :loading="currencyRatesStore.loading"
                @refresh="currencyRatesStore.fetchCurrencyRates"
            />
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { CurrencyRatesList } from '@/widgets/currencyRatesList'
import { useFilteredRates } from '@/features/showCurrencyRates'
import { useCurrencyRatesStore } from '@/entities/currencyRates'

const currencyRatesStore = useCurrencyRatesStore()
const filteredRates = useFilteredRates()

onMounted(() => {
    if (!currencyRatesStore.currencyRates) {
        currencyRatesStore.fetchCurrencyRates()
    }
})
</script>
