<template>
  <section class="projects-section">
    <div class="section-container">
      
      <!-- Centered Header -->
      <div class="section-header">
        
        <!-- Heading -->
        <Reveal :delay="100" :duration="1000">
          <h2 class="section-title">
            {{ t.home.projectsTitle }}
          </h2>
        </Reveal>

        <!-- Body Text -->
        <Reveal :delay="200" :duration="1000">
          <p class="section-body">
            {{ t.home.projectsDesc }}
          </p>
        </Reveal>

        <!-- CTA Button -->
        <Reveal :delay="300" :duration="1000">
          <router-link to="/work" class="cta-button">
            {{ t.home.projectsCtaLabel }}
          </router-link>
        </Reveal>

      </div>

      <!-- Carousel Container -->
      <div class="carousel-wrapper">
        
        <!-- Carousel Viewport -->
        <div class="carousel-viewport" ref="carouselRef">
          <div class="carousel-container">
            
            <ProjectCard
              v-for="project in projects"
              :key="project.slug"
              class="carousel-item"
              :project="project"
            />

          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          class="carousel-arrow carousel-arrow-prev"
          @click="scrollPrev"
          @keydown.enter="scrollPrev"
          @keydown.space="scrollPrev"
          :aria-label="t.layout.prevProject || 'Previous project'"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12 4L6 10L12 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>

        <button
          class="carousel-arrow carousel-arrow-next"
          @click="scrollNext"
          @keydown.enter="scrollNext"
          @keydown.space="scrollNext"
          :aria-label="t.layout.nextProject || 'Next project'"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 4L14 10L8 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import EmblaCarousel from "embla-carousel"
import Reveal from "../animations/Reveal.vue"
import ProjectCard from "../cards/ProjectCard.vue"
import { useLanguage } from "../../composables/useLanguage"
import { projects } from "../../data/projects"

const { t } = useLanguage()

// Carousel refs and state
const carouselRef = ref(null)
let emblaApi = null
let autoPlayTimer = null

// Initialize carousel
onMounted(() => {
  if (carouselRef.value) {
    try {
      emblaApi = EmblaCarousel(carouselRef.value, {
        align: "center",
        loop: true,
        slidesToScroll: 1,
        speed: 10,
        dragFree: false,
      })

      // Set up autoplay
      startAutoPlay()

      // Pause on hover
      carouselRef.value.addEventListener("mouseenter", stopAutoPlay)
      carouselRef.value.addEventListener("mouseleave", startAutoPlay)
    } catch (err) {
      console.error("Carousel initialization failed:", err)
    }
  }
})

// Cleanup
onUnmounted(() => {
  if (carouselRef.value) {
    carouselRef.value.removeEventListener("mouseenter", stopAutoPlay)
    carouselRef.value.removeEventListener("mouseleave", startAutoPlay)
  }
  stopAutoPlay()
  if (emblaApi) emblaApi.destroy()
})

const scrollNext = () => {
  if (emblaApi) {
    try {
      emblaApi.scrollNext()
    } catch (err) {
      console.error("Carousel scroll error:", err)
    }
  }
  resetAutoPlay()
}

const scrollPrev = () => {
  if (emblaApi) {
    try {
      emblaApi.scrollPrev()
    } catch (err) {
      console.error("Carousel scroll error:", err)
    }
  }
  resetAutoPlay()
}

// AutoPlay functions
const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayTimer = setInterval(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}
</script>


<style scoped>
.projects-section {
  width: 100%;
  padding: 8rem 1.5rem;
  background: var(--color-bg);
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* Header Section */
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  gap: 2rem;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-text);
  margin: 0;
}

.section-body {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: var(--color-text);
  opacity: 0.8;
  margin: 0;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease;
  border-radius: 2px;
  text-transform: uppercase;
}

.cta-button:hover {
  background: var(--color-text);
  color: var(--color-bg);
  border-color: var(--color-text);
}

/* Carousel */
.carousel-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-viewport {
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.carousel-container {
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  will-change: transform;
}

.carousel-item {
  flex: 0 0 calc((100% - 4rem) / 3);
  min-width: 0;
  will-change: opacity;
}

/* Navigation Arrows */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: 1px solid rgba(var(--color-text-rgb, 0, 0, 0), 0.2);
  background: rgba(var(--color-text-rgb, 0, 0, 0), 0.05);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  cursor: pointer;
  transition: all 300ms ease;
  z-index: 10;
  will-change: transform, box-shadow;
}

.carousel-arrow:hover {
  background: rgba(var(--color-text-rgb, 0, 0, 0), 0.15);
  border-color: rgba(var(--color-text-rgb, 0, 0, 0), 0.4);
  box-shadow: 0 0 20px rgba(var(--color-text-rgb, 0, 0, 0), 0.1);
}

.carousel-arrow:focus {
  outline: 2px solid var(--color-text);
  outline-offset: 2px;
  box-shadow: 0 0 20px rgba(var(--color-text-rgb, 0, 0, 0), 0.15);
}

.carousel-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-arrow-prev {
  left: -3rem;
}

.carousel-arrow-next {
  right: -3rem;
}

.carousel-arrow svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .carousel-item {
    flex: 0 0 calc((100% - 2rem) / 2);
  }

  .carousel-container {
    gap: 1.5rem;
  }

  .carousel-arrow-prev {
    left: -2rem;
  }

  .carousel-arrow-next {
    right: -2rem;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 6rem 1.5rem;
  }

  .section-container {
    gap: 4rem;
  }

  .section-header {
    max-width: 100%;
    gap: 1.5rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3rem);
  }

  .section-body {
    font-size: clamp(0.95rem, 2vw, 1.1rem);
  }

  .carousel-wrapper {
    padding-bottom: 4rem;
  }

  .carousel-item {
    flex: 0 0 100%;
  }

  .carousel-container {
    gap: 1rem;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
    position: static;
    margin: 1.5rem 0.5rem 0;
    display: inline-block;
  }

  .carousel-arrow-prev {
    left: auto;
  }

  .carousel-arrow-next {
    right: auto;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 4rem 1rem;
  }

  .cta-button {
    width: 100%;
  }

  .carousel-arrow {
    width: 36px;
    height: 36px;
    position: static;
    margin: 1rem 0.5rem 0;
    display: inline-block;
  }

  .carousel-arrow-prev {
    left: auto;
  }

  .carousel-arrow-next {
    right: auto;
  }
}
</style>
