import { defineStore } from "pinia"

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: localStorage.getItem("theme") || "light"
  }),
  actions: {
    setTheme(newTheme) {
      if (newTheme !== "light" && newTheme !== "dark") return
      this.theme = newTheme
      localStorage.setItem("theme", newTheme)
      this.applyTheme()
    },
    toggleTheme() {
      this.setTheme(this.theme === "light" ? "dark" : "light")
    },
    applyTheme() {
      document.documentElement.setAttribute("data-theme", this.theme)
      if (this.theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    },
    initTheme() {
      this.applyTheme()
    }
  }
})
