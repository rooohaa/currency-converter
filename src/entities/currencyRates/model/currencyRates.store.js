import { ref } from 'vue'
import { defineStore } from 'pinia'

import { currencyRatesApi } from '../api'

export const useCurrencyRatesStore = defineStore('currencyRates', () => {
    const currencyRates = ref([])
    const loading = ref(false)

    async function fetchCurrencyRates() {
        try {
            loading.value = true
            const res = await currencyRatesApi.fetchCurrencyRates()
            if (res.status === 200) {
                currencyRates.value = res.data
            }
        } catch (err) {
            console.error(err)
        } finally {
            loading.value = false
        }
    }

    return {
        currencyRates,
        loading,
        fetchCurrencyRates,
    }
})
