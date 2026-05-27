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
    default: 1300 // Cinematic timing between 1200ms and 1400ms
  },
  threshold: {
    type: Number,
    default: 0.05
  }
})

const element = ref(null)
const isVisible = ref(false)
let observer = null

const customStyle = computed(() => {
  return {
    transitionDuration: `${props.duration}ms`,
    transitionDelay: `${props.delay}ms`
  }
})

onMounted(() => {
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (observer) {
            observer.disconnect()
          }
        }
      },
      {
        threshold: props.threshold,
        rootMargin: "0px 0px -20px 0px" // Trigger slightly before it hits the viewport
      }
    )

    if (element.value) {
      observer.observe(element.value)
    }
  } else {
    isVisible.value = true
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.cinematic-reveal {
  opacity: 0;
  transform: translate3d(0, 48px, 0);
  filter: blur(12px);
  will-change: transform, opacity, filter;
  transition-property: transform, opacity, filter;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); /* Cinematic calm ease-out */
}

.cinematic-reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}
</style>