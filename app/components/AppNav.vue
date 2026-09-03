<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#a-propos', label: 'À propos' }
]

const lifted = ref(false)
const onScroll = () => (lifted.value = window.scrollY > 24)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ 'is-lifted': lifted }">
    <div class="shell flex items-center justify-between gap-6 py-5">
      <a href="#top" class="text-[0.95rem]">
        <SotrayaLogo />
      </a>

      <nav class="hidden items-center gap-9 md:flex" aria-label="Principale">
        <a v-for="l in links" :key="l.href" :href="l.href" class="nav-link">{{ l.label }}</a>
      </nav>

      <a href="#parler" class="nav-cta arrow-link">
        <span>Parler à Sotraya</span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 50;
  transition: background-color 0.4s var(--ease-out-expo), border-color 0.4s var(--ease-out-expo);
  border-bottom: 1px solid transparent;
}

.nav.is-lifted {
  background-color: color-mix(in srgb, var(--color-cream) 88%, transparent);
  backdrop-filter: blur(14px);
  border-bottom-color: color-mix(in srgb, var(--color-ink) 8%, transparent);
}

.nav-link {
  font-size: 0.9375rem;
  color: var(--color-mute);
  transition: color 0.25s ease;
}
.nav-link:hover {
  color: var(--color-ink);
}

.nav-cta {
  font-size: 0.9375rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-ink) 30%, transparent);
  padding-bottom: 2px;
  transition: border-color 0.3s ease;
}
.nav-cta:hover {
  border-bottom-color: var(--color-ink);
}
</style>
