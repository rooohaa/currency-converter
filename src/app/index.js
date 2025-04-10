import { createApp } from 'vue'
import { pinia, router, PrimeVue, primevueConfig } from './providers'

import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue, primevueConfig)

export { app }
