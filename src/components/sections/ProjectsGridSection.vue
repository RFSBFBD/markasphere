<script setup>
import { ref, computed } from "vue"
import ProjectCard from "../cards/ProjectCard.vue"
import { useLanguage } from "../../composables/useLanguage"
import { projects } from "../../data/projects"

const { t } = useLanguage()
const activeFilter = ref(null)
const activeFilterValue = activeFilter
const projectList = projects

const categories = computed(() => t.value?.projects?.filterCategories ?? [])
const allLabel = computed(() => t.value?.projects?.filterAllLabel ?? "All")

const filteredProjects = computed(() => {
  if (!activeFilterValue.value) return projectList
  return projectList.filter((project) => project.category === activeFilterValue.value)
})

const selectFilter = (categoryKey) => {
  activeFilter.value = activeFilter.value === categoryKey ? null : categoryKey
}

const resetFilter = () => {
  activeFilter.value = null
}
</script>

<template>
  <section
    class="relative w-full py-20 ps-6 pe-6 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
  >
    <div class="max-w-6xl mx-auto">

      <div class="mb-16 flex flex-wrap gap-3 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
        <div>
          <button
            type="button"
            @click="resetFilter"
            :class="[
              'inline-flex whitespace-nowrap items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 border flex-shrink-0',
              !activeFilterValue
                ? 'border-[var(--color-text)] bg-[var(--color-text)] text-[var(--color-bg)]'
                : 'border-[var(--color-border)] bg-transparent text-[var(--color-text)]/60 hover:border-[var(--color-text)] hover:text-[var(--color-text)]'
            ]"
            aria-label="Show all projects"
          >
            {{ allLabel }}
          </button>
        </div>

        <template v-for="(category, index) in categories" :key="category?.key ?? index">
          <button
            type="button"
            @click="selectFilter(category?.key)"
            :class="[
              'inline-flex whitespace-nowrap items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 border flex-shrink-0',
              activeFilterValue === category?.key
                ? 'border-[var(--color-text)] bg-[var(--color-text)] text-[var(--color-bg)]'
                : 'border-[var(--color-border)] bg-transparent text-[var(--color-text)]/60 hover:border-[var(--color-text)] hover:text-[var(--color-text)]'
            ]"
            :aria-pressed="activeFilterValue === category?.key"
          >
            {{ category?.label ?? '' }}
          </button>
        </template>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.slug"
          :project="project"
        />
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <p class="text-base md:text-lg text-[var(--color-text)]/60">
          {{ t.value?.projects?.noProjectsMessage ?? 'No projects found in this category.' }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  scroll-behavior: smooth;
}
</style>

