<script setup>
import Reveal from "../animations/Reveal.vue"
import { getWhatsAppUrl } from "../../config/constants"
</script>

<template>
  <section class="w-full py-14 px-6 bg-[var(--surface-secondary)] border-y border-[var(--color-border)]">
    <Reveal>
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center sm:text-start">
          <p class="text-lg md:text-xl font-semibold text-[var(--color-text)]">
            Ready to elevate your brand presence?
          </p>
          <p class="text-sm text-[var(--color-text)]/50">
            Start a conversation with our team.
          </p>
        </div>
        <a
          :href="getWhatsAppUrl('I would like to start a project')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:opacity-90 shrink-0"
        >
          Start Your Project
        </a>
      </div>
    </Reveal>
  </section>
</template>
