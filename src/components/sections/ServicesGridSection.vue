<script setup>
import { ref, computed } from "vue"
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"
import { getWhatsAppUrl } from "../../config/constants"

const { currentLanguage, t } = useLanguage()

const activeCategory = ref("all")
const expanded = ref({})

const toggleExpanded = (index) => {
  expanded.value[index] = !expanded.value[index]
}

const filteredServices = computed(() => {
  const list = t.value.services?.serviceList || []
  if (activeCategory.value === "all") return list
  return list.filter((s) => s.category === activeCategory.value)
})

const categories = computed(() => {
  return t.value.services?.categories || { all: "All Services" }
})
</script>

<template>
  <section
    class="relative w-full py-32 ps-6 pe-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">

      <!-- Section Header -->
      <div class="mb-12">

        <Reveal :delay="50" :duration="1000">
          <span
            class="inline-flex border border-[var(--color-border)] ps-4 pe-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-[var(--color-text)]/60"
          >
            {{ t.services.badge }}
          </span>
        </Reveal>

        <Reveal :delay="150" :duration="1000">
          <h2
            class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-[var(--color-text)]"
          >
            {{ t.services.title }}
          </h2>
        </Reveal>

        <Reveal :delay="250" :duration="1000">
          <p
            class="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-text)]/70 max-w-2xl"
          >
            {{ t.services.desc }}
          </p>
        </Reveal>

      </div>

      <!-- Filter Tabs -->
      <Reveal :delay="300" :duration="1000">
        <div
          class="flex flex-wrap gap-2 mb-14 pb-6 border-b border-[var(--color-border)]"
          role="tablist"
          :aria-label="t.services.badge"
        >
          <button
            v-for="(label, key) in categories"
            :key="key"
            role="tab"
            :aria-selected="activeCategory === key"
            @click="activeCategory = key"
            class="px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] rounded-full border transition-all duration-300"
            :class="activeCategory === key
              ? 'bg-[var(--color-text)] text-[var(--color-bg)] border-[var(--color-text)]'
              : 'bg-transparent text-[var(--color-text)]/60 border-[var(--color-border)] hover:border-[var(--color-text)]/40 hover:text-[var(--color-text)]'"
          >
            {{ label }}
          </button>
        </div>
      </Reveal>

      <!-- Services Grid: 2-column desktop, 1 mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        <template v-if="filteredServices.length > 0">
          <Reveal
            v-for="(service, index) in filteredServices"
            :key="service.title"
            :delay="350 + index * 80"
            :duration="1000"
          >
            <div
              class="group relative border border-[var(--color-border)] bg-[var(--color-bg)] p-6 md:p-8 transition-all duration-500 hover:border-[var(--color-text)] hover:bg-[var(--surface-secondary)] hover:shadow-lg"
            >
              <span
                class="absolute top-4 md:top-6 end-4 md:end-6 text-xs md:text-sm font-semibold text-[var(--color-text)]/20 select-none"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <div class="pr-8">
                <h3
                  class="text-lg md:text-xl font-semibold tracking-tight text-[var(--color-text)] mb-3 leading-[1.3]"
                >
                  {{ service.title }}
                </h3>

                <p
                  class="text-sm md:text-base leading-relaxed text-[var(--color-text)]/70 font-normal"
                >
                  {{ service.description }}
                </p>
              </div>

              <div class="mt-6">
                <button
                  @click="toggleExpanded(index)"
                  type="button"
                  class="group/btn flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-text)]/60 hover:text-[var(--color-text)] transition-colors duration-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-text)] focus:rounded"
                  :aria-expanded="expanded[index] ? 'true' : 'false'"
                >
                  <span>What's included</span>
                  <span
                    class="inline-block transition-transform duration-300"
                    :class="{ 'rotate-180': expanded[index] }"
                  >
                    ↓
                  </span>
                </button>

                <transition
                  enter-active-class="transition-all duration-300 ease-out"
                  leave-active-class="transition-all duration-300 ease-in"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-96"
                  leave-from-class="opacity-100 max-h-96"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <ul v-if="expanded[index]" class="mt-4 space-y-2 overflow-hidden">
                    <li
                      v-for="item in service.includes"
                      :key="item"
                      class="text-sm text-[var(--color-text)]/65 flex items-start gap-3"
                    >
                      <span class="inline-block w-1 h-1 rounded-full bg-[var(--color-text)]/40 mt-2.5 flex-shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </transition>
              </div>

              <div class="mt-6 pt-6 border-t border-[var(--color-border)] group-hover:border-[var(--color-text)]/20 flex items-center justify-between">
                <router-link
                  :to="'/services/' + service.slug"
                  class="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)] hover:text-[var(--color-accent)]/80 transition-colors duration-300 inline-flex items-center gap-2 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-text)] focus:rounded"
                >
                  <span>View Details</span>
                  <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </router-link>
                <a
                  :href="getWhatsAppUrl(service.whatsappMessage)"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Inquire about ${service.title}`"
                  class="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text)]/40 hover:text-[var(--color-text)]/70 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </template>

        <div v-else class="col-span-full text-center py-20 text-[var(--color-text)]/50 text-sm">
          {{ currentLanguage === 'ar' ? 'لا توجد خدمات في هذا التصنيف.' : 'No services in this category.' }}
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
:deep(.transition-all) {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
