import { createApp } from 'vue'
import App from './App.vue'
import '../index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Lucia from './components/Lucia.vue'
import Lucia2 from './components/Lucia2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:[
        {path:'/',component: Lucia},
        {path:'/lucia2',component:Lucia2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
