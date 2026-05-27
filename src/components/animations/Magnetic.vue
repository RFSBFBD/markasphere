<template>
  <div
    ref="container"
    class="magnetic-container inline-block"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const props = defineProps({
  strength: {
    type: Number,
    default: 0.28 // Subtle cinematic magnetic strength
  },
  lerpSpeed: {
    type: Number,
    default: 0.085 // Dampened smooth speed
  }
})

const container = ref(null)

let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0
let rafId = null
let isHovered = false

const handleMouseMove = (event) => {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  // Calculate cursor offset relative to the element center
  const deltaX = event.clientX - centerX
  const deltaY = event.clientY - centerY

  isHovered = true
  targetX = deltaX * props.strength
  targetY = deltaY * props.strength
}

const handleMouseLeave = () => {
  isHovered = false
  targetX = 0
  targetY = 0
}

const updatePosition = () => {
  // Linear interpolation (lerp) formula: current + (target - current) * factor
  currentX += (targetX - currentX) * props.lerpSpeed
  currentY += (targetY - currentY) * props.lerpSpeed

  if (container.value) {
    // Select the first child element of the slot container to apply the transform
    const child = container.value.firstElementChild
    if (child) {
      child.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      child.style.willChange = "transform"
    }
  }

  // Continue the loop
  rafId = requestAnimationFrame(updatePosition)
}

onMounted(() => {
  rafId = requestAnimationFrame(updatePosition)
})

onBeforeUnmount(() => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<style scoped>
.magnetic-container {
  display: inline-block;
  cursor: pointer;
}
.magnetic-container > :deep(*) {
  transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
