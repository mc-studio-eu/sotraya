<script setup lang="ts">
const services = [
  {
    line: 'Automatiser ce qui se répète.',
    body: 'Onboarding, administration, suivi commercial, relances, documents, reporting, facturation et opérations récurrentes.',
    name: 'Automatisation des opérations',
    core: true
  },
  {
    line: 'Connecter ce qui est dispersé.',
    body: 'Vos outils, vos données et vos équipes fonctionnent enfin comme un seul système.',
    name: 'Intégrations & flux de données',
    core: false
  },
  {
    line: "Faire travailler l'IA là où elle est réellement utile.",
    body: 'Comprendre un document, traiter une demande, classifier une information, rédiger, extraire ou assister une décision.',
    name: 'IA appliquée aux opérations',
    core: false
  },
  {
    line: "Construire ce qui n'existe pas encore.",
    body: 'Interfaces internes, dashboards, portails et outils métier conçus autour de vos opérations.',
    name: 'Systèmes métier sur mesure',
    core: false
  }
]
</script>

<template>
  <section id="services" class="band">
    <div class="shell">
      <ul class="border-t border-ink/12">
        <li v-for="(s, i) in services" :key="s.name" v-reveal="i * 80" class="svc" tabindex="0">
          <div class="svc-head">
            <h3 class="t-section max-w-[18ch]">{{ s.line }}</h3>
            <p class="t-mono svc-name">
              <span v-if="s.core" class="core-dot" aria-hidden="true" />{{ s.name }}
            </p>
          </div>
          <div class="svc-body">
            <p class="t-lead max-w-[62ch] text-mute">{{ s.body }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.svc {
  display: block;
  border-bottom: 1px solid color-mix(in srgb, var(--color-ink) 12%, transparent);
  padding-block: clamp(2rem, 4vw, 3.25rem);
  transition: padding 0.5s var(--ease-out-expo);
}

.svc-head {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.svc-name {
  color: var(--color-mute);
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
}

.core-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--color-sage-deep);
}

.svc-body {
  display: grid;
  grid-template-rows: 1fr;
  margin-top: 1.25rem;
}

.svc-body > p {
  min-height: 0;
}

@media (min-width: 900px) {
  .svc-head {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 3rem;
  }

  .svc-name {
    flex: 0 0 auto;
    padding-top: 0.4rem;
  }

  /* on wide screens the description is the reward for hover / keyboard focus */
  .svc-body {
    grid-template-rows: 0fr;
    margin-top: 0;
    opacity: 0;
    transition:
      grid-template-rows 0.6s var(--ease-out-expo),
      opacity 0.5s var(--ease-out-expo),
      margin-top 0.6s var(--ease-out-expo);
  }

  .svc-body > p {
    overflow: hidden;
  }

  .svc:hover .svc-body,
  .svc:focus-visible .svc-body,
  .svc:focus-within .svc-body {
    grid-template-rows: 1fr;
    opacity: 1;
    margin-top: 1.5rem;
  }
}
</style>
