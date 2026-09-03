<template>
  <section id="top" class="hero">
    <div class="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <div>
        <h1 class="t-hero max-w-[14ch]">
          Faites grandir votre entreprise.
          <span class="block text-mute">Pas votre charge de travail.</span>
        </h1>

        <p v-reveal="150" class="t-lead mt-10 max-w-[46ch] text-mute">
          Sotraya conçoit les systèmes qui connectent vos outils, automatisent vos opérations et
          éliminent le travail répétitif.
        </p>

        <div v-reveal="280" class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#parler" class="cta arrow-link">
            <span>Parler de votre fonctionnement</span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>
          <p class="t-mono text-mute">30 min · sans engagement</p>
        </div>
      </div>

      <div class="-mx-6 lg:mx-0">
        <HeroMorph />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: 100svh;
  padding-top: 7.5rem;
  padding-bottom: 4rem;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  background-color: var(--color-ink);
  color: var(--color-cream);
  padding: 1.05rem 1.9rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s var(--ease-out-expo);
}
.cta:hover {
  background-color: var(--color-sage-deep);
}
</style>
