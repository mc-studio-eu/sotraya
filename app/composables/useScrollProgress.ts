import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * 0 while the element fills the viewport, 1 once it has scrolled a full
 * viewport height past the top. Drives the hero symbol → workflow morph.
 */
export function useScrollProgress() {
  const target = ref<HTMLElement | null>(null)
  const progress = ref(0)
  let frame = 0

  function measure() {
    frame = 0
    const el = target.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const span = Math.max(rect.height * 0.75, 1)
    progress.value = Math.min(Math.max(-rect.top / span, 0), 1)
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(measure)
  }

  onMounted(() => {
    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
  })

  onBeforeUnmount(() => {
    if (frame) cancelAnimationFrame(frame)
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
  })

  return { target, progress }
}
