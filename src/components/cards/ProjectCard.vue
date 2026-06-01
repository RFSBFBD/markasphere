<template>
  <Reveal :delay="staggerDelay">
    <RouterLink
      :to="`/work/${project.slug}`"
      class="project-card-link group block"
      :aria-label="`View ${project.title} project details`"
    >
      <div class="project-card">
        
        <!-- Image Container with Glassmorphism -->
        <div class="project-image-wrapper">
          <img
            :src="project.cover"
            :alt="project.title"
            loading="lazy"
            decoding="async"
            class="project-image"
          />
          <!-- Subtle overlay gradient -->
          <div class="image-overlay" aria-hidden="true" />
        </div>

        <!-- Glass Content Panel -->
        <div class="project-content">
          
          <!-- Category Badge -->
          <p class="project-category" aria-label="Category">
            {{ categoryLabel }}
          </p>

          <!-- Title -->
          <h3 class="project-title">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="project-description">
            {{ project.description }}
          </p>

          <!-- CTA with Arrow -->
          <div class="project-cta" aria-hidden="true">
            {{ t.value?.layout?.viewCase || 'View Case' }}
            <span class="cta-arrow">
              →
            </span>
          </div>
          
        </div>

      </div>
    </RouterLink>
  </Reveal>
</template>

<script setup>
import { computed } from "vue"
import Reveal from "../animations/Reveal.vue"
import { useLanguage } from "../../composables/useLanguage"

const { t } = useLanguage()

const props = defineProps({
  project: Object,
  staggerIndex: {
    type: Number,
    default: 0
  }
})

const categoryLabel = computed(() => {
  return t.value?.projects?.categoryLabels?.[props.project.category] || props.project.category
})

const staggerDelay = computed(() => {
  // Stagger interval: 60ms between cards
  return 100 + props.staggerIndex * 60
})
</script>

<style scoped>
.project-card-link {
  text-decoration: none;
  color: inherit;
}

.project-card-link:focus {
  outline: 2px solid var(--color-text);
  outline-offset: 2px;
  border-radius: 12px;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Base glassmorphism background */
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  
  /* Subtle shadow */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  will-change: transform, box-shadow;
}

/* Hover state: Lift effect + enhanced glass */
.project-card-link:hover .project-card {
  transform: translateY(-8px) scale(1.01);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 16px 48px rgba(0, 0, 0, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

/* Image Container */
.project-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease;
  opacity: 1;
  will-change: transform;
}

.project-card-link:hover .project-image {
  transform: scale(1.04);
  opacity: 0.9;
}

/* Subtle overlay gradient */
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 0.15)
  );
  pointer-events: none;
  transition: opacity 400ms ease;
}

.project-card-link:hover .image-overlay {
  opacity: 0.6;
}

/* Content Panel */
.project-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.75rem 1.5rem 1.5rem;
  gap: 0.75rem;
}

/* Category */
.project-category {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(var(--color-text-rgb, 255, 255, 255), 0.45);
  margin: 0;
  transition: color 400ms ease;
}

.project-card-link:hover .project-category {
  color: rgba(var(--color-text-rgb, 255, 255, 255), 0.65);
}

/* Title */
.project-title {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: var(--color-text);
  margin: 0.25rem 0 0;
  transition: opacity 400ms ease;
}

.project-card-link:hover .project-title {
  opacity: 0.95;
}

/* Description */
.project-description {
  font-size: 0.9rem;
  line-height: 1.5;
  letter-spacing: -0.005em;
  color: rgba(var(--color-text-rgb, 255, 255, 255), 0.65);
  margin: 0;
  transition: color 400ms ease;
}

.project-card-link:hover .project-description {
  color: rgba(var(--color-text-rgb, 255, 255, 255), 0.75);
}

/* CTA */
.project-cta {
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
  transition: all 400ms ease;
}

.cta-arrow {
  display: inline-block;
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card-link:hover .cta-arrow {
  transform: translateX(4px);
}

/* RTL Support */
[dir="rtl"] .project-card-link:hover .cta-arrow {
  transform: translateX(-4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card {
    border-radius: 10px;
  }

  .project-card-link:hover .project-card {
    transform: translateY(-4px) scale(1.005);
  }

  .project-content {
    padding: 1.5rem 1.25rem;
  }
}

@media (max-width: 480px) {
  .project-card {
    border-radius: 8px;
  }

  .project-card-link:hover .project-card {
    transform: translateY(-2px) scale(1.002);
  }

  .project-content {
    padding: 1.25rem 1rem;
    gap: 0.5rem;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .project-description {
    font-size: 0.85rem;
  }
}
</style>