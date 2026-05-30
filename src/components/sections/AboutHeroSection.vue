<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section
    class="relative w-full min-h-[80vh] flex flex-col items-start justify-center bg-[var(--color-bg)] text-[var(--color-text)] ps-6 pe-6 py-20 md:py-32 select-none"
  >
    <!-- Subtle Grid Pattern -->
    <div class="absolute inset-0 grid-lines opacity-[0.02] pointer-events-none" />

    <div class="relative z-10 max-w-6xl mx-auto">
      
      <!-- Main Heading: Full-width, Large -->
      <Reveal :delay="100">
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] whitespace-pre-line text-[var(--color-text)]"
        >
          {{ t.about.heroTitle }}
        </h1>
      </Reveal>

      <!-- Body Text: Muted, Max-width, Premium -->
      <Reveal :delay="250">
        <p
          class="mt-12 md:mt-16 text-lg md:text-xl leading-relaxed text-[var(--color-text)]/65 max-w-4xl font-medium"
        >
          {{ t.about.heroBody }}
        </p>
      </Reveal>

    </div>
  </section>
</template>

<style scoped>
/* Grid pattern for subtle background decoration */
.grid-lines {
  background-image: 
    linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
  background-size: 50px 50px;
}

:global(.dark) .grid-lines {
  background-image: 
    linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent);
  background-size: 50px 50px;
}
</style>
