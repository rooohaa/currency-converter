import { ref } from 'vue'
import { baseCurrenciesMap } from '@/shared/config/baseCurrencies'
import { useBaseCurrencyStore } from '@/entities/baseCurrency'

export function useCurrencyConverter() {
    const baseCurrencyStore = useBaseCurrencyStore()

    const topRow = ref({
        amount: null,
        currency: baseCurrencyStore.baseCurrency,
    })

    const bottomRow = ref({
        amount: null,
        currency: baseCurrenciesMap.USD,
    })

    return {
        topRow,
        bottomRow,
    }
}
