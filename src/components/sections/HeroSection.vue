<script setup>
import Reveal from "../animations/Reveal.vue"
import Magnetic from "../animations/Magnetic.vue"
</script>

<template>

  <section
    class="relative min-h-screen overflow-hidden flex items-center px-6 pt-32"
  >

    <!-- Background Gradient -->
    <div class="hero-gradient absolute inset-0" />

    <!-- Glow Orb 1 -->
    <div class="hero-orb orb-1" />

    <!-- Glow Orb 2 -->
    <div class="hero-orb orb-2" />

    <!-- Noise Layer -->
    <div class="noise-layer absolute inset-0 opacity-[0.03]" />

    <div
      class="relative z-10 max-w-7xl mx-auto w-full"
    >

      <Reveal>
        <div
          class="grid lg:grid-cols-2 gap-20 items-center"
        >

        <!-- LEFT CONTENT -->
        <div>

          <!-- Badge -->
          <div
            class="inline-flex glass rounded-full px-5 py-2 text-sm text-white/80 mb-8"
          >
            Strategic Executive Brand Presence
          </div>

          <!-- Heading -->
          <h1
            class="text-white text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]"
          >
            Some brands are understood
            before they speak.
          </h1>

          <!-- Description -->
          <p
            class="mt-8 text-lg leading-relaxed text-white/70 max-w-xl"
          >
            MarkaSphere builds strategic digital presence
            designed to shape authority, perception,
            and premium positioning across modern platforms.
          </p>

          <!-- CTA -->
          <div
            class="flex flex-wrap items-center gap-4 mt-10"
          >

            <Magnetic>
              <button
                class="bg-white text-executive px-7 py-4 rounded-[14px] font-medium luxury-btn transition-all duration-500"
              >
                Book Consultation
              </button>
            </Magnetic>

            <Magnetic>
              <button
                class="glass text-white px-7 py-4 rounded-[14px] luxury-btn transition-all duration-500"
              >
                Explore Work
              </button>
            </Magnetic>

          </div>

        </div>

        <!-- RIGHT SIDE -->
        <div
          class="relative hidden lg:flex justify-center"
        >

          <!-- Main Glass Card -->
          <div
            class="glass hero-card p-8 w-[480px]"
          >

            <div
              class="flex items-center justify-between mb-8"
            >

              <div>
                <p class="text-white/60 text-sm">
                  Strategic Presence
                </p>

                <h3
                  class="text-white text-2xl font-semibold mt-2"
                >
                  MarkaSphere
                </h3>
              </div>

              <div
                class="size-14 rounded-2xl bg-white/10 flex items-center justify-center text-white text-xl"
              >
                ✦
              </div>

            </div>

            <!-- Fake Analytics -->
            <div class="space-y-5">

              <div
                class="glass rounded-2xl p-5"
              >
                <div
                  class="flex items-center justify-between"
                >

                  <div>
                    <p class="text-white/50 text-sm">
                      Brand Authority
                    </p>

                    <h4
                      class="text-white text-3xl font-semibold mt-2"
                    >
                      +87%
                    </h4>
                  </div>

                  <div
                    class="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white/70"
                  >
                    ↑
                  </div>

                </div>
              </div>

              <div
                class="grid grid-cols-2 gap-5"
              >

                <div
                  class="glass rounded-2xl p-5"
                >
                  <p class="text-white/50 text-sm">
                    Engagement
                  </p>

                  <h4
                    class="text-white text-2xl font-semibold mt-3"
                  >
                    4.8x
                  </h4>
                </div>

                <div
                  class="glass rounded-2xl p-5"
                >
                  <p class="text-white/50 text-sm">
                    Positioning
                  </p>

                  <h4
                    class="text-white text-2xl font-semibold mt-3"
                  >
                    Premium
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      </Reveal>

    </div>

  </section>

</template>

<style scoped>

.hero-gradient {

  background:
    linear-gradient(
      135deg,
      #111827 0%,
      #1A2433 45%,
      #2A3441 100%
    );
}

.hero-orb {

  position: absolute;

  border-radius: 999px;

  filter: blur(120px);

  opacity: 0.18;
}

.orb-1 {

  width: 420px;
  height: 420px;

  background: #5B6CFF;

  top: -100px;
  left: -100px;
}

.orb-2 {

  width: 320px;
  height: 320px;

  background: #7483FF;

  bottom: -80px;
  right: -80px;
}

.hero-card {

  border-radius: 32px;
}

.noise-layer {

  background-image:
    radial-gradient(
      rgba(255,255,255,0.4) 1px,
      transparent 1px
    );

  background-size: 24px 24px;
}

</style>