import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"
import "./styles/utilities.css"
import "./styles/tokens.css"
import "./styles/base.css"
import "./styles/glass.css"
import "./styles/animations.css"
import "./styles/motion.css"

createApp(App)
  .use(router)
  .mount("#app")