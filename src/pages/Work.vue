 <template>

  <MainLayout>

    <section
      class="pt-40 pb-32 px-6"
    >

      <div class="max-w-7xl mx-auto">

        <!-- Hero -->
        <div class="max-w-3xl">

          <span
            class="
              glass
              inline-flex
              rounded-full
              px-4
              py-2
              text-sm
              mb-6
            "
          >
            Portfolio Experience
          </span>

          <h1
            class="
              text-5xl
              lg:text-7xl
              font-semibold
              tracking-tight
              leading-[1.02]
            "
          >
            Selected strategic
            digital experiences.
          </h1>

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

  </MainLayout>

</template>

<script setup>

import MainLayout
from "../layouts/MainLayout.vue"

import { projects }
from "../data/projects"

import ProjectCard
from "../components/cards/ProjectCard.vue"

</script>