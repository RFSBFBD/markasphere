import Lenis from "lenis"
import { ref } from "vue"

export const lenisInstance = ref(null)

export function useLenis() {
  if (!lenisInstance.value) {
    lenisInstance.value = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      if (lenisInstance.value) {
        lenisInstance.value.raf(time)
      }
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  return lenisInstance.value
}