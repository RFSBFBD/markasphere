import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Services from "../pages/Services.vue"
import Work from "../pages/Work.vue"
import ProjectDetails from "../pages/ProjectDetails.vue"

const routes = [

  {
    path: "/",
    component: Home,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/services",
    component: Services,
  },

  {
    path: "/work",
    component: Work,
  },

  {
    path: "/work/:slug",
    component: ProjectDetails,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router