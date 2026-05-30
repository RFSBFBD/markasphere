<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section
    class="relative w-full py-24 md:py-28 ps-6 pe-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">
      <div class="space-y-10">
        <Reveal :delay="100">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            {{ t.insights.heroTitle }}
          </h1>
        </Reveal>

        <Reveal :delay="250">
          <p class="max-w-3xl text-base md:text-lg leading-relaxed text-[var(--color-text)]/70">
            {{ t.insights.heroBody }}
          </p>
        </Reveal>
      </div>
    </div>
  </section>
</template>
