import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAppToast } from '@/shared/lib/toast'
import { currencyRatesApi } from '../api'

export const useCurrencyRatesStore = defineStore('currencyRates', () => {
    const toast = useAppToast()

    // key value pairs (example: { eur-rub: 99.8163 })
    const currencyRates = ref(null)
    const loading = ref(false)

    async function fetchCurrencyRates() {
        try {
            loading.value = true
            const res = await currencyRatesApi.fetchCurrencyRates()
            if (res.status === 200) {
                currencyRates.value = res.data
            } else {
                throw new Error('Failed to fetch currency rates')
            }
        } catch (err) {
            console.error(err)
            toast.error('Failed to fetch currency rates')
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
