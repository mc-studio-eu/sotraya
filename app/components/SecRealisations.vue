<template>
  <section id="realisations" class="band">
    <div class="shell">
      <div v-reveal class="flex flex-wrap items-baseline justify-between gap-6">
        <h2 class="t-section">Ce que nous avons construit.</h2>
        <p class="t-mono text-mute">Des systèmes en production</p>
      </div>

      <article class="mt-12 md:mt-16">
        <div v-reveal class="cover">
          <SotrayaMark class="watermark" label="" aria-hidden="true" />
          <div class="cover-inner">
            <p class="t-mono cover-kicker">Organisation d'intérieur · Activité de créatrice</p>
            <p class="cover-name">Maison AWL</p>
            <ol class="cover-chain" aria-hidden="true">
              <li v-for="s in ['Demande', 'Dossier', 'Planning', 'Livraison']" :key="s">{{ s }}</li>
            </ol>
          </div>
          <p class="t-mono cover-note">Visuel provisoire</p>
        </div>

        <h3 v-reveal class="t-section mt-12 max-w-[24ch]">
          Structurer l'opérationnel pour libérer le temps créatif.
        </h3>

        <dl class="mt-12 grid gap-10 border-t border-ink/12 pt-10 md:grid-cols-3 md:gap-12">
          <div v-reveal>
            <dt class="t-mono text-mute">Problème</dt>
            <dd class="t-lead mt-4">L'opérationnel prenait trop de place dans le quotidien.</dd>
          </div>
          <div v-reveal="90">
            <dt class="t-mono text-mute">Système</dt>
            <dd class="t-lead mt-4 text-mute">
              <span class="slot">À détailler avec ce qui a réellement été mis en place.</span>
            </dd>
          </div>
          <div v-reveal="180">
            <dt class="t-mono text-mute">Impact</dt>
            <dd class="t-lead mt-4 text-mute">
              <span class="slot">À chiffrer avec les données du client.</span>
            </dd>
          </div>
        </dl>

        <blockquote v-reveal class="quote mt-16">
          <p class="t-section max-w-[26ch]">
            « Un accompagnement structuré, efficace, qui m'a permis de me concentrer sur ce qui compte
            vraiment : créer du contenu et développer mon activité. »
          </p>
          <footer class="t-mono mt-8 text-mute">Maison AWL</footer>
        </blockquote>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cover {
  position: relative;
  overflow: hidden;
  background-color: var(--color-ink);
  color: var(--color-cream);
  aspect-ratio: 16 / 9;
  min-height: 22rem;
  display: flex;
  align-items: flex-end;
  padding: clamp(1.5rem, 4vw, 3.5rem);
}

.watermark {
  position: absolute;
  right: -4%;
  top: -12%;
  height: 130%;
  width: auto;
  color: color-mix(in srgb, var(--color-cream) 5%, transparent);
}

.cover-inner {
  position: relative;
}

.cover-kicker {
  color: var(--color-sage);
}

.cover-name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2.5rem, 7vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin-top: 0.75rem;
}

.cover-chain {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-cream) 55%, transparent);
}

.cover-chain li {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
}

.cover-chain li:not(:last-child)::after {
  content: '→';
  color: color-mix(in srgb, var(--color-sage) 70%, transparent);
}

.cover-note {
  position: absolute;
  top: clamp(1.5rem, 4vw, 3.5rem);
  right: clamp(1.5rem, 4vw, 3.5rem);
  color: color-mix(in srgb, var(--color-cream) 35%, transparent);
}

/* content the client still has to supply */
.slot {
  border-bottom: 1px dashed color-mix(in srgb, var(--color-ink) 25%, transparent);
  padding-bottom: 2px;
}

.quote {
  border-left: 1px solid var(--color-sage-deep);
  padding-left: clamp(1.5rem, 4vw, 3rem);
}
</style>
