<template>
  <InsightsHeroSection />
  <InsightsGridSection />
  <CTABanner />
  <TrustMetrics />
</template>

<script setup>
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"

import InsightsHeroSection from "../components/sections/InsightsHeroSection.vue"
import InsightsGridSection from "../components/sections/InsightsGridSection.vue"
import CTABanner from "../components/sections/CTABanner.vue"
import TrustMetrics from "../components/sections/TrustMetrics.vue"

useHead({
  title: "MarkaSphere | Insights",
  meta: [
    { name: "description", content: "Insights on brand perception, visual strategy, and digital presence from MarkaSphere." },
    { property: "og:title", content: "MarkaSphere | Insights" },
    { property: "og:description", content: "Insights on brand perception, visual strategy, and digital presence from MarkaSphere." },
    { property: "og:url", content: SITE_URL + "/insights" },
    { name: "twitter:title", content: "MarkaSphere | Insights" },
    { name: "twitter:description", content: "Insights on brand perception, visual strategy, and digital presence from MarkaSphere." }
  ],
  link: [{ rel: "canonical", href: SITE_URL + "/insights" }]
})
</script>
