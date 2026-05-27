<template>

  <div class="min-h-screen">

    <ExecutiveNavbar />

    <main>
      <slot />
    </main>

    <CustomCursor />

  </div>

</template>

<script setup>
import ExecutiveNavbar from "../components/navigation/ExecutiveNavbar.vue"
import CustomCursor from "../components/ui/CustomCursor.vue"
</script>