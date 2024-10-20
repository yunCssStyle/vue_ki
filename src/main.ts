import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/main.scss'
import { createPinia } from 'pinia'
import CustomIcon from '@/components/CustomIcon.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.component('custom-icon', CustomIcon)

app.mount('#app')
