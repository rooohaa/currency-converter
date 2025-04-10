<template>
    <div>
        <InputGroup>
            <InputGroupAddon>
                <Select
                    :model-value="currency"
                    @update:model-value="updateCurrency"
                    :options="baseCurrencies"
                    :disabled="disabled"
                />
            </InputGroupAddon>

            <InputText
                type="number"
                :model-value="amount"
                @update:model-value="updateAmount"
                :disabled="disabled"
                placeholder="Введите значение"
            />
        </InputGroup>
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import { baseCurrencies } from '@/shared/config/baseCurrencies'

const props = defineProps({
    amount: {
        type: [Number, String, null],
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['update:amount', 'update:currency', 'change'])

function updateAmount(value) {
    emit('update:amount', value)
    emit('change')
}

function updateCurrency(value) {
    emit('update:currency', value)
    emit('change')
}
</script>

<style scoped>
.p-inputtext[type='number']::-webkit-inner-spin-button,
.p-inputtext[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.p-inputtext[type='number'] {
    -moz-appearance: textfield;
}
</style>
