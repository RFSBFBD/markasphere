<template>
  <div v-if="project">

    <!-- HERO -->
    <section class="pt-40 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-3xl space-y-6">

          <span class="glass inline-flex rounded-full px-4 py-2 text-sm">
            {{ project.category }}
          </span>

          <h1 class="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-charcoal">
            {{ project.title }}
          </h1>

          <p class="text-xl leading-relaxed text-charcoal/70">
            {{ project.description }}
          </p>

          <div class="pt-4">
            <RouterLink
              to="/work"
              class="inline-flex items-center gap-3 text-accent font-medium hover:gap-4 transition-all duration-300"
            >
              <span>←</span>
              {{ t.layout.backToWork }}
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- COVER -->
    <section class="mt-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="glass rounded-[40px] overflow-hidden">
          <img
            :src="project.cover"
            :alt="project.title"
            loading="lazy"
            decoding="async"
            class="w-full h-auto block"
          />
        </div>
      </div>
    </section>

    <!-- METADATA -->
    <section class="py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border border-[var(--color-border)] rounded-[32px] p-8 md:p-12 bg-[var(--surface-secondary)]">
          <div v-if="project.client">
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]/50 mb-2">Client</p>
            <p class="text-base font-medium text-[var(--color-text)]">{{ project.client }}</p>
          </div>
          <div v-if="project.services">
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]/50 mb-2">Services</p>
            <p class="text-base font-medium text-[var(--color-text)]">{{ project.services.join(", ") }}</p>
          </div>
          <div v-if="project.year">
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]/50 mb-2">Year</p>
            <p class="text-base font-medium text-[var(--color-text)]">{{ project.year }}</p>
          </div>
          <div v-if="project.duration">
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]/50 mb-2">Duration</p>
            <p class="text-base font-medium text-[var(--color-text)]">{{ project.duration }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CHALLENGE -->
    <section v-if="project.challenge" class="pb-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="border-l-4 border-accent pl-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Challenge</p>
          <p class="text-xl md:text-2xl font-medium leading-relaxed text-[var(--color-text)]">
            {{ project.challenge }}
          </p>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="pb-24 px-6">
      <div class="max-w-5xl mx-auto flex flex-col gap-24">
        <Reveal
          v-for="(image, index) in project.gallery"
          :key="index"
        >
          <div class="glass rounded-[32px] overflow-hidden">
            <img
              :src="image"
              :alt="project.title"
              class="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>

    <!-- SOLUTION -->
    <section v-if="project.solution" class="pb-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="border-l-4 border-accent pl-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Solution</p>
          <p class="text-xl md:text-2xl font-medium leading-relaxed text-[var(--color-text)]">
            {{ project.solution }}
          </p>
        </div>
      </div>
    </section>

    <!-- RESULTS -->
    <section v-if="project.results" class="pb-24 px-6">
      <div class="max-w-4xl mx-auto">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-8">Results</p>
        <div class="space-y-6">
          <div
            v-for="(result, i) in project.results"
            :key="i"
            class="flex items-start gap-5"
          >
            <span class="inline-flex items-center justify-center size-8 rounded-full bg-accent/10 text-accent text-sm font-bold flex-shrink-0 mt-0.5">
              {{ i + 1 }}
            </span>
            <p class="text-lg md:text-xl leading-relaxed text-[var(--color-text)]">
              {{ result }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PREV / NEXT NAVIGATION -->
    <section class="pb-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center border-t border-[var(--color-border)] pt-10">
          <RouterLink
            v-if="prevProject"
            :to="`/work/${prevProject.slug}`"
            class="group flex items-center gap-3 text-[var(--color-text)]/60 hover:text-accent transition-colors duration-300"
          >
            <span class="text-lg group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <div class="text-start">
              <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text)]/40">Previous</p>
              <p class="text-sm font-medium">{{ prevProject.title }}</p>
            </div>
          </RouterLink>
          <div v-else />

          <RouterLink
            v-if="nextProject"
            :to="`/work/${nextProject.slug}`"
            class="group flex items-center gap-3 text-[var(--color-text)]/60 hover:text-accent transition-colors duration-300"
          >
            <div class="text-end">
              <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text)]/40">Next</p>
              <p class="text-sm font-medium">{{ nextProject.title }}</p>
            </div>
            <span class="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
          </RouterLink>
          <div v-else />
        </div>
      </div>
    </section>

    <!-- RELATED PROJECTS -->
    <section v-if="relatedProjects.length > 0" class="pb-32 px-6">
      <div class="max-w-6xl mx-auto">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">Related Work</p>
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
          More projects like this
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RouterLink
            v-for="related in relatedProjects"
            :key="related.slug"
            :to="`/work/${related.slug}`"
            class="group block"
          >
            <div class="glass rounded-[24px] overflow-hidden mb-4">
              <img
                :src="related.cover"
                :alt="related.title"
                loading="lazy"
                decoding="async"
                class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <span class="text-xs uppercase tracking-[0.15em] text-[var(--color-text)]/50">{{ related.category }}</span>
            <h3 class="text-lg font-semibold text-[var(--color-text)] group-hover:text-accent transition-colors duration-300 mt-1">
              {{ related.title }}
            </h3>
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useHead } from "@unhead/vue"
import { SITE_URL } from "../config/constants"
import { projects } from "../content/data/projects"
import Reveal from "../components/animations/Reveal.vue"
import { useLanguage } from "../composables/useLanguage"

const route = useRoute()
const { t } = useLanguage()

const project = computed(() => {
  const item = projects.find(p => p.slug === route.params.slug)
  if (!item) return null

  const translation = t.value.projects[item.slug]
  if (translation) {
    return {
      ...item,
      title: translation.title,
      category: translation.category,
      description: translation.description,
      challenge: translation.challenge || item.challenge,
      solution: translation.solution || item.solution,
      results: translation.results || item.results
    }
  }
  return item
})

const currentIndex = computed(() => {
  if (!project.value) return -1
  return projects.findIndex(p => p.slug === project.value.slug)
})

const prevProject = computed(() => {
  if (currentIndex.value <= 0) return null
  return projects[currentIndex.value - 1]
})

const nextProject = computed(() => {
  if (currentIndex.value < 0 || currentIndex.value >= projects.length - 1) return null
  return projects[currentIndex.value + 1]
})

const relatedProjects = computed(() => {
  if (!project.value) return []
  return projects.filter(p => p.slug !== project.value.slug)
})

useHead(() => ({
  title: project.value ? `MarkaSphere | ${project.value.title}` : "MarkaSphere | Project",
  meta: [
    { name: "description", content: project.value?.description || "View project details from MarkaSphere." },
    { property: "og:title", content: project.value ? `MarkaSphere | ${project.value.title}` : "MarkaSphere | Project" },
    { property: "og:description", content: project.value?.description || "View project details from MarkaSphere." },
    { property: "og:url", content: project.value ? `${SITE_URL}/work/${project.value.slug}` : SITE_URL + "/work" },
    { property: "og:image", content: project.value?.cover || `${SITE_URL}/favicon.svg` },
    { name: "twitter:title", content: project.value ? `MarkaSphere | ${project.value.title}` : "MarkaSphere | Project" },
    { name: "twitter:description", content: project.value?.description || "View project details from MarkaSphere." },
    { name: "twitter:image", content: project.value?.cover || `${SITE_URL}/favicon.svg` }
  ],
  link: [
    { rel: "canonical", href: project.value ? `${SITE_URL}/work/${project.value.slug}` : SITE_URL + "/work" }
  ]
}))
</script>