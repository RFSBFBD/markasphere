<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { MessageCircle } from "@lucide/vue"
import { getWhatsAppUrl } from "../../config/constants"

const isVisible = ref(false)
let scrollCheck = null

onMounted(() => {
  scrollCheck = () => {
    isVisible.value = window.scrollY > 400
  }
  window.addEventListener("scroll", scrollCheck, { passive: true })
  scrollCheck()
})

onBeforeUnmount(() => {
  if (scrollCheck) window.removeEventListener("scroll", scrollCheck)
})
</script>

<template>
  <Teleport to="body">
    <a
      :href="getWhatsAppUrl()"
      target="_blank"
      rel="noopener noreferrer"
      :class="[
        'fixed bottom-6 end-6 z-50 flex items-center gap-3 rounded-full glass px-5 py-3 shadow-lg transition-all duration-500 text-charcoal hover:text-accent',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      ]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle class="size-5" />
      <span class="text-sm font-semibold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  </Teleport>
</template>