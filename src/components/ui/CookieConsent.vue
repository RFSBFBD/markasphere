<script setup>
import { ref, onMounted } from "vue"

const consented = ref(true)

onMounted(() => {
  consented.value = localStorage.getItem("cookie_consent") === "true"
})

const accept = () => {
  localStorage.setItem("cookie_consent", "true")
  consented.value = true
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="!consented"
      class="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-6"
    >
      <div class="max-w-6xl mx-auto glass rounded-2xl px-6 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-lg border border-[var(--color-border)]">
        <p class="text-sm text-[var(--color-text)]/70 flex-1 leading-relaxed">
          This site uses cookies to improve your experience. By continuing, you agree to our use of cookies.
        </p>
        <div class="flex items-center gap-3 shrink-0">
          <button
            @click="accept"
            class="rounded-full bg-[var(--color-text)] text-[var(--color-bg)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
