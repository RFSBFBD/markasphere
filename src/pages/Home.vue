<template>

  <MainLayout>

    <HeroSection />

    <ServicesSection />

    <WorkShowcase />

  </MainLayout>

</template>

<script setup>

import MainLayout
from "../layouts/MainLayout.vue"

import HeroSection
from "../components/sections/HeroSection.vue"

import ServicesSection
from "../components/sections/ServicesSection.vue"

import WorkShowcase
from "../components/sections/WorkShowcase.vue"

</script>