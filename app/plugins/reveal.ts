type RevealVariant = 'up' | 'fade' | 'left' | 'right' | 'scale' | 'clip' | 'line'

type RevealOptions = {
  delay?: number
  duration?: number
  distance?: string
  variant?: RevealVariant
}

const variants: RevealVariant[] = ['up', 'fade', 'left', 'right', 'scale', 'clip', 'line']

/**
 * Reveals content once it enters the viewport.
 * Keeps the numeric shorthand and also accepts variant, delay and duration options.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('reveal', {})
    return
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  const clipObservers = new WeakMap<HTMLElement, IntersectionObserver>()

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      }
    },
    observerOptions
  )

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (reduced) return

      const value: RevealOptions =
        typeof binding.value === 'number'
          ? { delay: binding.value }
          : typeof binding.value === 'string'
            ? { variant: binding.value as RevealVariant }
            : (binding.value ?? {})

      const modifierVariant = variants.find((variant) => binding.modifiers[variant])
      const variant = modifierVariant ?? value.variant ?? 'up'

      el.classList.add('reveal', `reveal--${variant}`)
      if (typeof value.delay === 'number') el.style.setProperty('--reveal-delay', `${value.delay}ms`)
      if (typeof value.duration === 'number') el.style.setProperty('--reveal-duration', `${value.duration}ms`)
      if (value.distance) el.style.setProperty('--reveal-distance', value.distance)

      // A fully clipped element has no intersection area, so clip reveals watch
      // their visible container instead of waiting on the hidden element itself.
      if (variant === 'clip' && el.parentElement) {
        const clipObserver = new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return
          el.classList.add('is-in')
          clipObserver.disconnect()
        }, observerOptions)
        clipObservers.set(el, clipObserver)
        requestAnimationFrame(() => clipObserver.observe(el.parentElement!))
        return
      }

      // Let the hidden state paint first, including for content already in view.
      requestAnimationFrame(() => observer.observe(el))
    },
    unmounted(el: HTMLElement) {
      observer.unobserve(el)
      clipObservers.get(el)?.disconnect()
      clipObservers.delete(el)
    }
  })
})
