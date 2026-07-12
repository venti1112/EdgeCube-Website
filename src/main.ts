import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import McUIVue from 'mcui-oreui'
import 'mcui-oreui/style.css'
import './style.css'

const app = createApp(App)
app.use(i18n)
app.use(McUIVue)
app.mount('#app')
