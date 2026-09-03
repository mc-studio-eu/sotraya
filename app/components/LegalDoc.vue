<script setup lang="ts">
import { LEGAL } from '~/utils/legal'

defineProps<{
  eyebrow: string
  title: string
  lead?: string
}>()

const other = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/conditions-generales-de-vente', label: 'Conditions générales de vente' }
]
</script>

<template>
  <article class="legal">
    <div class="shell pt-32 pb-24 md:pt-44 md:pb-32">
      <header class="max-w-[62ch] border-b border-ink/12 pb-12">
        <p class="t-mono text-mute-dark">{{ eyebrow }}</p>
        <h1 class="t-section mt-5">{{ title }}</h1>
        <p v-if="lead" class="t-lead mt-6 max-w-[54ch] text-mute">{{ lead }}</p>
        <p class="t-mono mt-9 text-mute-dark">
          Dernière mise à jour · {{ LEGAL.updatedAt }}
        </p>
      </header>

      <div class="legal-body mt-14 max-w-[70ch] md:mt-20">
        <slot />
      </div>

      <nav
        class="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/12 pt-8 text-sm"
        aria-label="Documents juridiques"
      >
        <NuxtLink to="/" class="legal-nav arrow-link">
          <span class="arrow" aria-hidden="true">↖</span>
          <span>Retour à l'accueil</span>
        </NuxtLink>
        <NuxtLink
          v-for="l in other"
          :key="l.to"
          :to="l.to"
          class="legal-nav"
          active-class="is-current"
          >{{ l.label }}</NuxtLink
        >
      </nav>
    </div>
  </article>
</template>

<style scoped>
.legal {
  background-color: var(--color-paper);
}

.legal-nav {
  color: var(--color-mute);
  transition: color 0.25s ease;
}
.legal-nav:hover {
  color: var(--color-ink);
}
.legal-nav.is-current {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
