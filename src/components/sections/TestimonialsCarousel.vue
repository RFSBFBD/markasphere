<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import { useLanguage } from "../../composables/useLanguage"
import Reveal from "../animations/Reveal.vue"

const { t } = useLanguage()

const testimonials = computed(() => t.value?.testimonials || [])
const current = ref(0)
let timer = null

const goTo = (index) => { current.value = index; resetTimer() }
const next = () => { current.value = (current.value + 1) % testimonials.value.length }

const resetTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(next, 5000)
}

const pause = () => { if (timer) clearInterval(timer) }
const resume = () => { if (testimonials.value.length > 1) resetTimer() }

onMounted(() => { if (testimonials.value.length > 1) resetTimer() })
onBeforeUnmount(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <section
    class="w-full py-24 px-6 bg-[var(--surface-primary)]"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <div class="text-center mb-16 space-y-4">
          <span class="inline-block text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium">
            Client Testimonials
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            What Our Clients Say
          </h2>
        </div>
      </Reveal>

      <div class="relative overflow-hidden" v-if="testimonials.length">
        <div
          class="flex transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
          :style="{ transform: `translate3d(-${current * 100}%, 0, 0)` }"
        >
          <div
            v-for="item in testimonials"
            :key="item.id"
            class="min-w-0 w-full shrink-0 px-4"
          >
            <Reveal :delay="100">
              <div class="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-[var(--glass-bg)]/60 backdrop-blur-xl border border-[var(--color-border)] text-center space-y-6">
                <div class="flex justify-center gap-1">
                  <span
                    v-for="i in 5"
                    :key="i"
                    class="inline-block w-4 h-4"
                    :class="i <= item.rating ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)]/20'"
                  >
                    <svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </span>
                </div>
                <blockquote class="text-lg md:text-xl text-[var(--color-text)]/80 leading-relaxed italic">
                  "{{ item.quote }}"
                </blockquote>
                <div>
                  <p class="font-semibold text-[var(--color-text)]">{{ item.name }}</p>
                  <p class="text-sm text-[var(--color-text)]/50">{{ item.title }}, {{ item.company }}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div class="flex justify-center gap-3 mt-10" v-if="testimonials.length > 1">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="goTo(index)"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300"
            :class="index === current ? 'bg-[var(--color-accent)] w-8' : 'bg-[var(--color-text)]/20 hover:bg-[var(--color-text)]/40'"
            :aria-label="'Go to testimonial ' + (index + 1)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
