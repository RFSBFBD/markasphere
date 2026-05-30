<script setup>
import Magnetic from "../animations/Magnetic.vue"

const props = defineProps({
  variant: { type: String, default: "primary" },
  href: String,
  to: [String, Object],
  tag: { type: String, default: "router-link" }
})

defineEmits(["click"])
</script>

<template>
  <Magnetic>
    <component
      :is="to ? 'router-link' : href ? 'a' : 'button'"
      v-bind="to ? { to } : href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}"
      @click="$emit('click', $event)"
      class="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 select-none"
      :class="[
        variant === 'primary'
          ? 'bg-[var(--color-text)] text-[var(--color-bg)] border border-[var(--color-text)] hover:opacity-90'
          : variant === 'secondary'
            ? 'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-text)]'
            : 'bg-transparent text-[var(--color-accent)] border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)] hover:text-white'
      ]"
    >
      <slot />
    </component>
  </Magnetic>
</template>
