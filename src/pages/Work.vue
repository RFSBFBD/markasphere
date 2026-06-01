<template>
  <ProjectsHeroSection />
  <ProjectsGridSection />
  <CTABanner />
  <TestimonialsCarousel />
</template>

<script setup>
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"

import ProjectsHeroSection from "../components/sections/ProjectsHeroSection.vue"
import ProjectsGridSection from "../components/sections/ProjectsGridSection.vue"
import CTABanner from "../components/sections/CTABanner.vue"
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel.vue"

const { t } = useLanguage()

useHead(() => {
  const title = t.value?.layout?.portfolioPageTitle || "Portfolio | MarkaSphere"
  const description = t.value?.layout?.portfolioMetaDesc || "View MarkaSphere's portfolio of premium brand identity systems, websites, and digital experiences."

  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE_URL + "/work" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ],
    link: [{ rel: "canonical", href: SITE_URL + "/work" }]
  }
})
</script>