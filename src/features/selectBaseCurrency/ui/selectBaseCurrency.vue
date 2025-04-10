<template>
    <Select
        :model-value="baseCurrencyStore.baseCurrency"
        :options="baseCurrencies"
        @update:model-value="baseCurrencyStore.setBaseCurrency"
    />
</template>

<script setup>
import Select from 'primevue/select'
import { useBaseCurrencyStore } from '@/entities/baseCurrency'
import { baseCurrencies } from '@/shared/config/baseCurrencies'

const baseCurrencyStore = useBaseCurrencyStore()
</script>
