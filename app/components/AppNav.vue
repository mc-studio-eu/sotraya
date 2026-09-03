<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const links = [
  { hash: '#services', label: 'Services' },
  { hash: '#realisations', label: 'Réalisations' },
  { hash: '#a-propos', label: 'À propos' }
]

const route = useRoute()
/** Only the landing page has a hero for the bar to float over. */
const isHome = computed(() => route.path === '/')

/**
 * The sections live on the landing page. From anywhere else (legal pages) the
 * same links have to walk back home first — plain anchors, so the browser keeps
 * doing the smooth-scrolling itself.
 */
const anchor = (hash: string) => (isHome.value ? hash : `/${hash}`)

/**
 * Over the hero the bar is transparent and reads light on the photo. Past the
 * fold — and on every page without a hero — it lifts onto cream.
 */
const scrolled = ref(false)
const lifted = computed(() => !isHome.value || scrolled.value)
const onScroll = () => (scrolled.value = window.scrollY > 24)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ 'is-lifted': lifted }">
    <div class="shell nav-grid py-5">
      <a
        :href="isHome ? '#top' : '/'"
        class="brand text-[1.25rem]"
        aria-label="Sotraya — retour en haut"
      >
        <SotrayaLogo />
      </a>

      <nav class="hidden items-center justify-center gap-9 md:flex" aria-label="Principale">
        <a v-for="l in links" :key="l.hash" :href="anchor(l.hash)" class="nav-link">{{
          l.label
        }}</a>
      </nav>

      <div class="flex items-center justify-end">
        <a :href="anchor('#parler')" class="nav-cta arrow-link">
          <span>Parler à Sotraya</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 50;
  color: var(--color-paper);
  transition: background-color 0.4s var(--ease-out-expo), border-color 0.4s var(--ease-out-expo),
    color 0.4s var(--ease-out-expo);
  border-bottom: 1px solid transparent;
}

/* logo | centred links | cta — the links stay centred on the viewport */
.nav-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

@media (min-width: 768px) {
  .nav-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    gap: 1.5rem;
  }
}

.nav.is-lifted {
  background-color: color-mix(in srgb, var(--color-cream) 88%, transparent);
  backdrop-filter: blur(14px);
  border-bottom-color: color-mix(in srgb, var(--color-ink) 8%, transparent);
  color: var(--color-ink);
}

.brand {
  justify-self: start;
}

.nav-link {
  font-size: 0.9375rem;
  color: color-mix(in srgb, currentcolor 78%, transparent);
  transition: color 0.25s ease;
}
.nav-link:hover {
  color: currentcolor;
}

.nav-cta {
  font-size: 0.9375rem;
  background-color: var(--color-ink);
  color: var(--color-cream);
  padding: 0.6rem 1.1rem;
  border-radius: 6px;
  transition: background-color 0.3s var(--ease-out-expo);
}
.nav-cta:hover {
  background-color: var(--color-sage-deep);
}
</style>
