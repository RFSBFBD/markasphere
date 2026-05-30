<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section
    class="relative w-full py-32 ps-6 pe-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
  >
    <div class="max-w-5xl mx-auto">

      <!-- Centered Header -->
      <div class="text-center mb-20">
        
        <!-- Title -->
        <Reveal :delay="100" :duration="1000">
          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-[var(--color-text)]"
          >
            {{ t.about.clarityTitle }}
          </h2>
        </Reveal>

        <!-- Description -->
        <Reveal :delay="250" :duration="1000">
          <p
            class="mt-8 md:mt-10 text-base md:text-lg leading-relaxed text-[var(--color-text)]/70 max-w-3xl mx-auto"
          >
            {{ t.about.clarityBody }}
          </p>
        </Reveal>

      </div>

      <!-- Animated List: Horizontal or Vertical with subtle animation -->
      <div class="flex flex-wrap justify-center gap-4 md:gap-6">
        
        <Reveal
          v-for="(item, index) in t.about.clarityList"
          :key="item"
          :delay="350 + index * 100"
          :duration="1000"
        >
          <!-- List Item: Styled as badge/chip with subtle animation -->
          <div
            class="group inline-flex items-center gap-3 border border-[var(--color-border)] bg-[var(--color-bg)] ps-5 pe-5 py-3 transition-all duration-300 hover:border-[var(--color-text)] hover:bg-[var(--surface-secondary)]"
          >
            <!-- Dot indicator -->
            <span class="block w-1.5 h-1.5 rounded-full bg-[var(--color-text)]/40 group-hover:bg-[var(--color-text)] transition-colors duration-300" />
            
            <!-- Text -->
            <span
              class="text-sm md:text-base font-medium text-[var(--color-text)]/80 group-hover:text-[var(--color-text)] transition-colors duration-300"
            >
              {{ item }}
            </span>
          </div>
        </Reveal>

      </div>

    </div>
  </section>
</template>
