<template>
  <div
    ref="element"
    :class="['cinematic-reveal', { 'is-visible': isVisible }]"
    :style="customStyle"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue"

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 900
  },
  threshold: {
    type: Number,
    default: 0.05
  }
})

const prefersReducedMotion = ref(false)
const element = ref(null)
const isVisible = ref(false)
let observer = null

const customStyle = computed(() => {
  if (prefersReducedMotion.value) {
    return { opacity: 1, transform: "translate3d(0, 0, 0)" }
  }
  return {
    transitionDuration: `${props.duration}ms`,
    transitionDelay: `${props.delay}ms`
  }
})

const applyVisible = () => {
  isVisible.value = true
  if (observer) observer.disconnect()
}

onMounted(() => {
  prefersReducedMotion.value =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (prefersReducedMotion.value) {
    isVisible.value = true
    return
  }

  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) applyVisible()
      },
      { threshold: props.threshold, rootMargin: "0px 0px -20px 0px" }
    )
    if (element.value) observer.observe(element.value)
  } else {
    isVisible.value = true
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.cinematic-reveal {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  will-change: transform, opacity;
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.cinematic-reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>