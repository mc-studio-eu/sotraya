/**
 * v-reveal — fades content up as it enters the viewport. Optional value = delay in ms.
 * Registered on the server too (as a no-op) so SSR can resolve the directive.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('reveal', {})
    return
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (reduced) return
      el.classList.add('reveal')
      if (typeof binding.value === 'number') el.style.transitionDelay = `${binding.value}ms`
      observer.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer.unobserve(el)
    }
  })
})
