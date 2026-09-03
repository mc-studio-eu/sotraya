<template>
  <section id="parler" class="cta-band">
    <div class="shell py-28 md:py-40">
      <h2 v-reveal class="t-statement max-w-[15ch]">
        Quel travail ne devrait plus être manuel chez vous ?
      </h2>

      <p v-reveal="100" class="t-lead mt-10 max-w-[52ch] text-mute-dark">
        Montrez-nous comment votre entreprise fonctionne. En 30 minutes, nous identifierons les
        premiers systèmes qui pourraient vous faire gagner du temps.
      </p>

      <div v-reveal="180" class="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a href="mailto:hello@sotraya.com" class="cta arrow-link">
          <span>Réserver 30 minutes</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <p class="t-mono text-mute-dark">Gratuit · sans engagement</p>
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
  border-radius: 999px;
  font-size: 1.0625rem;
  font-weight: 500;
  transition: background-color 0.3s var(--ease-out-expo);
}
.cta:hover {
  background-color: var(--color-cream);
}
</style>
