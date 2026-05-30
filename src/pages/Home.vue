<template>

  <HeroSection />

    <NarrativeSection />

    <ProblemAwarenessSection />

    <ServicesSection />

    <ProjectsSection />

    <TwoColumnSection />

    <CTABanner />

    <TrustMetrics />

    <ClientLogoBar />

    <TestimonialsCarousel />

    <FAQSection />

    <ClosingCTASection />

</template>

<script setup>
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"

import HeroSection
from "../components/sections/HeroSection.vue"

import NarrativeSection
from "../components/sections/NarrativeSection.vue"

import ProblemAwarenessSection
from "../components/sections/ProblemAwarenessSection.vue"

import ServicesSection
from "../components/sections/ServicesSection.vue"

import ProjectsSection
from "../components/sections/ProjectsSection.vue"

import TwoColumnSection
from "../components/sections/TwoColumnSection.vue"

import ClosingCTASection
from "../components/sections/ClosingCTASection.vue"

import TrustMetrics
from "../components/sections/TrustMetrics.vue"

import ClientLogoBar
from "../components/sections/ClientLogoBar.vue"

import TestimonialsCarousel
from "../components/sections/TestimonialsCarousel.vue"

import CTABanner
from "../components/sections/CTABanner.vue"

import FAQSection
from "../components/sections/FAQSection.vue"

useHead({
  title: "MarkaSphere | Premium Brand Agency",
  meta: [
    { name: "description", content: "Premium brand identity agency crafting strategic visual ecosystems and digital experiences for executive brands." },
    { property: "og:title", content: "MarkaSphere | Premium Brand Agency" },
    { property: "og:description", content: "Premium brand identity agency crafting strategic visual ecosystems and digital experiences for executive brands." },
    { property: "og:url", content: SITE_URL + "/" },
    { name: "twitter:title", content: "MarkaSphere | Premium Brand Agency" },
    { name: "twitter:description", content: "Premium brand identity agency crafting strategic visual ecosystems and digital experiences for executive brands." }
  ],
  link: [{ rel: "canonical", href: SITE_URL + "/" }]
})
</script>