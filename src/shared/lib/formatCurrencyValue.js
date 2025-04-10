export function formatCurrencyValue(value, digits = 2) {
    if (typeof value !== 'number') {
        throw new Error('Value must be a number')
    }
    return Number(value).toFixed(digits)
}
