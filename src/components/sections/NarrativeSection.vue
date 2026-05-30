<script setup>
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()
</script>

<template>
  <section class="narrative-section">
    <div class="container">
      
      <!-- Centered Heading -->
      <Reveal :delay="100" :duration="1000">
        <h2 class="narrative-title">
          {{ t.home.narrativeTitle }}
        </h2>
      </Reveal>

      <!-- Stacked Narrative Lines (Poem-like rhythm) -->
      <div class="narrative-lines">
        <Reveal
          v-for="(line, index) in t.home.narrativeLines"
          :key="index"
          :delay="200 + index * 120"
          :duration="1000"
          class="line-wrapper"
        >
          <p class="narrative-line">
            {{ line }}
          </p>
        </Reveal>
      </div>

    </div>
  </section>
</template>

<style scoped>
.narrative-section {
  width: 100%;
  padding: 8rem 1.5rem;
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

/* Heading */
.narrative-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-text);
  margin: 0 0 4rem 0;
  max-width: 800px;
}

/* Stacked Lines Container */
.narrative-lines {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-width: 700px;
}

/* Individual Lines */
.line-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.narrative-line {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: var(--color-text);
  margin: 0;
  word-spacing: 0.05em;
}

/* Responsive */
@media (max-width: 768px) {
  .narrative-section {
    padding: 6rem 1rem;
  }

  .narrative-title {
    margin-bottom: 3rem;
  }

  .narrative-lines {
    gap: 0.35rem;
  }

  .narrative-line {
    font-weight: 500;
  }
}

@media (max-width: 480px) {
  .narrative-section {
    padding: 4rem 1rem;
  }

  .narrative-title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  .narrative-line {
    font-size: 1.15rem;
  }
}
</style>

