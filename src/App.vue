<template>

  <MainLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <div :key="route.fullPath" class="page-wrapper">
          <template v-if="route.meta && route.meta.keepAlive">
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </template>
          <template v-else>
            <component :is="Component" />
          </template>
        </div>
      </Transition>
    </RouterView>
  </MainLayout>

</template>

<script setup>

import { onMounted } from "vue"
import { useHead } from "@unhead/vue"
import { useLenis } from "./composables/useLenis"
import { useLanguage } from "./composables/useLanguage"
import { useTheme } from "./composables/useTheme"
import MainLayout from "./layouts/MainLayout.vue"
import { SITE_URL } from "./config/constants"

const { initLanguage, currentLanguage } = useLanguage()
const { initTheme } = useTheme()

initLanguage()
initTheme()

useHead(() => ({
  htmlAttrs: {
    lang: currentLanguage.value
  },
  link: [
    { rel: "alternate", hreflang: "en", href: SITE_URL },
    { rel: "alternate", hreflang: "ar", href: SITE_URL },
    { rel: "canonical", href: SITE_URL }
  ],
  meta: [
    { property: "og:site_name", content: "MarkaSphere" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${SITE_URL}/favicon.svg` },
    { property: "og:image:width", content: "512" },
    { property: "og:image:height", content: "512" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: `${SITE_URL}/favicon.svg` }
  ]
}))

onMounted(() => {
  useLenis()
})

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
}

.page-leave-to {
  opacity: 0;
  transform: translate3d(0, -16px, 0);
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: none;
  }
}
</style>
