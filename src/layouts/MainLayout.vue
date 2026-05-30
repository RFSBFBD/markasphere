<template>

  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>

  <div class="min-h-screen">

    <AppHeader />

    <main id="main-content">
      <slot />
    </main>

    <Footer />
    <StickyWhatsApp />
    <ScrollToTop />
    <CookieConsent />
    <CustomCursor />

  </div>

</template>

<script setup>
import AppHeader from "../components/navigation/AppHeader.vue"
import Footer from "../components/layout/Footer.vue"
import CustomCursor from "../components/ui/CustomCursor.vue"
import StickyWhatsApp from "../components/ui/StickyWhatsApp.vue"
import ScrollToTop from "../components/ui/ScrollToTop.vue"
import CookieConsent from "../components/ui/CookieConsent.vue"
</script>