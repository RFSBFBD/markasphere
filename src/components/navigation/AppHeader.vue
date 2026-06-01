<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import { BRAND_NAME } from "../../config/constants"
import NavLinks from "./NavLinks.vue"
import HeaderActions from "./HeaderActions.vue"
import MobileMenu from "./MobileMenu.vue"
import Magnetic from "../animations/Magnetic.vue"

const isScrolled = ref(false)
const isMounted = ref(false)
const isMobileOpen = ref(false)

const displayLogo = computed(() => BRAND_NAME)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobile = () => {
  isMobileOpen.value = false
}

onMounted(() => {
  isMounted.value = true
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-[1000ms] ease-out w-[92%] max-w-7xl rounded-full',
      isScrolled
        ? 'backdrop-blur-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
        : 'backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]',
      isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
    ]"
  >
    <div class="flex items-center justify-between px-6 py-2">
      <Magnetic>
        <router-link
          to="/"
          class="flex items-center transition-all duration-700"
          :class="isMounted ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'"
        >
          <span class="brand-name text-[var(--color-text)] font-semibold tracking-tight">{{ displayLogo }}</span>
        </router-link>
      </Magnetic>

      <div class="hidden md:block">
        <NavLinks />
      </div>

      <HeaderActions @toggle-mobile="toggleMobile" />
    </div>
  </header>

  <MobileMenu :is-open="isMobileOpen" @close="closeMobile" />
</template>

<style scoped>
.brand-name {
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  /* Explicitly use Canela Condensed for brand name only */
  font-family: "Canela Condensed", var(--font-primary);
  font-weight: 600;
  text-transform: none;
  direction: ltr; /* Force LTR for brand name */
}
</style>
