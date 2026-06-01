<script setup>
import { computed } from "vue"
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"
import { getWhatsAppUrl } from "../../config/constants"

const { t } = useLanguage()
const ctaUrl = computed(() => getWhatsAppUrl(t.value?.home?.whatsappBannerMessage || ""))
</script>

<template>
  <section class="w-full py-14 px-6 bg-[var(--surface-secondary)] border-y border-[var(--color-border)]">
    <Reveal>
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center sm:text-start">
          <p class="text-lg md:text-xl font-semibold text-[var(--color-text)]">
            {{ t.home.ctaBannerTitle }}
          </p>
          <p class="text-sm text-[var(--color-text)]/50">
            {{ t.home.ctaBannerDesc }}
          </p>
        </div>
        <a
          :href="ctaUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:opacity-90 shrink-0"
        >
          {{ t.layout.ctaButton }}
        </a>
      </div>
    </Reveal>
  </section>
</template>
