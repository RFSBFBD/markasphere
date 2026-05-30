<script setup>
import Reveal from "../animations/Reveal.vue"

const logos = [
  "Noor Capital",
  "Mansour Atelier",
  "Al-Harbi Medical",
  "GulfTech",
  "Chahine Luxury",
  "Zenith Holdings",
  "Altura Capital",
  "Nova Technologies"
]
</script>

<template>
  <section class="w-full py-16 px-6 bg-[var(--surface-secondary)] border-y border-[var(--color-border)] overflow-hidden">
    <Reveal>
      <div class="max-w-6xl mx-auto mb-10 text-center">
        <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text)]/40 font-medium">
          Trusted By Industry Leaders
        </p>
      </div>
    </Reveal>
    <div class="relative">
      <div class="flex gap-16 animate-scroll items-center">
        <span
          v-for="(name, i) in [...logos, ...logos]"
          :key="i"
          class="text-lg md:text-xl font-semibold text-[var(--color-text)]/20 hover:text-[var(--color-text)]/50 transition-colors duration-300 whitespace-nowrap tracking-tight"
        >
          {{ name }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>
