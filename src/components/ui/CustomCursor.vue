<template>
  <div
    v-if="showCursor"
    class="custom-cursor-wrapper pointer-events-none fixed inset-0 z-[9999]"
    aria-hidden="true"
  >
    <!-- Center Dot -->
    <div
      class="cursor-dot fixed left-0 top-0 size-1.5 rounded-full bg-[var(--color-text)]"
      :style="dotStyle"
    />

    <!-- Outer Follower Ring -->
    <div
      class="cursor-ring fixed left-0 top-0 rounded-full border border-[var(--color-text)]/40 flex items-center justify-center text-[10px] font-medium tracking-widest text-[var(--color-bg)] uppercase select-none transition-all duration-300 ease-out"
      :class="ringClasses"
      :style="ringStyle"
    >
      <span
        v-if="hoverText"
        class="opacity-0 transition-opacity duration-300"
        :class="{ 'opacity-100': hoverText }"
      >
        {{ hoverText }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue"

const showCursor = ref(false)
const hoverText = ref("")
const isHovering = ref(false)
const isClicking = ref(false)

const dotStyle = ref({ transform: "translate3d(-100px, -100px, 0)" })
const ringStyle = ref({ transform: "translate3d(-100px, -100px, 0)" })

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let rafId = null

const ringClasses = computed(() => {
  return {
    "is-hovering": isHovering.value,
    "is-clicking": isClicking.value,
    "has-text": !!hoverText.value
  }
})

const handleMouseMove = (event) => {
  mouseX = event.clientX
  mouseY = event.clientY
  
  if (!showCursor.value) {
    showCursor.value = true
  }

  // Update dot instantly
  dotStyle.value = {
    transform: `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`
  }
}

const handleMouseDown = () => {
  isClicking.value = true
}

const handleMouseUp = () => {
  isClicking.value = false
}

const handleMouseOver = (event) => {
  const target = event.target
  if (!target) return

  // Check if hovering over link, button, or element with data-cursor
  const interactive = target.closest("a, button, [role='button'], [data-cursor]")
  if (interactive) {
    isHovering.value = true
    const customCursorAttr = interactive.getAttribute("data-cursor")
    if (customCursorAttr) {
      hoverText.value = customCursorAttr
    }
  }
}

const handleMouseOut = (event) => {
  const target = event.target
  if (!target) return

  const interactive = target.closest("a, button, [role='button'], [data-cursor]")
  if (interactive) {
    isHovering.value = false
    hoverText.value = ""
  }
}

const updateRing = () => {
  // Lerp outer ring for smooth organic follow effect
  const lerpFactor = 0.14
  ringX += (mouseX - ringX) * lerpFactor
  ringY += (mouseY - ringY) * lerpFactor

  // Offset calculations depend on cursor state
  const offset = isHovering.value ? (hoverText.value ? 36 : 24) : 18
  
  ringStyle.value = {
    transform: `translate3d(${ringX - offset}px, ${ringY - offset}px, 0)`
  }

  rafId = requestAnimationFrame(updateRing)
}

onMounted(() => {
  // Detect touch devices
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
  if (isTouch) return

  window.addEventListener("mousemove", handleMouseMove)
  window.addEventListener("mousedown", handleMouseDown)
  window.addEventListener("mouseup", handleMouseUp)
  window.addEventListener("mouseover", handleMouseOver)
  window.addEventListener("mouseout", handleMouseOut)

  // Start smooth tracking loop
  rafId = requestAnimationFrame(updateRing)

  // Apply global CSS class to hide standard cursor on desktop
  document.documentElement.classList.add("custom-cursor-active")
})

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove)
  window.removeEventListener("mousedown", handleMouseDown)
  window.removeEventListener("mouseup", handleMouseUp)
  window.removeEventListener("mouseover", handleMouseOver)
  window.removeEventListener("mouseout", handleMouseOut)

  if (rafId) {
    cancelAnimationFrame(rafId)
  }

  document.documentElement.classList.remove("custom-cursor-active")
})
</script>

<style scoped>
.cursor-dot {
  pointer-events: none;
  z-index: 10000;
  transition: transform 0.05s linear;
}

.cursor-ring {
  pointer-events: none;
  z-index: 9999;
  width: 36px;
  height: 36px;
  background: transparent;
  transform-origin: center;
  transition: 
    background-color 0.3s ease,
    border-color 0.3s ease,
    width 0.3s ease,
    height 0.3s ease;
}

/* Hover States */
.cursor-ring.is-hovering {
  width: 48px;
  height: 48px;
  border-color: var(--color-text);
  background-color: rgba(17, 22, 34, 0.03);
}

.cursor-ring.has-text {
  width: 72px;
  height: 72px;
  background-color: var(--color-text);
  border-color: transparent;
  box-shadow: 0 0 0 1px var(--color-border);
}

/* Click Animation scale down */
.cursor-ring.is-clicking {
  transform: scale(0.85);
}
</style>
