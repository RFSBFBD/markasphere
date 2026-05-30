<template>

  <section
    class="py-32 px-6 bg-[var(--color-surface-secondary)]"
  >

    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div
        class="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
        "
      >

        <Reveal>
          <div class="max-w-3xl">

            <span
              class="
                inline-flex
                glass
                rounded-full
                px-4
                py-2
                text-sm
                mb-6
              "
            >
              {{ t.home.workBadge }}
            </span>

            <h2
              class="
                text-5xl
                lg:text-6xl
                font-semibold
                tracking-tight
                leading-[1.05]
                text-charcoal
              "
            >
              {{ t.home.workTitle }}
            </h2>

          </div>
        </Reveal>

        <Reveal :delay="150">
          <RouterLink
            to="/work"
            class="
              inline-flex
              items-center
              gap-3
              text-charcoal
              font-medium
            "
          >
            {{ t.layout.exploreAll }}
            <span>→</span>
          </RouterLink>
        </Reveal>

      </div>

      <!-- Grid -->
      <div
        class="
          grid
          lg:grid-cols-2
          gap-8
          mt-20
        "
      >

        <ProjectCard
          v-for="project in translatedProjects"
          :key="project.slug"
          :project="project"
        />

      </div>

    </div>

  </section>

</template>

<script setup>
import { computed } from "vue"
import { projects } from "../../data/projects"
import ProjectCard from "../cards/ProjectCard.vue"
import { useLanguage } from "../../composables/useLanguage"
import Reveal from "../animations/Reveal.vue"

const { t } = useLanguage()

const translatedProjects = computed(() => {
  return projects.map(project => {
    const translation = t.value.projects[project.slug]
    if (translation) {
      return {
        ...project,
        title: translation.title,
        category: translation.category,
        description: translation.description
      }
    }
    return project
  })
})
</script>