<script setup>
defineProps({
  variant: { type: String, default: "light" }
})
</script>

<template>
  <div
    class="p-8 md:p-10 transition-all duration-300"
    :class="[
      variant === 'light'
        ? 'bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-depth)]'
        : 'bg-[var(--surface-secondary)] border border-transparent'
    ]"
  >
    <slot />
  </div>
</template>
