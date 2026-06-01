<script setup>
import { computed } from "vue"
import { Sun, Moon } from "@lucide/vue"
import { useLanguage } from "../../composables/useLanguage"
import { useTheme } from "../../composables/useTheme"
import { getWhatsAppUrl } from "../../config/constants"

const { currentLanguage, toggleLanguage, t } = useLanguage()
const { currentTheme, toggleTheme } = useTheme()

const navToggleLabel = computed(() => t.value?.layout?.navToggleLabel)
const themeToggleLabel = computed(() => t.value?.layout?.themeToggleLabel)
const contactLabel = computed(() => t.value?.layout?.consultation)
const consultUrl = computed(() => getWhatsAppUrl(t.value?.layout?.whatsappConsultationMessage || 'I would like a consultation'))

defineEmits(["toggle-mobile"])
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- Contact link removed from header (internal header) as requested -->

    <a
      :href="consultUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="hidden sm:inline-flex glass px-3 py-2 rounded-full text-xs font-bold text-[var(--color-text)]/80 hover:text-[var(--color-text)] transition-all duration-300 mr-2"
      :aria-label="contactLabel"
    >
      {{ contactLabel }}
    </a>

    <button
      @click="toggleLanguage"
      class="glass size-9 rounded-full text-xs font-bold text-[var(--color-text)]/70 hover:text-[var(--color-text)] transition-all duration-300 flex items-center justify-center cursor-pointer"
      :aria-label="navToggleLabel"
    >
      {{ currentLanguage === "en" ? "AR" : "EN" }}
    </button>

    <button
      @click="toggleTheme"
      class="glass size-9 rounded-full flex items-center justify-center text-[var(--color-text)]/70 hover:text-[var(--color-text)] transition-all duration-300 cursor-pointer"
      :aria-label="themeToggleLabel"
    >
      <Sun v-if="currentTheme === 'light'" class="size-4" />
      <Moon v-else class="size-4" />
    </button>

    <button
      @click="$emit('toggle-mobile')"
      class="flex md:hidden flex-col justify-center items-center gap-1.5 size-10 rounded-full glass cursor-pointer transition-all duration-300"
      :aria-label="t.value?.layout?.menuToggleLabel"
    >
      <span class="w-5 h-0.5 bg-[var(--color-text)] transition-all duration-300 origin-center" />
      <span class="w-5 h-0.5 bg-[var(--color-text)] transition-all duration-300 origin-center" />
      <span class="w-5 h-0.5 bg-[var(--color-text)] transition-all duration-300 origin-center" />
    </button>
  </div>
</template>
