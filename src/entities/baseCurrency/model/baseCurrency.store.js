import { ref } from 'vue'
import { defineStore } from 'pinia'
import { baseCurrenciesMap } from '@/shared/config/baseCurrencies'

const STORAGE_KEY = 'baseCurrency'

export const useBaseCurrencyStore = defineStore('baseCurrency', () => {
    const storedCurrency = localStorage.getItem(STORAGE_KEY)
    const baseCurrency = ref(storedCurrency || baseCurrenciesMap.USD)

    function setBaseCurrency(currency) {
        baseCurrency.value = currency
        localStorage.setItem(STORAGE_KEY, currency)
    }

    return {
        baseCurrency,
        setBaseCurrency,
    }
})
