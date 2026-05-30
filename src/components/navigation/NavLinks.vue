<script setup>
import { computed, nextTick, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useNavItems } from "../../composables/useNavItems"
import { useLanguage } from "../../composables/useLanguage"
import { routeImporters } from "../../router"

const route = useRoute()
const items = useNavItems()
const { currentLanguage } = useLanguage()

const isActive = (path) => path === "/" ? route.path === "/" : route.path.startsWith(path)

const indicatorStyle = ref({ left: "0px", width: "0px", opacity: 0 })

const updateIndicator = () => {
  nextTick(() => {
    const el = document.querySelector(".nav-link-active")
    if (el) {
      const rect = el.getBoundingClientRect()
      const parent = el.parentElement?.getBoundingClientRect()
      if (parent) {
        indicatorStyle.value = {
          left: `${rect.left - parent.left}px`,
          width: `${rect.width}px`,
          opacity: 1
        }
        return
      }
    }
    indicatorStyle.value.opacity = 0
  })
}

// Prefetch route component on hover/touch for faster perceived navigation
const prefetch = (path) => {
  const importer = routeImporters[path]
  if (importer) importer().catch(() => {})
}

watch(() => route.path, updateIndicator)
watch(currentLanguage, updateIndicator)

defineExpose({ updateIndicator, prefetch })
</script>

<template>
  <nav class="relative flex items-center gap-1">
    <div class="nav-indicator-pill" :style="indicatorStyle" />
    <router-link
      v-for="item in items"
      :key="item.path"
      :to="item.path"
      class="relative z-10 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300"
      :class="[
        isActive(item.path)
          ? 'nav-link-active text-[var(--color-text)]'
          : 'text-[var(--color-text)]/60 hover:text-[var(--color-text)] hover:bg-[var(--glass-bg)]'
      ]"
      @mouseover="prefetch(item.path)"
      @touchstart="prefetch(item.path)"
    >
      {{ item.name }}
    </router-link>
  </nav>
</template>
