import { computed } from "vue"
import { useLanguage } from "./useLanguage"

export function useNavItems() {
  const { t } = useLanguage()

  return computed(() => {
    const l = t.value?.layout || {}
    // provide safe string fallbacks so header shows labels even while translations load
    // Coerce values to strings to avoid Proxy/obj-to-primitive issues
    const safe = (v, fallback) => {
      if (v == null) return fallback
      const t = typeof v
      if (t === 'string') return v
      if (t === 'number' || t === 'boolean') return String(v)
      if (t === 'object') {
        if ('value' in v && (typeof v.value === 'string' || typeof v.value === 'number' || typeof v.value === 'boolean')) {
          return String(v.value)
        }
        return fallback
      }
      return fallback
    }

    return [
      { name: safe(l.home, 'Home'), path: "/" },
      { name: safe(l.services, 'Services'), path: "/services" },
      { name: safe(l.work, 'Work'), path: "/work" },
      { name: safe(l.about, 'About'), path: "/about" },
      { name: safe(l.insights, 'Insights'), path: "/insights" }
    ]
  })
}
