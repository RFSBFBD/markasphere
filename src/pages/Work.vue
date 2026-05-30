<template>
  <ProjectsHeroSection />
  <ProjectsGridSection />
  <CTABanner />
  <TestimonialsCarousel />
</template>

<script setup>
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"

import ProjectsHeroSection from "../components/sections/ProjectsHeroSection.vue"
import ProjectsGridSection from "../components/sections/ProjectsGridSection.vue"
import CTABanner from "../components/sections/CTABanner.vue"
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel.vue"

useHead({
  title: "MarkaSphere | Our Work",
  meta: [
    { name: "description", content: "View MarkaSphere's portfolio of premium brand identity systems, websites, and digital experiences." },
    { property: "og:title", content: "MarkaSphere | Our Work" },
    { property: "og:description", content: "View MarkaSphere's portfolio of premium brand identity systems, websites, and digital experiences." },
    { property: "og:url", content: SITE_URL + "/work" },
    { name: "twitter:title", content: "MarkaSphere | Our Work" },
    { name: "twitter:description", content: "View MarkaSphere's portfolio of premium brand identity systems, websites, and digital experiences." }
  ],
  link: [{ rel: "canonical", href: SITE_URL + "/work" }]
})
</script>