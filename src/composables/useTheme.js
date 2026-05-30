import { storeToRefs } from "pinia"
import { useThemeStore } from "../stores/theme"

export function useTheme() {
  const store = useThemeStore()
  const { theme: currentTheme } = storeToRefs(store)

  return {
    currentTheme,
    setTheme: (theme) => store.setTheme(theme),
    toggleTheme: () => store.toggleTheme(),
    initTheme: () => store.initTheme()
  }
}
