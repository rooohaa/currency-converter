<template>
    <Dropdown
        :modelValue="baseCurrencyStore.baseCurrency"
        :options="baseCurrencies"
        @update:modelValue="baseCurrencyStore.setBaseCurrency"
    />
</template>

<script setup>
import Dropdown from 'primevue/dropdown'
import { baseCurrencies } from '@/entities/baseCurrency'
import { useBaseCurrencyStore } from '@/entities/baseCurrency'

const baseCurrencyStore = useBaseCurrencyStore()
</script>
