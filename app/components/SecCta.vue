<script setup lang="ts">
import { CONTACT } from '~/utils/contact'
</script>

<template>
  <section id="parler" class="cta-band">
    <div class="shell py-28 md:py-40">
      <h2 v-reveal="{ variant: 'clip', duration: 1100 }" class="t-statement max-w-[15ch]">
        Quel travail ne devrait plus être manuel chez vous ?
      </h2>

      <p v-reveal="100" class="t-lead mt-10 max-w-[52ch] text-mute-dark">
        Montrez-nous comment votre entreprise fonctionne. En 30 minutes, nous identifierons les
        premiers systèmes qui pourraient vous faire gagner du temps.
      </p>

      <div v-reveal="180" class="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a :href="CONTACT.calendly" target="_blank" rel="noopener noreferrer" class="cta arrow-link">
          <span>Réserver l’audit gratuit</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <a
          :href="CONTACT.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-alt arrow-link"
        >
          <span>WhatsApp</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <p class="t-mono text-mute-dark">Audit gratuit · 30 min · sans engagement</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-band {
  background-color: var(--color-ink);
  color: var(--color-cream);
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  background-color: var(--color-sage);
  color: var(--color-ink);
  padding: 1.15rem 2.1rem;
  border-radius: 6px;
  font-size: 1.0625rem;
  font-weight: 500;
  transition: background-color 0.3s var(--ease-out-expo);
}
.cta:hover {
  background-color: var(--color-cream);
}

.cta-alt {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  font-size: 1.0625rem;
  color: color-mix(in srgb, var(--color-cream) 78%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--color-cream) 30%, transparent);
  padding-bottom: 2px;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.cta-alt:hover {
  color: var(--color-cream);
  border-bottom-color: var(--color-cream);
}
</style>
