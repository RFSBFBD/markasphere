<template>
  <section class="closing-cta-section">
    <div class="container">
      
      <!-- Large Heading -->
      <Reveal :delay="100" :duration="1000">
        <h2 class="cta-heading">
          {{ t.home.closingHeading }}
        </h2>
      </Reveal>

      <!-- List Items -->
      <Reveal :delay="200" :duration="1000">
        <div class="cta-list">
          <span
            v-for="(item, index) in t.home.closingListItems"
            :key="index"
            class="list-item"
          >
            {{ item }}
          </span>
        </div>
      </Reveal>

      <!-- CTA Button - WhatsApp Direct -->
      <Reveal :delay="300" :duration="1000">
        <a
          :href="getWhatsAppUrl(t.home.whatsappClosingMessage)"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button-primary"
        >
          {{ t.home.closingCtaLabel }}
        </a>
      </Reveal>

    </div>
  </section>
</template>

<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"
import { getWhatsAppUrl } from "../../config/constants"

const { t } = useLanguage()
</script>

<style scoped>
.closing-cta-section {
  width: 100%;
  padding: 10rem 1.5rem;
  background: var(--surface-inverted, var(--color-text));
  color: var(--color-bg);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
}

/* Heading */
.cta-heading {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-bg);
  margin: 0;
  max-width: 800px;
}

/* List Items */
.cta-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--color-bg);
  opacity: 0.9;
}

.list-item {
  position: relative;
}

.list-item:not(:last-child)::after {
  content: "/";
  position: absolute;
  right: -0.85rem;
  opacity: 0.5;
}

/* CTA Button */
.cta-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  border: 2px solid var(--color-bg);
  background: var(--color-bg);
  color: var(--surface-inverted, var(--color-text));
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease;
  text-transform: uppercase;
}

.cta-button-primary:hover {
  background: transparent;
  color: var(--color-bg);
  border-color: var(--color-bg);
}

/* Responsive */
@media (max-width: 768px) {
  .closing-cta-section {
    padding: 7rem 1.5rem;
  }

  .container {
    gap: 2.5rem;
  }

  .cta-heading {
    font-size: clamp(2rem, 5vw, 3rem);
  }

  .cta-list {
    flex-direction: column;
    gap: 1rem;
  }

  .list-item:not(:last-child)::after {
    display: none;
  }

  .list-item::before {
    content: "•";
    margin-right: 0.75rem;
    opacity: 0.5;
  }
}

@media (max-width: 480px) {
  .closing-cta-section {
    padding: 5rem 1rem;
  }

  .cta-button-primary {
    width: 100%;
    padding: 1rem 2rem;
  }
}
</style>
