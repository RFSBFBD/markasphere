<template>
  <section
    class="relative py-32 ps-6 pe-6 bg-[var(--color-bg)] overflow-hidden"
  >
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="max-w-3xl mb-20 text-start">
        
        <!-- Badge -->
        <Reveal :delay="50" :duration="1000">
          <span
            class="inline-flex border border-[var(--color-border)] ps-4 pe-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-[var(--color-text)]/60"
          >
            {{ t.home.servicesBadge }}
          </span>
        </Reveal>

        <!-- Title -->
        <Reveal :delay="150" :duration="1000">
          <h2
            class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-[var(--color-text)]"
          >
            {{ t.home.servicesTitle }}
          </h2>
        </Reveal>

        <!-- Description -->
        <Reveal :delay="250" :duration="1000">
          <p
            class="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-text)]/70 max-w-2xl"
          >
            {{ t.home.servicesDesc }}
          </p>
        </Reveal>

      </div>

      <!-- Services Grid: 3-4 columns desktop, 2 mobile, 1 very small -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        
        <Reveal
          v-for="(service, index) in services"
          :key="service.title"
          :delay="300 + index * 80"
          :duration="1000"
        >
          <!-- Service Card -->
          <div
            class="group h-full border border-[var(--color-border)] bg-[var(--color-bg)] p-8 transition-all duration-500 hover:border-[var(--color-text)] hover:bg-[var(--surface-secondary)] flex flex-col justify-between"
          >
            
            <!-- Content Wrapper -->
            <div>
              
              <!-- Index Number (Minimal style) -->
              <span
                class="block text-xs font-semibold tracking-wider text-[var(--color-text)]/30 mb-8 select-none"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <!-- Title -->
              <h3
                class="text-lg md:text-xl font-semibold tracking-tight text-[var(--color-text)] mb-4 leading-[1.3]"
              >
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p
                class="text-sm md:text-base leading-relaxed text-[var(--color-text)]/65 font-normal"
              >
                {{ service.description }}
              </p>

            </div>

            <!-- Expanding line indicator + CTA -->
            <div class="mt-8 flex flex-col gap-4">
              <!-- Expanding line -->
              <span
                class="h-px bg-[var(--color-text)]/20 transition-all duration-500 group-hover:bg-[var(--color-text)]"
                style="width: 24px; --hover-width: 48px;"
                :style="{ width: '24px' }"
              />
              
              <!-- WhatsApp CTA Button -->
              <a
                :href="getWhatsAppUrl(t.home.whatsappServicePrefix + service.title)"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="t.home.whatsappButtonAria"
                class="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text)]/60 hover:text-[var(--color-text)] transition-colors duration-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-text)] focus:rounded"
              >
                {{ t.home.requestServiceLabel }}
              </a>
            </div>

          </div>
        </Reveal>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from "vue"
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"
import { getWhatsAppUrl } from "../../config/constants"

const { t } = useLanguage()

const services = computed(() => t.value.home.serviceItems)
</script>

<style scoped>
/* Ensure minimal styling for card backgrounds */
.group {
  background: var(--color-bg);
}

/* RTL support: text direction handled automatically */
/* Mobile responsive adjustments */
@media (max-width: 640px) {
  :deep(.grid) {
    grid-template-columns: 1fr;
  }
}
</style>