<script setup>
import Reveal from "../animations/Reveal.vue"

const metrics = [
  { value: "8+", label: "Years of Excellence" },
  { value: "120+", label: "Projects Delivered" },
  { value: "60+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" }
]
</script>

<template>
  <section class="w-full py-24 px-6 bg-[var(--surface-secondary)] border-y border-[var(--color-border)]">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <Reveal
          v-for="(metric, index) in metrics"
          :key="index"
          :delay="index * 100"
          :duration="800"
        >
          <div class="text-center space-y-2">
            <p class="text-4xl md:text-5xl font-bold tracking-tight text-accent">
              {{ metric.value }}
            </p>
            <p class="text-sm text-[var(--color-text)]/60 uppercase tracking-[0.1em]">
              {{ metric.label }}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>