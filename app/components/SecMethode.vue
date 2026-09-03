<script setup lang="ts">
import { useInView } from '~/composables/useInView'

const steps = [
  { name: 'Comprendre', body: "On cartographie ce qui se passe réellement dans l'entreprise." },
  { name: 'Simplifier', body: "On retire les étapes qui ne devraient même pas exister." },
  { name: 'Connecter', body: "On fait circuler correctement l'information." },
  { name: 'Automatiser', body: "On laisse le système prendre en charge ce qui n'a plus besoin de vous." }
]

const { target: track, isIn: isTrackInView } = useInView({ threshold: 0.3 })
</script>

<template>
  <section id="methode" class="band">
    <div class="shell">
      <h2 v-reveal class="t-statement max-w-[19ch]">
        On commence par votre façon de travailler. Jamais par un outil.
      </h2>

      <BrandVisual
        v-reveal="120"
        name="assemblage"
        class="assemblage mt-14 md:mt-20"
        sizes="(min-width: 90rem) 81rem, 92vw"
        alt="Modules de béton, de bois sombre et de verre teinté enfilés sur un même axe."
      >
        Chaque étape ajoute une pièce à un ensemble déjà en place.
      </BrandVisual>

      <ol
        ref="track"
        class="track mt-16 md:mt-24"
        :class="{ 'is-in': isTrackInView }"
      >
        <li
          v-for="(s, i) in steps"
          :key="s.name"
          class="stop"
        >
          <span
            class="dot"
            :style="{ '--dot-delay': `${180 + i * 240}ms` }"
            aria-hidden="true"
          />
          <div v-reveal="{ variant: 'up', delay: 220 + i * 110, distance: '1.25rem' }">
            <h3 class="stop-name">{{ s.name }}</h3>
            <p class="t-lead mt-3 max-w-[30ch] text-mute">{{ s.body }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.assemblage {
  --visual-ratio: 4 / 3;
}

@media (min-width: 768px) {
  .assemblage {
    /* the object runs corner to corner; anything tighter than 16/10 clips its ends */
    --visual-ratio: 16 / 10;
  }
}

.track {
  position: relative;
  display: grid;
  gap: 3rem;
  padding-left: 2rem;
}

.track::before {
  content: '';
  position: absolute;
  top: 0.7rem;
  bottom: 0.7rem;
  left: 4px;
  width: 1px;
  background-color: color-mix(in srgb, var(--color-ink) 15%, transparent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 1.15s var(--ease-out-expo);
}

.track.is-in::before {
  transform: scaleY(1);
}

.stop {
  position: relative;
}

.dot {
  position: absolute;
  top: 0.7rem;
  left: calc(-2rem + 4.5px);
  width: 9px;
  height: 9px;
  background-color: var(--color-ink);
  opacity: 0;
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  transition:
    opacity 0.25s ease var(--dot-delay),
    transform 0.6s var(--ease-out-expo) var(--dot-delay);
}

.track.is-in .dot {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(45deg) scale(1);
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
    padding-top: 2.5rem;
    padding-left: 0;
  }

  .track::before {
    inset: 0 0 auto;
    width: auto;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
  }

  .track.is-in::before {
    transform: scaleX(1);
  }

  .dot {
    top: calc(-2.5rem + 0.5px);
    left: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .track::before,
  .dot {
    transition-delay: 0s;
  }
}
</style>
