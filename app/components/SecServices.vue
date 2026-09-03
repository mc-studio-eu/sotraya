<script setup lang="ts">
const services = [
  {
    line: 'Automatiser ce qui se répète.',
    body: 'Onboarding, administration, suivi commercial, relances, documents, reporting, facturation et opérations récurrentes.',
    name: 'Automatisation des opérations',
    icon: 'automation'
  },
  {
    line: 'Connecter ce qui est dispersé.',
    body: 'Vos outils, vos données et vos équipes fonctionnent enfin comme un seul système.',
    name: 'Intégrations & flux de données',
    icon: 'integration'
  },
  {
    line: "Faire travailler l'IA là où elle est réellement utile.",
    body: 'Comprendre un document, traiter une demande, classifier une information, rédiger, extraire ou assister une décision.',
    name: 'IA appliquée aux opérations',
    icon: 'ai'
  },
  {
    line: "Construire ce qui n'existe pas encore.",
    body: 'Interfaces internes, dashboards, portails et outils métier conçus autour de vos opérations.',
    name: 'Systèmes métier sur mesure',
    icon: 'custom'
  }
]
</script>

<template>
  <section id="services" class="services">
    <div class="shell">
      <header v-reveal class="services-intro">
        <h2 class="t-section services-heading">Un système pour tout faire circuler.</h2>
        <p class="services-summary">
          Automatisation, intégrations, IA et outils sur mesure, conçus comme un ensemble autour
          de vos opérations.
        </p>
      </header>

      <div class="services-frame">
        <div class="services-layout">
          <BrandVisual
            v-reveal="{ variant: 'scale', duration: 1200 }"
            class="services-visual"
            name="services-book"
            alt="Livre lumineux en suspension au-dessus d'une main"
            sizes="(min-width: 900px) 50vw, 100vw"
          />

          <ul class="services-grid">
            <li
              v-for="(service, i) in services"
              :key="service.name"
              v-reveal="{ variant: 'up', delay: i * 90, distance: '1.25rem' }"
              class="service-card"
            >
              <svg v-if="service.icon === 'automation'" class="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 7h8m-8 10h14M16 4v6m-4 4v6" />
                <circle cx="16" cy="7" r="2.5" />
                <circle cx="9" cy="17" r="2.5" />
              </svg>
              <svg v-else-if="service.icon === 'integration'" class="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="18" cy="6" r="2.5" />
                <circle cx="18" cy="18" r="2.5" />
                <path d="m8.3 10.9 7.4-3.8m-7.4 6 7.4 3.8" />
              </svg>
              <svg v-else-if="service.icon === 'ai'" class="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3c.4 4.9 2.1 6.6 7 7-4.9.4-6.6 2.1-7 7-.4-4.9-2.1-6.6-7-7 4.9-.4 6.6-2.1 7-7Z" />
                <path d="M18.5 15.5c.2 2.1.9 2.8 3 3-2.1.2-2.8.9-3 3-.2-2.1-.9-2.8-3-3 2.1-.2 2.8-.9 3-3Z" />
              </svg>
              <svg v-else class="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="6" height="6" />
                <rect x="14" y="4" width="6" height="6" />
                <rect x="4" y="14" width="6" height="6" />
                <path d="M14 17h6m-3-3v6" />
              </svg>

              <p class="t-mono service-name">{{ service.name }}</p>
              <h3 class="service-title">{{ service.line }}</h3>
              <p class="service-body">{{ service.body }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding-block: clamp(5.5rem, 10vw, 9rem);
}

.services-intro {
  margin-bottom: clamp(2.25rem, 5vw, 4.5rem);
}

.services-heading {
  max-width: 15ch;
}

.services-frame {
  border: 1px solid color-mix(in srgb, var(--color-ink) 11%, transparent);
  background-color: color-mix(in srgb, var(--color-paper) 42%, transparent);
}

.services-summary {
  max-width: 46rem;
  margin-top: 1.75rem;
  color: var(--color-mute);
  font-size: clamp(0.95rem, 1.25vw, 1.125rem);
  line-height: 1.55;
}

.services-layout {
  display: grid;
}

.services-visual {
  --visual-ratio: 1 / 1;
  min-width: 0;
}

.services-visual :deep(.frame) {
  height: 100%;
  min-height: 0;
}

.services-visual :deep(img) {
  object-position: center;
}

.services-grid {
  display: grid;
  min-width: 0;
}

.service-card {
  min-height: 19rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-top: 1px solid color-mix(in srgb, var(--color-ink) 11%, transparent);
}

.service-card:first-child {
  border-top: 0;
}

.service-icon {
  width: 1.35rem;
  height: 1.35rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: square;
  stroke-linejoin: miter;
}

.service-name {
  margin-top: 1.5rem;
  color: var(--color-mute);
}

.service-title {
  max-width: 18ch;
  margin-top: 1rem;
  font-size: clamp(1.35rem, 2vw, 1.75rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.025em;
}

.service-body {
  max-width: 38ch;
  margin-top: 1.25rem;
  color: var(--color-mute);
  font-size: 0.9375rem;
  line-height: 1.55;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .service-card:nth-child(2) {
    border-top: 0;
  }

  .service-card:nth-child(even) {
    border-left: 1px solid color-mix(in srgb, var(--color-ink) 11%, transparent);
  }
}

@media (min-width: 900px) {
  .services-layout {
    grid-template-columns: 1fr 1fr;
  }

  .services-visual {
    border-right: 1px solid color-mix(in srgb, var(--color-ink) 11%, transparent);
  }

  .services-visual :deep(.frame) {
    min-height: 100%;
    aspect-ratio: auto;
  }

  .service-card {
    min-height: clamp(18rem, 25vw, 23rem);
  }
}

@media (max-width: 639px) {
  .service-card {
    min-height: auto;
  }
}
</style>
