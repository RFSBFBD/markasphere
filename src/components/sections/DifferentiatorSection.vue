<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section
    class="relative w-full py-32 ps-6 pe-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">

      <!-- Section Header -->
      <div class="mb-16 md:mb-24">
        
        <!-- Title -->
        <Reveal :delay="100" :duration="1000">
          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-[var(--color-text)]"
          >
            {{ t.about.differentiatorsTitle }}
          </h2>
        </Reveal>

      </div>

      <!-- 2-Column Grid of Point Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        <Reveal
          v-for="(point, index) in t.about.differentiators"
          :key="point"
          :delay="200 + index * 80"
          :duration="1000"
        >
          <!-- Point Card with subtle line/number prefix -->
          <div
            class="group relative border border-[var(--color-border)] bg-[var(--color-bg)] p-6 md:p-8 transition-all duration-500 hover:border-[var(--color-text)] hover:bg-[var(--surface-secondary)]"
          >
            
            <!-- Left Accent Line + Number -->
            <div class="flex items-start gap-4 md:gap-6">
              
              <!-- Vertical accent line with number -->
              <div class="flex flex-col items-center gap-2 mt-1">
                <span
                  class="text-sm md:text-base font-semibold text-[var(--color-text)]/30 transition-colors duration-300 group-hover:text-[var(--color-text)]/60 select-none"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span
                  class="h-8 md:h-12 w-px bg-[var(--color-text)]/20 transition-all duration-500 group-hover:h-16 group-hover:bg-[var(--color-text)]/40"
                />
              </div>

              <!-- Point Text -->
              <div class="flex-1 pt-1">
                <p
                  class="text-base md:text-lg font-semibold leading-[1.4] text-[var(--color-text)] transition-colors duration-300"
                >
                  {{ point }}
                </p>
              </div>

            </div>

          </div>
        </Reveal>

      </div>

    </div>
  </section>
</template>
