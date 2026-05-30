import { createApp } from "vue"
import { createPinia } from "pinia"
import { createHead } from "@unhead/vue/client"

import App from "./App.vue"
import router from "./router"
import "./styles/tokens.css"
import "./styles/base.css"
import "./styles/glass.css"
import "./styles/motion.css"

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)
app.mount("#app")