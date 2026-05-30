<script setup>
import { ref, computed } from "vue"
import { useLanguage } from "../../composables/useLanguage"
import Reveal from "../animations/Reveal.vue"
import { ChevronDown } from "@lucide/vue"

const { t } = useLanguage()

const faqItems = computed(() => t.value?.faq || [])
const openIndex = ref(null)

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="w-full py-24 px-6 bg-[var(--surface-primary)]">
    <div class="max-w-3xl mx-auto">
      <Reveal>
        <div class="text-center mb-16 space-y-4">
          <span class="inline-block text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium">
            FAQs
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Frequently Asked Questions
          </h2>
        </div>
      </Reveal>

      <div class="space-y-3" v-if="faqItems.length">
        <Reveal
          v-for="(item, index) in faqItems"
          :key="index"
          :delay="index * 80"
          :duration="800"
        >
          <div
            class="rounded-2xl border border-[var(--color-border)] bg-[var(--surface-secondary)] overflow-hidden transition-all duration-300"
            :class="openIndex === index ? 'shadow-md' : ''"
          >
            <button
              @click="toggle(index)"
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-start text-[var(--color-text)] font-medium transition-colors duration-300 hover:text-[var(--color-accent)]"
              :aria-expanded="openIndex === index"
            >
              <span class="text-base md:text-lg">{{ item.q }}</span>
              <ChevronDown
                class="size-5 shrink-0 transition-transform duration-300"
                :class="openIndex === index ? 'rotate-180' : ''"
              />
            </button>
            <div
              class="grid transition-all duration-300"
              :style="{ gridTemplateRows: openIndex === index ? '1fr' : '0fr' }"
            >
              <div class="overflow-hidden">
                <p class="px-6 pb-5 text-sm md:text-base text-[var(--color-text)]/60 leading-relaxed">
                  {{ item.a }}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
