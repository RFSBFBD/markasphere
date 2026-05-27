<template>

  <section
    class="py-32 px-6 bg-[#EEF1F5]"
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
            Selected Work
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
            Strategic digital experiences
            designed to shape perception.
          </h2>

        </div>

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
          Explore All Work
          <span>→</span>
        </RouterLink>

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
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />

      </div>

    </div>

  </section>

</template>

<script setup>

import { projects }
from "../../data/projects"

import ProjectCard
from "../cards/ProjectCard.vue"

</script>