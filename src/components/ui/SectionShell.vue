<script setup>
defineProps({
  tag: { type: String, default: "section" },
  narrow: Boolean,
  noPad: Boolean
})
</script>

<template>
  <component :is="tag" :class="['bg-[var(--color-bg)] text-[var(--color-text)]', !noPad && 'section-pad']">
    <div :class="['container-premium', narrow && 'max-w-4xl']">
      <slot />
    </div>
  </component>
</template>
