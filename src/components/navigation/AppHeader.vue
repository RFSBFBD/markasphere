<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import { useLanguage } from "../../composables/useLanguage"
import NavLinks from "./NavLinks.vue"
import HeaderActions from "./HeaderActions.vue"
import MobileMenu from "./MobileMenu.vue"
import Magnetic from "../animations/Magnetic.vue"

const { t } = useLanguage()

const isScrolled = ref(false)
const isMounted = ref(false)
const isMobileOpen = ref(false)

const displayLogo = computed(() => t.value?.layout?.logo)

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
          class="flex items-center gap-3 transition-all duration-700"
          :class="isMounted ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'"
        >
          <span class="brand-mark">
            <span class="brand-mark-text">M</span>
          </span>
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
.brand-mark {
  width: 2.75rem;
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: var(--color-accent);
  color: white;
  font-weight: 800;
  font-size: 0.95rem;
}

.brand-name {
  font-size: 1.1rem;
  letter-spacing: -0.02em;
}
</style>
