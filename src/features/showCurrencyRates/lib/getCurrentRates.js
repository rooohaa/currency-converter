export function getCurrentRates(currencyRates, baseCurrency) {
    const result = []

    for (const [key, value] of Object.entries(currencyRates)) {
        const [from, to] = key.toUpperCase().split('-')

        if (from === baseCurrency.toUpperCase()) {
            result.push({ from, to, value })
        }
    }

    return result
}
