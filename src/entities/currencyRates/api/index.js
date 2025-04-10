import api from '@/shared/api'

export const currencyRatesApi = {
    fetchCurrencyRates() {
        return api.get(`${import.meta.env.VITE_CURRENCY_API_URL}/api/currency`)
    },
}
