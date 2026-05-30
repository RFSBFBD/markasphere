<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { ArrowUp } from "@lucide/vue"

const isVisible = ref(false)
let scrollCheck = null

onMounted(() => {
  scrollCheck = () => {
    isVisible.value = window.scrollY > 600
  }
  window.addEventListener("scroll", scrollCheck, { passive: true })
  scrollCheck()
})

onBeforeUnmount(() => {
  if (scrollCheck) window.removeEventListener("scroll", scrollCheck)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <Teleport to="body">
    <button
      @click="scrollToTop"
      :class="[
        'fixed bottom-6 start-6 z-50 flex items-center justify-center size-12 rounded-full glass shadow-lg transition-all duration-500 text-[var(--color-text)] hover:text-[var(--color-accent)]',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      ]"
      aria-label="Scroll to top"
    >
      <ArrowUp class="size-5" />
    </button>
  </Teleport>
</template>
