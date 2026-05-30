<template>
  <div v-if="article">

    <section class="pt-40 px-6">
      <div class="max-w-3xl mx-auto space-y-6">
        <router-link
          to="/insights"
          class="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:gap-3 transition-all duration-300"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {{ t.layout.backToInsights || 'Back to Insights' }}
        </router-link>

        <span class="inline-block text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium">
          {{ article.meta }}
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--color-text)]">
          {{ article.title }}
        </h1>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="prose prose-lg max-w-none text-[var(--color-text)]/80 leading-relaxed space-y-6 text-base md:text-lg">
          <p v-for="(paragraph, i) in paragraphs" :key="i">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 border-t border-[var(--color-border)]">
      <div class="max-w-3xl mx-auto flex justify-between items-center">
        <router-link
          v-if="prevArticle"
          :to="'/insights/' + prevArticle.slug"
          class="flex items-center gap-2 text-sm text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {{ prevArticle.title }}
        </router-link>
        <div v-else />

        <router-link
          v-if="nextArticle"
          :to="'/insights/' + nextArticle.slug"
          class="flex items-center gap-2 text-sm text-right text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          {{ nextArticle.title }}
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </router-link>
        <div v-else />
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"
const route = useRoute()
const { t } = useLanguage()

const articles = computed(() => t.value?.insights?.articles || [])
const currentIndex = computed(() => articles.value.findIndex((a) => a.slug === route.params.slug))
const article = computed(() => articles.value[currentIndex.value] || null)

const prevArticle = computed(() => currentIndex.value > 0 ? articles.value[currentIndex.value - 1] : null)
const nextArticle = computed(() => currentIndex.value < articles.value.length - 1 ? articles.value[currentIndex.value + 1] : null)

const paragraphs = computed(() => {
  if (!article.value?.body) return []
  return article.value.body.split("\n\n").filter(Boolean)
})

useHead(() => {
  const a = article.value
  if (!a) return {}
  return {
    title: a.title + " | MarkaSphere",
    meta: [
      { name: "description", content: a.body?.slice(0, 160) || a.title },
      { property: "og:title", content: a.title + " | MarkaSphere" },
      { property: "og:description", content: a.body?.slice(0, 160) || a.title },
      { property: "og:url", content: SITE_URL + "/insights/" + a.slug },
      { name: "twitter:title", content: a.title + " | MarkaSphere" },
      { name: "twitter:description", content: a.body?.slice(0, 160) || a.title }
    ],
    link: [{ rel: "canonical", href: SITE_URL + "/insights/" + a.slug }]
  }
})
</script>
