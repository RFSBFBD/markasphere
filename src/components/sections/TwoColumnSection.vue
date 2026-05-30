<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section
    class="relative w-full bg-[var(--color-bg)] text-[var(--color-text)] ps-6 pe-6 py-32 md:py-48 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto">
      <div
        class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        <!-- Left Column: Heading + Intro + Closing -->
        <div class="flex flex-col text-start">
          
          <!-- Heading -->
          <Reveal :delay="100" :duration="1000">
            <h2
              class="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-8 leading-[1.15]"
            >
              {{ t.home.twoColTitle }}
            </h2>
          </Reveal>

          <!-- Intro -->
          <Reveal :delay="250" :duration="1000">
            <p
              class="text-base md:text-lg text-[var(--color-text)]/70 font-medium leading-relaxed max-w-xl mb-12"
            >
              {{ t.home.twoColIntro }}
            </p>
          </Reveal>

          <!-- Closing with border separator -->
          <Reveal :delay="400" :duration="1000">
            <div
              class="border-t border-[var(--color-border)] pt-8 max-w-xl text-sm md:text-base text-[var(--color-text)]/60 font-normal leading-relaxed"
            >
              {{ t.home.twoColClosing }}
            </div>
          </Reveal>

        </div>

        <!-- Right Column: Animated List Items -->
        <div class="flex flex-col gap-0 w-full">
          
          <Reveal
            v-for="(item, index) in t.home.twoColItems"
            :key="index"
            :delay="200 + index * 120"
            :duration="1000"
            class="w-full"
          >
            <div
              class="group flex items-center gap-4 md:gap-6 py-5 md:py-7 border-b border-[var(--color-border)] text-lg md:text-2xl font-medium tracking-tight text-[var(--color-text)] transition-all duration-300 hover:ps-3"
            >
              <!-- Animated line prefix -->
              <span
                class="shrink-0 w-8 h-px bg-[var(--color-text)]/30 transition-all duration-500 group-hover:w-12 group-hover:bg-[var(--color-text)]"
              />
              
              <!-- Item text -->
              <span class="select-none transition-colors duration-300 group-hover:text-[var(--color-text)]">
                {{ item }}
              </span>
            </div>
          </Reveal>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Responsive typography adjustments */
h2 {
  font-weight: 600;
}

/* Arabic language font weight adjustment */
:global(html[lang="ar"]) h2 {
  font-weight: 500;
}

/* Mobile stack */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
