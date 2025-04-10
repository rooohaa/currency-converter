import { computed } from 'vue'
import { useBaseCurrencyStore } from '@/entities/baseCurrency'
import { useCurrencyRatesStore } from '@/entities/currencyRates'
import { getCurrentRates } from '../lib/getCurrentRates'

export function useFilteredRates() {
    const baseCurrencyStore = useBaseCurrencyStore()
    const currencyRatesStore = useCurrencyRatesStore()

    const filteredRates = computed(() => {
        if (    
            !baseCurrencyStore.baseCurrency ||
            currencyRatesStore.currencyRates.length === 0
        ) {
            return []
        }

        return getCurrentRates(
            currencyRatesStore.currencyRates,
            baseCurrencyStore.baseCurrency
        )
    })

    return filteredRates
}
