<template>
    <div>
        <InputGroup>
            <InputGroupAddon>
                <Select
                    :model-value="currency"
                    @update:model-value="emit('update:currency', $event)"
                    :options="baseCurrencies"
                    :disabled="disabled"
                />
            </InputGroupAddon>

            <InputNumber
                :model-value="amount"
                @update:model-value="emit('update:amount', $event)"
                placeholder="Введите значение"
                :disabled="disabled"
            />
        </InputGroup>
    </div>
</template>

<script setup>
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'

import { baseCurrencies } from '@/shared/config/baseCurrencies'

const props = defineProps({
    amount: {
        type: [Number, null],
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

const emit = defineEmits(['update:amount', 'update:currency'])
</script>
