import { createApp } from 'vue'
import {
    pinia,
    router,
    PrimeVue,
    primevueConfig,
    ToastService,
} from './providers'

import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue, primevueConfig)
app.use(ToastService)

export { app }
