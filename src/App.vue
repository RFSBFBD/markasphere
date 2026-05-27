<template>

  <RouterView />

</template>

<script setup>

import { onMounted } from "vue"

import { useLenis } from "./composables/useLenis"

onMounted(() => {

  useLenis()

})

</script>