<template>
  <ServicesHeroSection />
  <ServicesGridSection />
  <TrustMetrics />
  <TestimonialsCarousel />
  <CTABanner />
</template>

<script setup>
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"

import ServicesHeroSection from "../components/sections/ServicesHeroSection.vue"
import ServicesGridSection from "../components/sections/ServicesGridSection.vue"
import TrustMetrics from "../components/sections/TrustMetrics.vue"
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel.vue"
import CTABanner from "../components/sections/CTABanner.vue"

const { t } = useLanguage()

useHead(() => {
  const title = t.value?.layout?.servicesPageTitle || "Services | MarkaSphere"
  const description = t.value?.layout?.servicesMetaDesc || "Explore MarkaSphere services: visual identity, web development, social media, video editing, and marketing solutions."

  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE_URL + "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ],
    link: [{ rel: "canonical", href: SITE_URL + "/services" }]
  }
})
</script>