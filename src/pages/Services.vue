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

import ServicesHeroSection from "../components/sections/ServicesHeroSection.vue"
import ServicesGridSection from "../components/sections/ServicesGridSection.vue"
import TrustMetrics from "../components/sections/TrustMetrics.vue"
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel.vue"
import CTABanner from "../components/sections/CTABanner.vue"

useHead({
  title: "MarkaSphere | Services",
  meta: [
    { name: "description", content: "Explore MarkaSphere services: visual identity, web development, social media, video editing, and marketing solutions." },
    { property: "og:title", content: "MarkaSphere | Services" },
    { property: "og:description", content: "Explore MarkaSphere services: visual identity, web development, social media, video editing, and marketing solutions." },
    { property: "og:url", content: SITE_URL + "/services" },
    { name: "twitter:title", content: "MarkaSphere | Services" },
    { name: "twitter:description", content: "Explore MarkaSphere services: visual identity, web development, social media, video editing, and marketing solutions." }
  ],
  link: [{ rel: "canonical", href: SITE_URL + "/services" }]
})
</script>