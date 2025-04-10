<template>
    <Card>
        <template #title>
            <h3>Конвертер валют</h3>
        </template>

        <template #content>
            <div class="flex flex-column gap-2 mt-4 mb-4">
                <currency-row
                    v-model:amount="topRow.amount"
                    v-model:currency="topRow.currency"
                    :disabled="!currencyRatesStore.currencyRates"
                />
                <currency-row
                    v-model:amount="bottomRow.amount"
                    v-model:currency="bottomRow.currency"
                    :disabled="!currencyRatesStore.currencyRates"
                />
            </div>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card'

import { useCurrencyRatesStore } from '@/entities/currencyRates'

import CurrencyRow from '../components/currencyRow.vue'
import { useCurrencyConverter } from '../model/useCurrencyConverter'

const { topRow, bottomRow } = useCurrencyConverter()

const currencyRatesStore = useCurrencyRatesStore()
</script>
