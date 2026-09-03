import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Fires once when the element reaches the viewport — used to start section animations. */
export function useInView(options: { threshold?: number; rootMargin?: string; once?: boolean } = {}) {
  const { threshold = 0.3, rootMargin = '0px 0px -12% 0px', once = true } = options
  const target = ref<HTMLElement | null>(null)
  const isIn = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value || typeof IntersectionObserver === 'undefined') {
      isIn.value = true
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isIn.value = true
            if (once) observer?.disconnect()
          } else if (!once) {
            isIn.value = false
          }
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, isIn }
}
