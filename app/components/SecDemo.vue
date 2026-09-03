<script setup lang="ts">
import { ref, watch } from 'vue'
import { useInView } from '~/composables/useInView'

const steps = [
  { n: '01', label: 'Crée le client dans le CRM' },
  { n: '02', label: 'Génère son dossier' },
  { n: '03', label: 'Prépare les documents' },
  { n: '04', label: "Envoie son email d'onboarding" },
  { n: '05', label: "Prévient l'équipe" },
  { n: '06', label: 'Programme le suivi' }
]

const { target, isIn } = useInView({ threshold: 0.35 })
const seconds = ref(0)

watch(isIn, (visible) => {
  if (!visible) return
  const total = 43
  const duration = steps.length * 380 + 400
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    seconds.value = Math.round(total * (1 - Math.pow(1 - t, 3)))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})
</script>

<template>
  <section id="demonstration" ref="target" class="demo band" :class="{ 'is-in': isIn }">
    <div class="shell">
      <p v-reveal class="t-mono text-mute">Un système, en conditions réelles</p>

      <div class="panel mt-10 md:mt-14">
        <header class="panel-head">
          <div>
            <p class="t-mono text-mute">Déclencheur</p>
            <p class="mt-2 text-lg font-medium md:text-xl">Nouveau client · contrat signé</p>
          </div>
          <p class="t-mono status"><span class="status-dot" aria-hidden="true" />Actif</p>
        </header>

        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.n" class="step" :style="{ '--d': `${i * 0.38}s` }">
            <span class="t-mono step-n">{{ s.n }}</span>
            <span class="step-label">{{ s.label }}</span>
            <span class="step-mark" aria-hidden="true">
              <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
                <path d="M2 6.3 4.8 9 10 3.2" stroke="currentColor" stroke-width="1.6" />
              </svg>
            </span>
          </li>
        </ol>
      </div>

      <div class="mt-16 grid gap-10 md:mt-24 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p class="t-mega">{{ seconds }} sec.</p>
          <p class="t-lead mt-6 max-w-[34ch] text-mute">
            Au lieu d'une succession d'actions manuelles.
          </p>
        </div>
        <ul class="zeros">
          <li v-reveal="60">0 copier-coller</li>
          <li v-reveal="140">0 oubli</li>
          <li v-reveal="220">0 attente</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo {
  background-color: var(--color-paper);
  border-block: 1px solid color-mix(in srgb, var(--color-ink) 8%, transparent);
}

.panel {
  border: 1px solid color-mix(in srgb, var(--color-ink) 14%, transparent);
  background-color: #fff;
}

.panel-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  border-bottom: 1px solid color-mix(in srgb, var(--color-ink) 12%, transparent);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  color: var(--color-sage-deep);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--color-sage-deep);
}

.steps {
  padding: clamp(0.5rem, 1.5vw, 1rem) 0;
}

.step {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(0.85rem, 2.5vw, 1.75rem);
  padding: 0.95rem clamp(1.25rem, 3vw, 2rem);
  opacity: 0.28;
  transition: opacity 0.5s var(--ease-out-expo);
}

.is-in .step {
  opacity: 1;
  transition-delay: var(--d);
}

.step + .step {
  border-top: 1px solid color-mix(in srgb, var(--color-ink) 7%, transparent);
}

.step-n {
  color: var(--color-mute);
}

.step-label {
  font-size: clamp(0.95rem, 1.6vw, 1.125rem);
}

.step-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  color: var(--color-ink);
  background-color: var(--color-stone);
  transform: scale(0.6);
  opacity: 0;
  transition:
    transform 0.5s var(--ease-out-expo),
    opacity 0.4s var(--ease-out-expo),
    background-color 0.4s var(--ease-out-expo);
}

.is-in .step-mark {
  transform: none;
  opacity: 1;
  background-color: var(--color-sage);
  transition-delay: calc(var(--d) + 0.16s);
}

.zeros {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  font-family: var(--font-mono);
  font-size: clamp(0.95rem, 1.5vw, 1.125rem);
  color: var(--color-mute);
}

@media (min-width: 768px) {
  .zeros {
    padding-bottom: 0.75rem;
  }
}
</style>
