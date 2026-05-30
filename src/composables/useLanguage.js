import { storeToRefs } from "pinia"
import { useLanguageStore } from "../stores/language"
import { computed } from "vue"

export function useLanguage() {
  const store = useLanguageStore()
  const { language: currentLanguage, translations } = storeToRefs(store)

  // Simple computed ref that always yields an object (never null)
  // so components can safely access `t.value.xxx` without proxy magic.
  const t = computed(() => translations.value || {})

  const translate = (key) => {
    if (!key) return translations.value
    return translations.value?.[key]
  }

  return {
    currentLanguage,
    t,
    translate,
    setLanguage: (lang) => store.setLanguage(lang),
    toggleLanguage: () => store.toggleLanguage(),
    initLanguage: () => store.initLanguage()
  }
}
