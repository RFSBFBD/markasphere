# Animation System Usage Guide

## Quick Start

### Route Transitions (Automatic)
Already implemented in `App.vue`. No action needed.

```vue
<!-- Automatically applies .page-enter-from, .page-leave-to transitions -->
<Transition name="page" mode="out-in">
  <component :is="Component" :key="route.fullPath" />
</Transition>
```

---

## Reveal Component (Intersection Observer)

Wrap any element to fade + reveal it when scrolled into view.

### Basic Usage
```vue
<template>
  <Reveal>
    <h2>This fades in when scrolled into view</h2>
  </Reveal>
</template>

<script setup>
import Reveal from "@/components/animations/Reveal.vue"
</script>
```

### With Props
```vue
<Reveal
  :delay="100"        <!-- Delay in ms (default: 0) -->
  :duration="900"     <!-- Animation duration in ms (default: 900) -->
  :threshold="0.1"    <!-- Intersection threshold 0-1 (default: 0.05) -->
>
  <div>Content appears with 100ms delay over 900ms</div>
</Reveal>
```

### Real Examples
```vue
<!-- Section header with staggered reveals -->
<Reveal :delay="50" :duration="1000">
  <span class="badge">Category</span>
</Reveal>

<Reveal :delay="150" :duration="1000">
  <h2>Main Title</h2>
</Reveal>

<Reveal :delay="250" :duration="1000">
  <p>Description text</p>
</Reveal>
```

---

## Stagger Component (Sequence Animator)

Animates multiple children in sequence with configurable delays.

### Basic Usage
```vue
<template>
  <Stagger :interval="60" :baseDelay="100">
    <div>First item (100ms)</div>
    <div>Second item (160ms)</div>
    <div>Third item (220ms)</div>
  </Stagger>
</template>

<script setup>
import Stagger from "@/components/animations/Stagger.vue"
</script>
```

### Props
```vue
<Stagger
  :interval="60"           <!-- Delay between items in ms (default: 60) -->
  :baseDelay="100"         <!-- First item delay in ms (default: 100) -->
  :duration="700"          <!-- Animation duration in ms (default: 700) -->
  :onIntersection="true"   <!-- Trigger on intersection (default: true) -->
  :threshold="0.1"         <!-- Intersection threshold (default: 0.1) -->
>
  <!-- Children animate in sequence -->
</Stagger>
```

### Real Examples
```vue
<!-- Stagger service cards -->
<Stagger :interval="60" :baseDelay="100">
  <div v-for="service in services" :key="service.id">
    <ServiceCard :service="service" />
  </div>
</Stagger>

<!-- Immediate stagger (no intersection waiting) -->
<Stagger :onIntersection="false">
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</Stagger>
```

---

## CSS Stagger Classes

For quick stagger without components, use CSS classes.

### Stagger Delay Classes
```css
.stagger-1  { transition-delay: 100ms; }
.stagger-2  { transition-delay: 160ms; }
.stagger-3  { transition-delay: 220ms; }
.stagger-4  { transition-delay: 280ms; }
.stagger-5  { transition-delay: 340ms; }
.stagger-6  { transition-delay: 400ms; }
.stagger-7  { transition-delay: 460ms; }
.stagger-8  { transition-delay: 520ms; }
.stagger-9  { transition-delay: 580ms; }
.stagger-10 { transition-delay: 640ms; }
.stagger-11 { transition-delay: 700ms; }
.stagger-12 { transition-delay: 760ms; }
```

### Utility Classes
```css
.fade-in      /* Animates from opacity: 0 to 1 */
.reveal-up    /* Fades in with upward motion (24px) */
.page-enter-active  /* Route transition active state */
```

### Example
```vue
<template>
  <div class="flex gap-4">
    <button class="fade-in stagger-1">First</button>
    <button class="fade-in stagger-2">Second</button>
    <button class="fade-in stagger-3">Third</button>
  </div>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
```

---

## Motion Design System

### Established Values

**Primary Easing:**
```
cubic-bezier(0.16, 1, 0.3, 1)  /* Smooth, energetic */
```

**Timing:**
- Route transitions: 600ms
- Section reveals: 700-900ms
- Hover states: 400-600ms
- Stagger intervals: 60-80ms

**Transform Strategies:**
- ✅ `translate3d()` for movement
- ✅ `opacity` for visibility
- ❌ Never use `width`, `height`, `padding`

---

## Accessibility

### Reduced Motion Support

All animations automatically respect `prefers-reduced-motion: reduce`.

```css
/* Automatically applied if user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Testing:**
```javascript
// Simulate preference in DevTools
window.matchMedia = (query) => ({
  matches: query === '(prefers-reduced-motion: reduce)',
  media: query,
  addEventListener: () => {},
  removeEventListener: () => {}
})
```

---

## Performance Tips

### ✅ Do

- Use Reveal for elements entering viewport
- Use CSS transforms only (translate3d, scale, rotate)
- Use `will-change` sparingly (remove when done)
- Limit simultaneous animations (stagger instead)
- Use GPU acceleration (`translate3d`)

### ❌ Don't

- Don't animate `width`, `height`, `margin`, `padding`
- Don't use `setInterval` for animations
- Don't add animations to every element
- Don't use multiple `will-change` properties
- Don't forget to respect `prefers-reduced-motion`

---

## Common Patterns

### Hero Section with Staggered Text
```vue
<template>
  <section>
    <Reveal :delay="50" :duration="1000">
      <h1 class="text-5xl font-bold">Hero Title</h1>
    </Reveal>
    
    <Reveal :delay="150" :duration="1000">
      <p class="text-xl text-gray-600">Subtitle with motion</p>
    </Reveal>

    <Reveal :delay="250" :duration="1000">
      <button>Call to Action</button>
    </Reveal>
  </section>
</template>
```

### Grid with Staggered Cards
```vue
<template>
  <div class="grid grid-cols-3 gap-6">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :stagger-index="index"  <!-- Receives stagger delay -->
    />
  </div>
</template>
```

### List with Smooth Reveal
```vue
<template>
  <Stagger :interval="40" :baseDelay="50">
    <div v-for="item in items" :key="item.id" class="fade-in">
      {{ item.name }}
    </div>
  </Stagger>
</template>
```

---

## Troubleshooting

### Animations Not Running
- Check `prefers-reduced-motion` setting
- Verify elements are in viewport
- Check console for JavaScript errors
- Ensure classes are applied correctly

### Animations Feeling Janky
- Profile in Chrome DevTools > Performance
- Check for CPU-heavy operations during animation
- Use `will-change: transform` if needed
- Verify GPU acceleration (should see green frames)

### Elements Jumping After Animation
- Ensure animations use `transform` only
- Verify `will-change` is removed after
- Check for `display` or `visibility` changes
- Use `forwards` animation-fill-mode

### Stagger Not Working
- Verify parent has correct CSS class
- Check children are direct descendants
- Ensure Intersection Observer fires once
- Review browser console for errors

---

## Browser DevTools Tips

### Inspect Animations
```javascript
// DevTools Console
document.querySelectorAll('.cinematic-reveal').forEach(el => {
  console.log('Visible?', el.classList.contains('is-visible'))
})
```

### Slow Down Animations
```javascript
// Devtools > Sources, add this breakpoint condition:
!window.__animationThrottle && (window.__animationThrottle = true, console.log('Throttled'))
```

### Force Reduced Motion
```javascript
// DevTools Console
window.matchMedia('(prefers-reduced-motion: reduce)').matches // true/false
```

---

## Production Checklist

- [ ] All animations tested on mobile
- [ ] Lighthouse audit completed
- [ ] `prefers-reduced-motion` tested
- [ ] No console errors
- [ ] Animations run at 60fps
- [ ] Accessibility audit passed
- [ ] Cross-browser testing done
- [ ] Performance monitoring enabled

---

## Questions?

Refer to:
- [Animation Performance Guide](./ANIMATION_PERFORMANCE_GUIDE.md)
- [WCAG Animation Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)
- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Web.dev Performance](https://web.dev/performance/)
