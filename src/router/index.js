import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/", name: "Home", component: () => import("../pages/Home.vue"), meta: { keepAlive: true } },
  { path: "/about", name: "About", component: () => import("../pages/About.vue") },
  { path: "/services", name: "Services", component: () => import("../pages/Services.vue") },
  { path: "/services/:slug", name: "ServiceDetails", component: () => import("../pages/ServiceDetails.vue") },
  { path: "/insights", name: "Insights", component: () => import("../pages/Insights.vue") },
  { path: "/insights/:slug", name: "ArticleDetails", component: () => import("../pages/ArticleDetails.vue") },
  { path: "/work", name: "Work", component: () => import("../pages/Work.vue"), meta: { keepAlive: true } },
  { path: "/work/:slug", name: "ProjectDetails", component: () => import("../pages/ProjectDetails.vue") },
  { path: "/contact", name: "Contact", component: () => import("../pages/Contact.vue") },
]

// Export lightweight mapping for route prefetching (used by nav hover/touch)
export const routeImporters = {
  '/': () => import('../pages/Home.vue'),
  '/about': () => import('../pages/About.vue'),
  '/services': () => import('../pages/Services.vue'),
  '/insights': () => import('../pages/Insights.vue'),
  '/work': () => import('../pages/Work.vue'),
  '/contact': () => import('../pages/Contact.vue')
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// Prefetch target route component when navigation starts so the
// destination page is loaded by the time navigation finishes.
router.beforeEach(async (to, from) => {
  try {
    // derive a key: try exact path, then top-level base (e.g. /work for /work/slug)
    const exact = to.path
    const base = exact === '/' ? '/' : `/${exact.split('/')[1]}`
    const importer = routeImporters[exact] || routeImporters[base]
    if (importer) await importer().catch(() => {})
  } catch (e) {
    // ignore prefetch errors
  }
  return true
})

export default router