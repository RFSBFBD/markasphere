<template>
  <section class="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6 py-20 text-center">
    <div class="max-w-3xl mx-auto space-y-8">
      <p class="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">404</p>
      <h1 class="text-5xl md:text-6xl font-semibold text-[var(--color-text)]">
        {{ notFoundTitle }}
      </h1>
      <p class="text-base text-[var(--color-text)]/70 leading-relaxed">
        {{ notFoundDescription }}
      </p>
      <router-link
        to="/"
        class="inline-flex items-center justify-center rounded-full bg-[var(--color-text)] text-[var(--color-bg)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-90"
      >
        {{ homeLabel }}
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue"
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"

const { t } = useLanguage()

const notFoundTitle = computed(() => t.value?.layout?.notFoundPageTitle || "Page Not Found | MarkaSphere")
const notFoundDescription = computed(
  () => t.value?.layout?.notFoundMetaDesc || "The page you are looking for could not be found. Return to the MarkaSphere homepage."
)
const homeLabel = computed(() => t.value?.layout?.home || "Home")

useHead(() => ({
  title: notFoundTitle.value,
  meta: [
    { name: "description", content: notFoundDescription.value },
    { property: "og:title", content: notFoundTitle.value },
    { property: "og:description", content: notFoundDescription.value },
    { property: "og:url", content: SITE_URL + "/404" },
    { name: "twitter:title", content: notFoundTitle.value },
    { name: "twitter:description", content: notFoundDescription.value }
  ],
  link: [{ rel: "canonical", href: SITE_URL + "/404" }]
}))
</script>
