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

import AboutHeroSection from "../components/sections/AboutHeroSection.vue"
import ClaritySection from "../components/sections/ClaritySection.vue"
import DifferentiatorSection from "../components/sections/DifferentiatorSection.vue"
import TrustMetrics from "../components/sections/TrustMetrics.vue"
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel.vue"
import CTABanner from "../components/sections/CTABanner.vue"

useHead({
  title: "MarkaSphere | About Us",
  meta: [
    { name: "description", content: "Learn about MarkaSphere — a brand agency focused on visual clarity, strategic positioning, and premium digital experiences." },
    { property: "og:title", content: "MarkaSphere | About Us" },
    { property: "og:description", content: "Learn about MarkaSphere — a brand agency focused on visual clarity, strategic positioning, and premium digital experiences." },
    { property: "og:url", content: SITE_URL + "/about" },
    { name: "twitter:title", content: "MarkaSphere | About Us" },
    { name: "twitter:description", content: "Learn about MarkaSphere — a brand agency focused on visual clarity, strategic positioning, and premium digital experiences." }
  ],
  link: [{ rel: "canonical", href: SITE_URL + "/about" }]
})
</script>