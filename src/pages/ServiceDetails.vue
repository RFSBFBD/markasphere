<template>
  <div v-if="service">
    <section class="pt-40 px-6">
      <div class="max-w-4xl mx-auto space-y-6">
        <router-link
          to="/services"
          class="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:gap-3 transition-all duration-300"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {{ t.layout.backToServices || 'Back to Services' }}
        </router-link>

        <span class="inline-block text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium">
          {{ categoryLabel }}
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--color-text)]">
          {{ service.title }}
        </h1>

        <p class="text-lg md:text-xl text-[var(--color-text)]/70 leading-relaxed max-w-3xl">
          {{ service.description }}
        </p>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="prose prose-lg max-w-none text-[var(--color-text)]/80 leading-relaxed space-y-6 text-base md:text-lg" v-if="service.body">
          <p v-for="(paragraph, i) in paragraphs" :key="i">
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-16" v-if="service.includes">
          <h3 class="text-lg font-semibold text-[var(--color-text)] mb-6 uppercase tracking-[0.1em]">
            What's Included
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="item in service.includes"
              :key="item"
              class="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--color-border)]"
            >
              <svg class="w-5 h-5 mt-0.5 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span class="text-sm text-[var(--color-text)]/70">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="mt-16 pt-12 border-t border-[var(--color-border)] flex flex-col sm:flex-row gap-4">
          <a
            :href="getWhatsAppUrl(service.whatsappMessage)"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:opacity-90"
          >
            Start This Service
          </a>
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-4 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:bg-[var(--surface-secondary)]"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useHead } from "@unhead/vue"
import { SITE_URL, getWhatsAppUrl } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"
const route = useRoute()
const { t } = useLanguage()

const serviceList = computed(() => t.value?.services?.serviceList || [])
const service = computed(() => serviceList.value.find((s) => s.slug === route.params.slug) || null)

const paragraphs = computed(() => {
  if (!service.value?.body) return []
  return service.value.body.split("\n\n").filter(Boolean)
})

const categoryLabel = computed(() => {
  const cat = service.value?.category
  const cats = t.value.services?.categories
  return cats?.[cat] || cat || ""
})

useHead(() => {
  const s = service.value
  if (!s) return {}
  return {
    title: s.title + " | MarkaSphere Services",
    meta: [
      { name: "description", content: s.description || s.title },
      { property: "og:title", content: s.title + " | MarkaSphere" },
      { property: "og:description", content: s.description || s.title },
      { property: "og:url", content: SITE_URL + "/services/" + s.slug },
      { name: "twitter:title", content: s.title + " | MarkaSphere" },
      { name: "twitter:description", content: s.description || s.title }
    ],
    link: [{ rel: "canonical", href: SITE_URL + "/services/" + s.slug }]
  }
})
</script>
