<template>
  <InsightsHeroSection />
  <InsightsGridSection />
  <CTABanner />
  <TrustMetrics />
</template>

<script setup>
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"

import InsightsHeroSection from "../components/sections/InsightsHeroSection.vue"
import InsightsGridSection from "../components/sections/InsightsGridSection.vue"
import CTABanner from "../components/sections/CTABanner.vue"
import TrustMetrics from "../components/sections/TrustMetrics.vue"

const { t } = useLanguage()

useHead(() => {
  const title = t.value?.insights?.metaTitle || "MarkaSphere | Insights"
  const description = t.value?.insights?.metaDesc || "Insights on brand perception, visual strategy, and digital presence from MarkaSphere."

  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE_URL + "/insights" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ],
    link: [{ rel: "canonical", href: SITE_URL + "/insights" }]
  }
})
</script>
