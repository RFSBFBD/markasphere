<template>
  <footer class="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)]">
    <div class="container-premium py-16 md:py-20">
      <div class="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        <div class="max-w-xl space-y-5">
          <RouterLink to="/" class="inline-flex text-2xl font-semibold tracking-tight text-[var(--color-text)] brand-name">
            {{ BRAND_NAME }}
          </RouterLink>
          <p class="text-small text-[var(--color-muted)] max-w-md">
            {{ t.layout.footerDesc }}
          </p>
        </div>

        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div class="space-y-4">
            <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">{{ t.layout.quickLinks }}</h3>
            <ul class="space-y-3 text-small text-[var(--color-muted)]">
              <li v-for="item in navItems" :key="item.path">
                <RouterLink
                  :to="item.path"
                  class="transition hover:text-[var(--color-text)]"
                  @click="scrollToTop"
                >
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">{{ t.layout.footerServices }}</h3>
            <p class="text-small text-[var(--color-muted)] leading-relaxed">
              {{ t.layout.servicesDesc }}
            </p>
          </div>

          <div class="space-y-4">
            <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">{{ t.layout.getInTouch }}</h3>
            <p class="text-small text-[var(--color-muted)] leading-relaxed">
              {{ t.layout.touchDesc }}
            </p>
            <div class="flex flex-wrap gap-3 pt-1">
              <RouterLink
                to="/contact"
                class="inline-flex items-center gap-2 border border-[var(--color-accent)]/30 text-[var(--color-accent)] px-5 py-3 text-small font-semibold transition hover:bg-[var(--color-accent)] hover:text-white"
              >
                {{ t.layout.ctaButton }}
              </RouterLink>
              <a
                :href="getWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-text)] px-5 py-3 text-small font-semibold transition hover:bg-[var(--surface-secondary)]"
              >
                <svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {{ t.layout.whatsappButton }}
              </a>
            </div>
            <div class="space-y-4 pt-4">
              <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Social Links</h3>
              <div class="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.tiktok.com/@markasphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.04c-1.64 0-3.1.56-4.29 1.48v3.6c.9-.76 2.01-1.22 3.16-1.22.87 0 1.68.23 2.38.64v4.31c-1.38-.08-2.57-.65-3.38-1.55-.67-.75-1.04-1.7-1.04-2.71V3.7C7.05 3.2 9.44 2 12 2c1.06 0 2.07.23 2.96.64v3.6c-.62-.27-1.3-.42-2-.42-.9 0-1.75.2-2.5.56v4.05c.86.57 1.92.89 3.01.89 1.08 0 2.14-.33 3.02-.95v4.6c-1.1.88-2.44 1.38-3.85 1.38-3.32 0-6.01-2.69-6.01-6.01 0-3.32 2.69-6.01 6.01-6.01 1.03 0 2.01.27 2.86.76V2.04H12z"/></svg>
                </a>
                <a
                  href="https://x.com/markasphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.46 6.01c-.77.34-1.6.56-2.48.66.89-.53 1.57-1.38 1.88-2.38-.83.49-1.75.84-2.72 1.03-.78-.83-1.89-1.35-3.12-1.35-2.36 0-4.27 1.91-4.27 4.27 0 .34.04.67.11.99-3.55-.18-6.7-1.88-8.8-4.46-.37.63-.58 1.36-.58 2.13 0 1.47.75 2.77 1.9 3.53-.7-.02-1.36-.21-1.94-.53v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.75.15-1.15.15-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.97 4.04 3.01-1.48 1.16-3.34 1.85-5.36 1.85-.35 0-.7-.02-1.04-.06 1.92 1.23 4.2 1.96 6.65 1.96 7.98 0 12.34-6.62 12.34-12.35 0-.19-.01-.38-.01-.57.85-.61 1.58-1.37 2.16-2.24z"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/markasphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7H.5v17zM8.5 7h3.75v2.17h.05c.52-.99 1.8-2.03 3.7-2.03 3.96 0 4.7 2.6 4.7 5.97V24h-4v-8.27c0-1.97-.04-4.51-2.75-4.51-2.75 0-3.17 2.14-3.17 4.36V24h-4V7z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/markasphere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.055 1.98.242 2.44.404a4.92 4.92 0 011.71 1.112 4.92 4.92 0 011.112 1.71c.162.46.35 1.27.404 2.44.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.242 1.98-.404 2.44a4.92 4.92 0 01-1.112 1.71 4.92 4.92 0 01-1.71 1.112c-.46.162-1.27.35-2.44.404-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.98-.242-2.44-.404a4.92 4.92 0 01-1.71-1.112 4.92 4.92 0 01-1.112-1.71c-.162-.46-.35-1.27-.404-2.44C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.055-1.17.242-1.98.404-2.44a4.92 4.92 0 011.112-1.71A4.92 4.92 0 015.386 2.63c.46-.162 1.27-.35 2.44-.404C8.416 2.172 8.8 2.16 12 2.16zm0 1.838c-3.163 0-3.54.01-4.788.069-.998.045-1.537.207-1.896.345a3.08 3.08 0 00-1.116.725 3.08 3.08 0 00-.725 1.116c-.138.359-.3.898-.345 1.896-.059 1.248-.069 1.625-.069 4.788s.01 3.54.069 4.788c.045.998.207 1.537.345 1.896.17.446.47.846.725 1.116.27.255.67.555 1.116.725.359.138.898.3 1.896.345 1.248.059 1.625.069 4.788.069s3.54-.01 4.788-.069c.998-.045 1.537-.207 1.896-.345a3.08 3.08 0 001.116-.725 3.08 3.08 0 00.725-1.116c.138-.359.3-.898.345-1.896.059-1.248.069-1.625.069-4.788s-.01-3.54-.069-4.788c-.045-.998-.207-1.537-.345-1.896a3.08 3.08 0 00-.725-1.116 3.08 3.08 0 00-1.116-.725c-.359-.138-.898-.3-1.896-.345-1.248-.059-1.625-.069-4.788-.069zm0 4.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.838a3.662 3.662 0 100 7.323 3.662 3.662 0 000-7.323zm4.908-1.941a1.288 1.288 0 11-2.575 0 1.288 1.288 0 012.575 0z"/></svg>
                </a>
                <a
                  href="https://www.facebook.com/markasphere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  class="social-link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.675 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24H12.82V14.708h-3.1V11.08h3.1V8.414c0-3.066 1.872-4.735 4.604-4.735 1.31 0 2.436.097 2.762.14v3.205l-1.897.001c-1.49 0-1.777.708-1.777 1.747v2.29h3.554l-.463 3.628h-3.091V24h6.063C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 mt-16 text-small text-[var(--color-muted)] sm:flex-row">
        <p>&copy; 2025 {{ BRAND_NAME }}. {{ t.layout.footerCopyright }}</p>
        <p>{{ t.layout.footerCredit }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue"
import { useLanguage } from "../../composables/useLanguage"
import { getWhatsAppUrl, BRAND_NAME } from "../../config/constants"

const { t } = useLanguage()

const navItems = computed(() => [
  { name: t.value.layout.home, path: "/" },
  { name: t.value.layout.services, path: "/services" },
  { name: t.value.layout.work, path: "/work" },
  { name: t.value.layout.about, path: "/about" },
  { name: t.value.layout.insights, path: "/insights" },
  { name: t.value.layout.contact, path: "/contact" }
])

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<style scoped>
.brand-name {
  /* Explicitly use Canela Condensed for brand name only */
  font-family: "Canela Condensed", var(--font-primary);
  font-weight: 600;
  text-transform: none;
  direction: ltr; /* Force LTR for brand name */
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  transition: transform 220ms ease, color 220ms ease, border-color 220ms ease, background-color 220ms ease;
}

.social-link:hover {
  color: #5B6CFF;
  border-color: #5B6CFF;
  transform: translateY(-2px);
}

.social-link svg {
  width: 22px;
  height: 22px;
}
</style>
