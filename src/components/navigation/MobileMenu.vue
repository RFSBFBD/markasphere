<script setup>
import { watch } from "vue"
import { useNavItems } from "../../composables/useNavItems"
import { lenisInstance } from "../../composables/useLenis"

const items = useNavItems()

const props = defineProps({ isOpen: Boolean })
const emit = defineEmits(["close"])

const close = () => {
  emit("close")
  if (lenisInstance.value) lenisInstance.value.start()
  document.body.style.overflow = ""
}

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      if (lenisInstance.value) lenisInstance.value.stop()
      document.body.style.overflow = "hidden"
    } else {
      if (lenisInstance.value) lenisInstance.value.start()
      document.body.style.overflow = ""
    }
  }
)
</script>

<template>
  <Transition name="mobile-menu">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[40] flex flex-col justify-center px-12 md:hidden backdrop-blur-2xl bg-[var(--glass-bg)]/95 mobile-menu-active"
      @click.self="close"
    >
      <nav class="flex flex-col gap-8 text-4xl font-semibold">
        <router-link
          v-for="(item, index) in items"
          :key="item.path"
          :to="item.path"
          @click="close"
          class="mobile-menu-item text-[var(--color-text)]/50 hover:text-[var(--color-text)] transition-colors duration-300 flex items-center gap-4"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
