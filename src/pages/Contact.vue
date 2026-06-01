<template>
  <section class="pt-28 pb-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--color-text)]">
          {{ t.contact.title }}
        </h1>
        <p class="mt-8 text-lg md:text-xl leading-relaxed text-[var(--color-text)]/75">
          {{ t.contact.subtitle }}
        </p>
        <button
          type="button"
          class="mt-12 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-90"
          @click="scrollToForm"
        >
          {{ t.contact.ctaLabel }}
        </button>
      </div>
    </section>

    <section ref="formSection" class="pb-28 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="glass p-8 md:p-10 rounded-[32px] border border-[var(--color-border)]/20 shadow-premium">
          <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="space-y-6">

            <div class="grid gap-6">

              <div class="space-y-2">
                <label for="name" class="text-sm font-semibold text-[var(--color-text)]/80 block text-start">
                  {{ t.contact.nameLabel }}
                </label>
                <input
                  id="name"
                  type="text"
                  v-model="form.name"
                  :disabled="isSubmitting"
                  :class="inputClass(errors.name)"
                  required
                />
                <p v-if="errors.name" class="text-rose-600 text-sm">{{ errors.name }}</p>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="company" class="text-sm font-semibold text-[var(--color-text)]/80 block text-start">
                    {{ t.contact.companyLabel }}
                  </label>
                  <input
                    id="company"
                    type="text"
                    v-model="form.company"
                    :disabled="isSubmitting"
                    :class="inputClass(errors.company)"
                  />
                  <p v-if="errors.company" class="text-rose-600 text-sm">{{ errors.company }}</p>
                </div>

                <div class="space-y-2">
                  <label for="phone" class="text-sm font-semibold text-[var(--color-text)]/80 block text-start">
                    {{ t.contact.phoneLabel }}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    v-model="form.phone"
                    :disabled="isSubmitting"
                    :class="inputClass(errors.phone)"
                  />
                  <p v-if="errors.phone" class="text-rose-600 text-sm">{{ errors.phone }}</p>
                </div>
              </div>

              <div class="space-y-2">
                <label for="email" class="text-sm font-semibold text-[var(--color-text)]/80 block text-start">
                  {{ t.contact.emailLabel }}
                </label>
                <input
                  id="email"
                  type="email"
                  v-model="form.email"
                  :disabled="isSubmitting"
                  :class="inputClass(errors.email)"
                  required
                />
                <p v-if="errors.email" class="text-rose-600 text-sm">{{ errors.email }}</p>
              </div>

              <div class="space-y-2">
                <label for="service" class="text-sm font-semibold text-[var(--color-text)]/80 block text-start">
                  {{ t.contact.serviceLabel }}
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  :disabled="isSubmitting"
                  :class="inputClass(errors.service)"
                  required
                >
                  <option value="" disabled>{{ t.contact.serviceLabel }}</option>
                  <option
                    v-for="option in serviceOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
                <p v-if="errors.service" class="text-rose-600 text-sm">{{ errors.service }}</p>
              </div>

              <div class="space-y-2">
                <label for="message" class="text-sm font-semibold text-[var(--color-text)]/80 block text-start">
                  {{ t.contact.messageLabel }}
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  :disabled="isSubmitting"
                  :class="inputClass(errors.message)"
                  required
                ></textarea>
                <p v-if="errors.message" class="text-rose-600 text-sm">{{ errors.message }}</p>
              </div>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-[var(--color-text)] text-[var(--color-bg)] hover:opacity-90 py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-soft hover:shadow-premium flex items-center justify-center gap-2"
            >
              <span v-if="isSubmitting" class="inline-block size-4 border-2 border-[var(--color-bg)] border-t-transparent rounded-full animate-spin" />
              {{ isSubmitting ? '' : t.contact.sendButton }}
            </button>
          </form>

          <div v-else class="text-center py-10 space-y-4">
            <div class="size-16 bg-accent/10 text-accent rounded-full flex items-center justify-center text-3xl mx-auto">
              ✦
            </div>
            <h3 class="text-2xl font-bold text-[var(--color-text)]">
              {{ t.contact.successMsg }}
            </h3>
            <p class="text-[var(--color-text)]/60 text-sm">
              {{ t.contact.whatsappRedirect || 'You will be redirected to WhatsApp to complete your inquiry.' }}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useHead } from "@unhead/vue"
import { SITE_URL, getWhatsAppUrl } from "../config/constants"
import { useLanguage } from "../composables/useLanguage"

const STORAGE_KEY = "markasphere_contact_draft"

const { t } = useLanguage()

useHead(() => {
  const title = t.value?.layout?.contactPageTitle || "Contact | MarkaSphere"
  const description = t.value?.layout?.contactMetaDesc || "Get in touch with MarkaSphere. Discuss your brand project with our team."

  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE_URL + "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ],
    link: [{ rel: "canonical", href: SITE_URL + "/contact" }]
  }
})

const formSection = ref(null)
const isSubmitted = ref(false)
const isSubmitting = ref(false)
const form = ref({
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  message: ""
})
const errors = ref({})

const saveDraft = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form.value))
  } catch {
    // storage full or unavailable
  }
}

const restoreDraft = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (parsed && typeof parsed === "object") {
        Object.assign(form.value, parsed)
      }
    }
  } catch {
    // ignore corrupt data
  }
}

onMounted(restoreDraft)

watch(
  () => ({ ...form.value }),
  saveDraft,
  { deep: true }
)

const serviceOptions = computed(() => {
  return t.value.services?.serviceList?.map((item) => item.title) || []
})

const scrollToForm = () => {
  formSection.value?.scrollIntoView({ behavior: "smooth", block: "start" })
}

const inputClass = (hasError) => {
  return [
    "w-full px-5 py-4 rounded-xl border bg-transparent text-[var(--color-text)] outline-none transition-all duration-300 text-start",
    hasError
      ? "border-rose-500/70 focus:border-rose-500"
      : "border border-[var(--color-border)]/30 focus:border-accent"
  ]
}

const validateEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const validatePhone = (value) => {
  if (!value.trim()) return true
  return /^[\d\s\+\-\(\)]{7,20}$/.test(value)
}

const handleSubmit = () => {
  errors.value = {}

  if (!form.value.name.trim()) {
    errors.value.name = t.value.contact.validation.required
  }
  if (!form.value.email.trim()) {
    errors.value.email = t.value.contact.validation.required
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = t.value.contact.validation.invalidEmail
  }
  if (form.value.phone.trim() && !validatePhone(form.value.phone)) {
    errors.value.phone = t.value.contact.validation.invalidPhone
  }
  if (!form.value.service) {
    errors.value.service = t.value.contact.validation.required
  }
  if (!form.value.message.trim()) {
    errors.value.message = t.value.contact.validation.required
  }

  if (Object.keys(errors.value).length > 0) return

  isSubmitting.value = true

  const message = [
    "*New Project Inquiry*",
    "",
    `*Name:* ${form.value.name}`,
    `*Company:* ${form.value.company || "—"}`,
    `*Phone:* ${form.value.phone || "—"}`,
    `*Email:* ${form.value.email}`,
    `*Service:* ${form.value.service}`,
    "",
    `*Message:*`,
    form.value.message
  ].join("\n")

  const url = getWhatsAppUrl(message)

  if (url.length > 2048) {
    form.value.message = form.value.message.slice(0, 500)
    errors.value.message = "Message too long. Please shorten it."
    isSubmitting.value = false
    return
  }

  window.open(url, "_blank")

  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }

  setTimeout(() => {
    isSubmitted.value = true
    isSubmitting.value = false
  }, 1000)
}
</script>

