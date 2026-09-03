<script setup lang="ts">
const stats = [
  {
    n: '01',
    value: '10h',
    lead: 'récupérées chaque semaine.',
    note: 'En moyenne après les premiers workflows.'
  },
  {
    n: '02',
    value: '×3',
    lead: 'de capacité.',
    note: "Sans ×3 d'opérationnel."
  },
  {
    n: '03',
    value: '24/7',
    lead: 'sans interruption.',
    note: "Certains processus n'ont aucune raison d'attendre lundi matin."
  }
]
</script>

<template>
  <section id="resultats" class="band">
    <div class="shell">
      <p v-reveal class="t-mono text-mute">Résultats</p>

      <div class="stats mt-12 md:mt-20">
        <article v-for="(s, i) in stats" :key="s.n" class="stat">
          <p v-reveal="i * 80" class="t-mono text-mute">{{ s.n }}</p>
          <p v-reveal="i * 80 + 80" class="figure">{{ s.value }}</p>
          <p v-reveal="i * 80 + 160" class="lead">{{ s.lead }}</p>
          <p v-reveal="i * 80 + 240" class="t-lead text-mute">{{ s.note }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  display: grid;
  gap: clamp(2.5rem, 4vw, 4rem);
}

.stat {
  display: grid;
  align-content: start;
  row-gap: clamp(0.75rem, 1vw, 1.25rem);
}

.figure {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(3.5rem, 7.5vw, 6.5rem);
  line-height: 0.85;
  letter-spacing: -0.045em;
}

.lead {
  font-size: clamp(1.25rem, 1.9vw, 1.75rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
  font-weight: 500;
  max-width: 16ch;
}

.stat > .t-lead {
  max-width: 30ch;
}

/* Une seule ligne : les quatre rangées sont partagées par les trois colonnes
   (subgrid), donc chiffres, phrases et notes s'alignent exactement. */
@media (min-width: 768px) {
  .stats {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto auto;
  }

  .stat {
    grid-row: span 4;
    grid-template-rows: subgrid;
  }

  .stat + .stat {
    border-inline-start: 1px solid color-mix(in srgb, var(--color-ink) 10%, transparent);
    padding-inline-start: clamp(2.5rem, 4vw, 4rem);
  }
}

@media (max-width: 767.98px) {
  .stat + .stat {
    border-top: 1px solid color-mix(in srgb, var(--color-ink) 10%, transparent);
    padding-block-start: clamp(2.5rem, 4vw, 4rem);
  }
}
</style>
