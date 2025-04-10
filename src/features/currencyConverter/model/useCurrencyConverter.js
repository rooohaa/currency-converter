import { ref } from 'vue'
import { baseCurrenciesMap } from '@/shared/config/baseCurrencies'
import { useAppToast } from '@/shared/lib/toast'
import { useBaseCurrencyStore } from '@/entities/baseCurrency'
import { useCurrencyRatesStore } from '@/entities/currencyRates'

export function useCurrencyConverter() {
    const toast = useAppToast()
    const baseCurrencyStore = useBaseCurrencyStore()
    const currencyRatesStore = useCurrencyRatesStore()

    const topRow = ref({
        amount: null,
        currency: baseCurrencyStore.baseCurrency,
    })

    const bottomRow = ref({
        amount: null,
        currency: baseCurrenciesMap.USD,
    })

    function getRate(from, to) {
        if (from === to) {
            toast.info('Две одинаковые валюты')
            return 1
        }

        const key = `${from.toLowerCase()}-${to.toLowerCase()}`
        return currencyRatesStore.currencyRates[key] || 0
    }

    function convert(amount, rate, digits = 2) {
        const parsed = parseFloat(amount)
        if (isNaN(parsed) || isNaN(rate)) return null
        return (parsed * rate).toFixed(digits)
    }

    function recalculateBottom() {
        const rate = getRate(topRow.value.currency, bottomRow.value.currency)
        bottomRow.value.amount = convert(topRow.value.amount, rate)
    }

    function recalculateTop() {
        const rate = getRate(bottomRow.value.currency, topRow.value.currency)
        topRow.value.amount = convert(bottomRow.value.amount, rate)
    }

    return {
        topRow,
        bottomRow,
        recalculateBottom,
        recalculateTop,
    }
}
