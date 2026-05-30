<script setup>
import Reveal from "../animations/Reveal.vue"
import BaseButton from "../ui/BaseButton.vue"
import { useLanguage } from "../../composables/useLanguage"
import { getWhatsAppUrl } from "../../config/constants"

const { t } = useLanguage()
</script>

<template>
  <section
    class="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-24 md:py-36 text-center select-none"
  >
    <div class="absolute inset-0 grid-lines opacity-[0.03] pointer-events-none" />

    <div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
      <Reveal :delay="100">
        <span
          class="inline-flex border border-[var(--color-border)] px-4 py-1.5 text-small font-semibold uppercase tracking-[0.2em] mb-16 text-[var(--color-muted)]"
        >
          {{ t.home.heroBadge }}
        </span>
      </Reveal>

      <Reveal :delay="250">
        <h1
          class="text-h1 whitespace-pre-line text-[var(--color-text)]"
        >
          {{ t.home.heroTitle }}
        </h1>
      </Reveal>

      <Reveal :delay="400">
        <p
          class="mt-12 text-body text-[var(--color-muted)] max-w-3xl"
        >
          {{ t.home.heroDesc }}
        </p>
      </Reveal>

      <Reveal :delay="550">
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-14">
          <BaseButton variant="primary" :href="getWhatsAppUrl('أرغب في بدء مشروع')">
            {{ t.home.heroCtaPrimary }}
          </BaseButton>

          <BaseButton variant="secondary" to="/work">
            {{ t.home.heroCtaSecondary }}
          </BaseButton>
        </div>
      </Reveal>
    </div>

    <Reveal :delay="700">
      <div class="mt-24 text-[var(--color-text)]/20 text-xl font-light">
        ✦
      </div>
    </Reveal>
  </section>
</template>

<style scoped>
.grid-lines {
  background-size: 80px 80px;
  background-image:
    linear-gradient(to right, var(--color-text) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-text) 1px, transparent 1px);
}
</style>
