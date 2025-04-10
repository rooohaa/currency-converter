<template>
    <Dropdown
        :modelValue="baseCurrencyStore.baseCurrency"
        :options="baseCurrencies"
        @update:modelValue="baseCurrencyStore.setBaseCurrency"
    />
</template>

<script setup>
import Dropdown from 'primevue/dropdown'
import { useBaseCurrencyStore } from '@/entities/baseCurrency'
import { baseCurrencies } from '@/shared/config/baseCurrencies'

const baseCurrencyStore = useBaseCurrencyStore()
</script>
