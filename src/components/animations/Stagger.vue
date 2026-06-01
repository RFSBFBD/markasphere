<template>
  <div
    ref="container"
    :class="['stagger-container', { 'stagger-active': isVisible }]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const props = defineProps({
  /**
   * Stagger interval in milliseconds between each child
   */
  interval: {
    type: Number,
    default: 60
  },
  /**
   * Base delay before first item animates (in milliseconds)
   */
  baseDelay: {
    type: Number,
    default: 100
  },
  /**
   * Animation duration in milliseconds
   */
  duration: {
    type: Number,
    default: 700
  },
  /**
   * Trigger animation on intersection (Intersection Observer)
   */
  onIntersection: {
    type: Boolean,
    default: true
  },
  /**
   * Intersection threshold (0 to 1)
   */
  threshold: {
    type: Number,
    default: 0.1
  }
})

const container = ref(null)
const isVisible = ref(!props.onIntersection)
let observer = null
let prefersReducedMotion = false

const applyStaggerStyles = () => {
  if (!container.value) return

  const children = Array.from(container.value.children)
  children.forEach((child, index) => {
    const delay = props.baseDelay + index * props.interval
    child.style.setProperty("--stagger-index", String(index + 1))
    child.style.setProperty("--stagger-delay", `${delay}ms`)
    child.style.setProperty("--stagger-duration", `${props.duration}ms`)
    child.classList.add("stagger-item")
  })
}

const triggerAnimation = () => {
  isVisible.value = true
  if (observer && container.value) {
    observer.unobserve(container.value)
  }
}

onMounted(() => {
  prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (prefersReducedMotion) {
    isVisible.value = true
  }

  applyStaggerStyles()

  if (!props.onIntersection || prefersReducedMotion) {
    return
  }

  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation()
        }
      },
      {
        threshold: props.threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (container.value) {
      observer.observe(container.value)
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
.stagger-container {
  display: contents;
}

/**
 * Uses CSS custom properties set by JavaScript:
 * --stagger-delay: animation delay in ms
 * --stagger-duration: animation duration in ms
 * --stagger-index: 1-based index for nth-child selectors
 * 
 * Apply `.stagger-item` class to children that should be staggered.
 * The parent container applies `.stagger-active` when animation should trigger.
 */

.stagger-container > * {
  /* Default state: hidden, ready to animate */
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  transition: opacity var(--stagger-duration, 700ms) cubic-bezier(0.16, 1, 0.3, 1),
              transform var(--stagger-duration, 700ms) cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--stagger-delay, 0ms);
  will-change: opacity, transform;
}

/* Animate to visible state when container has .stagger-active class */
.stagger-container.stagger-active > * {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .stagger-container > * {
    animation: none !important;
    transition: none !important;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
