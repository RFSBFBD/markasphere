<template>

  <section
    class="relative py-32 px-6 bg-ivory overflow-hidden"
  >

    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div
        class="max-w-3xl"
      >

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
          Strategic Services
        </span>

        <h2
          class="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
            tracking-tight
            leading-[1.08]
            text-charcoal
          "
        >
          Strategic systems
          designed to shape
          premium perception.
        </h2>

        <p
          class="
            mt-8
            text-lg
            leading-relaxed
            text-charcoal/70
            max-w-2xl
          "
        >
          Every interaction, visual layer,
          and digital surface is crafted
          to elevate authority and executive positioning.
        </p>

      </div>

      <!-- Services Grid -->
      <div
        class="
          grid
          lg:grid-cols-3
          gap-6
          mt-20
        "
      >

        <!-- CARD -->
        <Reveal
          v-for="(service, index) in services"
          :key="service.title"
          :delay="index * 150"
        >
          <GlassCard class="h-full">

            <div class="p-8">

              <!-- Icon -->
              <div
                class="
                  size-14
                  rounded-2xl
                  glass
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-8
                "
              >
                {{ service.icon }}
              </div>

              <!-- Title -->
              <h3
                class="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-charcoal
                "
              >
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p
                class="
                  mt-5
                  text-charcoal/70
                  leading-relaxed
                "
              >
                {{ service.description }}
              </p>

              <!-- Link -->
              <button
                class="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-accent
                  font-medium
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                Explore Service
                <span>→</span>
              </button>

            </div>

          </GlassCard>
        </Reveal>

      </div>

    </div>

  </section>

</template>

<script setup>
  import Reveal from "../animations/Reveal.vue"

import GlassCard from "../ui/GlassCard.vue"

const services = [

  {
    icon: "✦",

    title: "Brand Positioning",

    description:
      "Strategic identity systems designed to create authority, trust, and executive-level brand perception."
  },

  {
    icon: "◉",

    title: "Executive Web Experience",

    description:
      "Premium digital experiences engineered to communicate clarity, sophistication, and strategic value."
  },

  {
    icon: "⬢",

    title: "Visual Presence Systems",

    description:
      "Unified visual ecosystems across presentations, social media, interfaces, and brand communication."
  },

]

</script>