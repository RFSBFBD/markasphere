<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section
    class="relative w-full py-20 md:py-28 ps-6 pe-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">
      
      <!-- Heading -->
      <Reveal :delay="100">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-[var(--color-text)]"
        >
          {{ t.projects.heroTitle }}
        </h1>
      </Reveal>

      <!-- Body -->
      <Reveal :delay="250">
        <p
          class="mt-8 md:mt-10 text-base md:text-lg leading-relaxed text-[var(--color-text)]/70 max-w-3xl"
        >
          {{ t.projects.heroBody }}
        </p>
      </Reveal>

    </div>
  </section>
</template>
