<template>
  <AboutHeroSection />
  <ClaritySection />
  <DifferentiatorSection />
  <TrustMetrics />
  <TestimonialsCarousel />
  <CTABanner />
</template>

<script setup>
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"

import AboutHeroSection from "../components/sections/AboutHeroSection.vue"
import ClaritySection from "../components/sections/ClaritySection.vue"
import DifferentiatorSection from "../components/sections/DifferentiatorSection.vue"
import TrustMetrics from "../components/sections/TrustMetrics.vue"
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel.vue"
import CTABanner from "../components/sections/CTABanner.vue"

const { t } = useLanguage()

useHead(() => {
  const title = t.value?.layout?.aboutPageTitle || "About | MarkaSphere"
  const description = t.value?.layout?.aboutMetaDesc || "Learn about MarkaSphere — a brand agency focused on visual clarity, strategic positioning, and premium digital experiences."

  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE_URL + "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ],
    link: [{ rel: "canonical", href: SITE_URL + "/about" }]
  }
})
</script>