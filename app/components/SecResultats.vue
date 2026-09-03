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
    lead: "Certains processus n'ont aucune raison d'attendre lundi matin.",
    note: null
  }
]
</script>

<template>
  <section id="resultats" class="results">
    <article v-for="s in stats" :key="s.n" class="stat">
      <div class="shell">
        <p v-reveal class="t-mono text-mute">{{ s.n }} / Résultat</p>
        <p v-reveal="80" class="t-mega mt-8">{{ s.value }}</p>
        <p v-reveal="160" class="t-section lead mt-8 max-w-[18ch]">{{ s.lead }}</p>
        <p v-reveal="240" class="t-lead note mt-6 max-w-[38ch] text-mute">{{ s.note }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.stat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: clamp(30rem, 82vh, 52rem);
  padding-block: 6rem;
}

.stat + .stat {
  border-top: 1px solid color-mix(in srgb, var(--color-ink) 10%, transparent);
}

/* Hauteurs réservées : chaque panneau a la même pile de contenu,
   donc les trois chiffres tombent exactement à la même hauteur. */
.lead {
  min-height: calc(4 * 1.04em);
}

.note {
  min-height: 1.55em;
}
</style>
