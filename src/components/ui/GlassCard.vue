<template>

  <div
    class="
      glass
      rounded-[28px]
      transition-all
      duration-500
      hover:-translate-y-1
      hover:shadow-[0_16px_50px_rgba(17,24,39,0.10)]
      group
      relative
      overflow-hidden
    "
  >

    <!-- Glow Layer -->
    <div
      class="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        pointer-events-none
      "
    >
      <div
        class="
          absolute
          inset-0
          bg-gradient-to-br
          from-accent/10
          to-transparent
        "
      />
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <slot />
    </div>

  </div>

</template>