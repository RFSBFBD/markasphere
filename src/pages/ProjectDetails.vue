<template>
  <MainLayout v-if="project">

    <!-- HERO -->
    <section class="pt-40 px-6">

      <div class="max-w-6xl mx-auto">

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
            {{ project.category }}
          </span>

          <h1
            class="
              text-5xl
              lg:text-7xl
              font-semibold
              tracking-tight
              leading-[1.02]
              text-charcoal
            "
          >
            {{ project.title }}
          </h1>

          <p
            class="
              mt-8
              text-xl
              leading-relaxed
              text-charcoal/70
            "
          >
            {{ project.description }}
          </p>

        </div>

      </div>

    </section>

    <!-- COVER -->
    <section class="mt-20 px-6">

      <div class="max-w-7xl mx-auto">

        <div
          class="
            glass
            rounded-[40px]
            overflow-hidden
          "
        >

          <img
            :src="project.cover"
            :alt="project.title"
            class="
              w-full
              h-auto
              block
            "
          />

        </div>

      </div>

    </section>

    <!-- GALLERY -->
    <section class="py-32 px-6">

      <div
        class="
          max-w-5xl
          mx-auto
          flex
          flex-col
          gap-24
        "
      >

        <Reveal
          v-for="(image, index) in project.gallery"
          :key="index"
        >
          <div
            class="
              glass
              rounded-[32px]
              overflow-hidden
            "
          >

            <img
              :src="image"
              :alt="project.title"
              class="
                w-full
                h-auto
                block
              "
              loading="lazy"
            />

          </div>
        </Reveal>

      </div>

    </section>

  </MainLayout>
</template>

<script setup>

import { computed } from "vue"

import { useRoute } from "vue-router"

import MainLayout from "../layouts/MainLayout.vue"

import { projects } from "../data/projects"

import Reveal from "../components/animations/Reveal.vue"

const route = useRoute()

const project = computed(() => {

  return projects.find(
    item => item.slug === route.params.slug
  )

})

</script>