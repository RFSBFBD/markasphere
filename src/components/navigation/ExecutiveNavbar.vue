<template>
  <header
    :class="[
      'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-[1000ms] ease-out',
      isScrolled
        ? 'backdrop-blur-2xl bg-white/40 border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
        : 'backdrop-blur-xl bg-white/20 border border-white/10',
      isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
    ]"
    class="
      w-[92%]
      max-w-7xl
      rounded-full
    "
  >
    <div
      class="
        flex
        items-center
        justify-between
        px-8
        py-4
      "
    >
      <!-- LOGO -->
      <RouterLink
        to="/"
        class="
          text-xl
          font-semibold
          tracking-tight
          text-charcoal
          transition-all duration-700
        "
        :class="isMounted ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'"
      >
        MarkaSphere
      </RouterLink>

      <!-- DESKTOP NAV -->
      <nav
        class="
          relative
          hidden
          md:flex
          items-center
          gap-1
          px-1.5
          py-1
          rounded-full
          transition-all duration-[800ms]
        "
        :class="isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
      >
        <!-- Sliding Pill background -->
        <div
          class="nav-indicator-pill"
          :style="activeIndicatorStyle"
        />

        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="
            desktop-nav-link
            relative
            z-10
            px-5
            py-2
            text-sm
            font-medium
            text-charcoal/70
            hover:text-charcoal
            transition-colors
            duration-300
            rounded-full
          "
          :class="{ 'is-active text-charcoal': route.path.startsWith(item.path) || (item.path === '/' && route.path === '/') }"
        >
          {{ item.name }}
        </RouterLink>
      </nav>

      <!-- ACTION -->
      <div 
        class="flex items-center gap-4 transition-all duration-[900ms]"
        :class="isMounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'"
      >
        <Magnetic>
          <button
            class="
              glass
              px-5
              py-2
              rounded-full
              text-sm
              font-medium
              luxury-btn
              transition-all
              duration-300
              hidden sm:block
            "
          >
            Contact
          </button>
        </Magnetic>

        <!-- Mobile Hamburger Trigger -->
        <button
          @click="toggleMobileMenu"
          class="
            hamburger-btn
            flex
            md:hidden
            flex-col
            justify-center
            items-center
            gap-1.5
            size-10
            rounded-full
            glass
            z-50
            relative
            transition-all
            duration-300
          "
          aria-label="Toggle Menu"
        >
          <span
            class="w-5 h-0.5 bg-charcoal transition-all duration-300 origin-center"
            :class="{ 'rotate-45 translate-y-1': isMobileMenuOpen }"
          />
          <span
            class="w-5 h-0.5 bg-charcoal transition-all duration-300 origin-center"
            :class="{ 'opacity-0 scale-0': isMobileMenuOpen }"
          />
          <span
            class="w-5 h-0.5 bg-charcoal transition-all duration-300 origin-center"
            :class="{ '-rotate-45 -translate-y-1': isMobileMenuOpen }"
          />
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <Transition name="fade-overlay">
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-white/95 backdrop-blur-2xl z-[40] flex flex-col justify-center px-12 md:hidden mobile-menu-active"
    >
      <nav class="flex flex-col gap-8 text-4xl font-semibold">
        <RouterLink
          v-for="(item, index) in navItems"
          :key="item.name"
          :to="item.path"
          @click="closeMobileMenu"
          class="mobile-menu-item text-charcoal/60 hover:text-charcoal transition-colors duration-300"
          :class="`stagger-${index + 1}`"
        >
          {{ item.name }}
        </RouterLink>
        
        <button
          @click="closeMobileMenu"
          class="mobile-menu-item text-left text-accent font-semibold"
          :class="`stagger-${navItems.length + 1}`"
        >
          Contact
        </button>
      </nav>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import { useRoute } from "vue-router"
import { lenisInstance } from "../../composables/useLenis"
import Magnetic from "../animations/Magnetic.vue"

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isMounted = ref(false)

const navItems = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" }
]

const activeIndex = computed(() => {
  return navItems.findIndex(item => {
    if (item.path === '/') return route.path === '/'
    return route.path.startsWith(item.path)
  })
})

const activeIndicatorStyle = ref({
  left: "0px",
  width: "0px",
  opacity: 0
})

const updateIndicator = () => {
  nextTick(() => {
    const activeEl = document.querySelector(".desktop-nav-link.is-active")
    if (activeEl) {
      const rect = activeEl.getBoundingClientRect()
      const parentRect = activeEl.parentElement.getBoundingClientRect()
      activeIndicatorStyle.value = {
        left: `${rect.left - parentRect.left}px`,
        width: `${rect.width}px`,
        opacity: 1
      }
    } else {
      activeIndicatorStyle.value.opacity = 0
    }
  })
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    if (lenisInstance.value) lenisInstance.value.stop()
    document.body.style.overflow = "hidden"
  } else {
    if (lenisInstance.value) lenisInstance.value.start()
    document.body.style.overflow = ""
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  if (lenisInstance.value) lenisInstance.value.start()
  document.body.style.overflow = ""
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  isMounted.value = true
  window.addEventListener("scroll", handleScroll)
  window.addEventListener("resize", updateIndicator)
  updateIndicator()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
  window.removeEventListener("resize", updateIndicator)
})

watch(route, () => {
  updateIndicator()
})
</script>

<style scoped>
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}
</style>