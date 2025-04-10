import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'

const primevueConfig = {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false,
        },
    },
}

export { PrimeVue, primevueConfig, ToastService }
