<script setup lang="ts">
const rows = [
  ['Onboarding client', 'Qualification des leads', 'Mise à jour du CRM', 'Création de documents', 'Reporting'],
  ['Relances', 'Facturation', 'Traitement des emails', 'Synchronisation des données', 'Support'],
  ['Analyse de documents', 'Notifications internes', 'Préparation de rendez-vous', 'Extraction de données', 'Suivi des dossiers']
]
</script>

<template>
  <section id="automatisations" class="scope band">
    <div class="shell">
      <h2 v-reveal class="t-statement max-w-[16ch]">
        Qu'est-ce qui pourrait disparaître de votre semaine ?
      </h2>
    </div>

    <div class="marquees mt-14 md:mt-20">
      <div v-for="(row, i) in rows" :key="i" class="marquee" :class="{ 'marquee--rev': i % 2 === 1 }">
        <ul class="track" :style="{ '--dur': `${38 + i * 9}s` }" aria-hidden="true">
          <li v-for="(item, j) in [...row, ...row]" :key="`${item}-${j}`" class="item">
            {{ item }}<span class="sep">/</span>
          </li>
        </ul>
      </div>
      <ul class="sr-only">
        <li v-for="item in rows.flat()" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="shell mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-24">
      <p v-reveal class="t-lead text-mute-dark">Probablement plus que vous ne le pensez.</p>
      <a v-reveal="80" href="#parler" class="ghost arrow-link">
        <span>Identifier mes automatisations</span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.scope {
  background-color: var(--color-ink);
  color: var(--color-cream);
  overflow: hidden;
}

.marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.track {
  display: flex;
  width: max-content;
  animation: slide var(--dur) linear infinite;
}

.marquee--rev .track {
  animation-direction: reverse;
}

.item {
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
  font-size: clamp(1.75rem, 4.4vw, 4rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.35;
  color: color-mix(in srgb, var(--color-cream) 55%, transparent);
}

.marquee--rev .item {
  color: color-mix(in srgb, var(--color-sage) 70%, transparent);
}

.sep {
  color: color-mix(in srgb, var(--color-cream) 22%, transparent);
  padding-inline: clamp(0.75rem, 2vw, 1.75rem);
}

@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.ghost {
  font-size: 1rem;
  color: var(--color-sage);
  border-bottom: 1px solid color-mix(in srgb, var(--color-sage) 40%, transparent);
  padding-bottom: 3px;
  transition: border-color 0.3s ease;
}
.ghost:hover {
  border-bottom-color: var(--color-sage);
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    overflow-x: auto;
    mask-image: none;
  }
}
</style>
