<template>
  <Reveal>
    <RouterLink
      :to="`/work/${project.slug}`"
      class="group block"
      data-cursor="View"
    >
      <div
        class="
          glass
          rounded-[32px]
          overflow-hidden
          transition-all
          duration-700
          hover:-translate-y-2
          hover:shadow-[0_20px_60px_rgba(17,24,39,0.12)]
        "
      >
        <!-- Image -->
        <div
          class="
            relative
            overflow-hidden
            aspect-[4/3]
          "
        >
          <img
            :src="project.cover"
            :alt="project.title"
            class="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
          />

          <!-- Overlay -->
          <div
            class="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              via-black/5
              to-transparent
            "
          />
        </div>

        <!-- Content -->
        <div class="p-7">
          <p
            class="
              text-sm
              uppercase
              tracking-[0.2em]
              text-accent
            "
          >
            {{ project.category }}
          </p>

          <h3
            class="
              mt-4
              text-2xl
              font-semibold
              tracking-tight
              text-charcoal
            "
          >
            {{ project.title }}
          </h3>

          <p
            class="
              mt-4
              text-charcoal/70
              leading-relaxed
            "
          >
            {{ project.description }}
          </p>

          <div
            class="
              mt-8
              flex
              items-center
              gap-3
              text-charcoal
              font-medium
            "
          >
            View Case Study
            <span
              class="
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </div>
        </div>
      </div>
    </RouterLink>
  </Reveal>
</template>

<script setup>
import Reveal from "../animations/Reveal.vue"

defineProps({
  project: Object,
})
</script>