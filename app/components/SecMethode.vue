<script setup lang="ts">
const steps = [
  { name: 'Comprendre', body: "On cartographie ce qui se passe réellement dans l'entreprise." },
  { name: 'Simplifier', body: "On retire les étapes qui ne devraient même pas exister." },
  { name: 'Connecter', body: "On fait circuler correctement l'information." },
  { name: 'Automatiser', body: "On laisse le système prendre en charge ce qui n'a plus besoin de vous." }
]
</script>

<template>
  <section class="band">
    <div class="shell">
      <h2 v-reveal class="t-statement max-w-[19ch]">
        On commence par votre façon de travailler. Jamais par un outil.
      </h2>

      <ol class="track mt-16 md:mt-24">
        <li v-for="(s, i) in steps" :key="s.name" v-reveal="i * 110" class="stop">
          <span class="dot" aria-hidden="true" />
          <h3 class="stop-name">{{ s.name }}</h3>
          <p class="t-lead mt-3 max-w-[30ch] text-mute">{{ s.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.track {
  display: grid;
  gap: 3rem;
  border-top: 1px solid color-mix(in srgb, var(--color-ink) 15%, transparent);
  padding-top: 2.5rem;
}

.stop {
  position: relative;
}

.dot {
  position: absolute;
  top: -2.9rem;
  left: 0;
  width: 9px;
  height: 9px;
  background-color: var(--color-ink);
  transform: translateY(-50%) rotate(45deg);
}

.stop-name {
  font-size: clamp(1.375rem, 2.4vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.02em;
}

@media (min-width: 860px) {
  .track {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
}
</style>
