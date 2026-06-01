<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section class="relative w-full py-20 px-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Reveal
          v-for="(article, index) in t.insights.articles"
          :key="article.title"
          :delay="200 + index * 80"
          :duration="1000"
        >
          <router-link
            :to="'/insights/' + article.slug"
            class="group block rounded-[28px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
          >
            <div class="bg-[var(--color-border)] aspect-[4/3] overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-text)]/5 to-transparent" />
            </div>

            <div class="p-6 md:p-8">
              <span class="inline-flex text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text)]/40 mb-4">
                {{ article.meta }}
              </span>
              <h2 class="text-lg md:text-xl font-semibold leading-[1.3] text-[var(--color-text)]">
                {{ article.title }}
              </h2>
              <span class="inline-flex mt-4 text-sm font-medium text-[var(--color-accent)] items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ t.insights.readMore }}
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </router-link>
        </Reveal>
      </div>
    </div>
  </section>
</template>
