<script setup lang="ts">
import { CONTACT } from '~/utils/contact'

const columns = [
  {
    title: 'Suivre',
    links: [{ label: 'Instagram', href: CONTACT.instagram }]
  },
  {
    title: 'Écrire',
    links: [{ label: 'WhatsApp', href: CONTACT.whatsapp }]
  }
]

const legal = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/conditions-generales-de-vente', label: 'CGV' }
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="shell">
      <div class="grid gap-12 border-t border-cream/12 pt-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <p class="tagline">Systems for better business.</p>

        <div class="grid gap-10 sm:grid-cols-2">
          <div v-for="c in columns" :key="c.title">
            <p class="t-mono text-mute-dark">{{ c.title }}</p>
            <ul class="mt-4 space-y-2">
              <li v-for="l in c.links" :key="l.label">
                <a
                  v-if="l.href"
                  :href="l.href"
                  class="foot-link"
                  :target="l.href.startsWith('http') ? '_blank' : undefined"
                  :rel="l.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                  >{{ l.label }}</a
                >
                <span v-else class="text-cream/70">{{ l.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SotrayaLogoBig />

      <div
        class="flex flex-wrap items-center justify-between gap-4 border-t border-cream/12 py-8 text-sm text-mute-dark"
      >
        <p>© {{ year }} Sotraya</p>

        <nav class="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Informations légales">
          <NuxtLink v-for="l in legal" :key="l.to" :to="l.to" class="foot-link">{{
            l.label
          }}</NuxtLink>
        </nav>

        <p class="t-mono">Précis · Calme · Ingénieux · Premium</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-ink);
  color: var(--color-cream);
}

.tagline {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  max-width: 16ch;
}

.foot-link {
  color: color-mix(in srgb, var(--color-cream) 70%, transparent);
  transition: color 0.25s ease;
}
.foot-link:hover {
  color: var(--color-sage);
}
</style>
