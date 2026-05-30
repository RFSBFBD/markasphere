<template>
  <section class="problem-awareness-section">
    <div class="container">
      
      <!-- Heading with line break (two-part structure) -->
      <Reveal :delay="100" :duration="1000">
        <h2 class="awareness-heading">
          <span class="heading-strong">{{ t.home.problemHeadingPart1 }}</span>
          <span class="heading-lighter">{{ t.home.problemHeadingPart2 }}</span>
        </h2>
      </Reveal>

      <!-- Body paragraph -->
      <Reveal :delay="200" :duration="1000">
        <p class="awareness-body">
          {{ t.home.problemBody }}
        </p>
      </Reveal>

    </div>
  </section>
</template>

<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<style scoped>
.problem-awareness-section {
  width: 100%;
  padding: 10rem 1.5rem;
  background: var(--color-bg);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Two-part Heading */
.awareness-heading {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--color-text);
  margin: 0 0 3rem 0;
  max-width: 800px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.heading-strong {
  font-weight: 600;
}

.heading-lighter {
  font-weight: 400;
  opacity: 0.9;
}

/* Body paragraph */
.awareness-body {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: -0.01em;
  color: var(--color-text);
  opacity: 0.8;
  margin: 0;
  max-width: 700px;
  word-spacing: 0.05em;
}

/* Responsive */
@media (max-width: 768px) {
  .problem-awareness-section {
    padding: 7rem 1.5rem;
  }

  .awareness-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2.5rem;
  }

  .awareness-body {
    font-size: clamp(1rem, 2vw, 1.1rem);
  }
}

@media (max-width: 480px) {
  .problem-awareness-section {
    padding: 5rem 1rem;
  }

  .awareness-heading {
    margin-bottom: 2rem;
  }
}
</style>
