<script setup lang="ts">
import { ref, watch } from 'vue'
import { useInView } from '~/composables/useInView'

const steps = [
  { n: '01', label: 'Crée le client', destination: 'CRM' },
  { n: '02', label: 'Génère son dossier', destination: 'Espace client' },
  { n: '03', label: 'Prépare les documents', destination: 'Documents' },
  { n: '04', label: "Envoie l'onboarding", destination: 'Email' },
  { n: '05', label: "Prévient l'équipe", destination: 'Notification' },
  { n: '06', label: 'Programme le suivi', destination: 'Agenda' }
]

const { target, isIn } = useInView({ threshold: 0.1 })
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
      <header class="demo-intro">
        <h2 v-reveal="80" class="t-statement max-w-[13ch]">Six actions. Un seul déclencheur.</h2>
        <p v-reveal="160" class="demo-copy">
          Dès qu'un contrat est signé, chaque étape se lance dans le bon ordre, sans transfert
          manuel ni information perdue.
        </p>
      </header>

      <div v-reveal="120" class="system mt-12 md:mt-20">
        <header class="system-head">
          <div class="system-name">
            <SotrayaMark class="system-mark" label="" aria-hidden="true" />
            <span class="t-mono">Système d'onboarding</span>
          </div>
          <p class="t-mono status"><span class="status-dot" aria-hidden="true" />En ligne</p>
        </header>

        <div class="system-body">
          <aside class="trigger">
            <p class="t-mono trigger-label">Déclencheur</p>
            <p class="trigger-title">Nouveau client</p>
            <p class="trigger-detail">Contrat signé</p>
            <div class="trigger-flow" aria-hidden="true">
              <span class="trigger-pulse" />
            </div>
          </aside>

          <ol class="workflow">
            <li v-for="(s, i) in steps" :key="s.n" class="step" :style="{ '--d': `${i * 0.38}s` }">
              <div class="step-head">
                <span class="t-mono step-n">{{ s.n }}</span>
                <span class="step-mark" aria-hidden="true">
                  <svg viewBox="0 0 12 12" width="11" height="11" fill="none">
                    <path d="M2 6.3 4.8 9 10 3.2" stroke="currentColor" stroke-width="1.5" />
                  </svg>
                </span>
              </div>
              <p class="step-label">{{ s.label }}</p>
              <p class="t-mono step-destination">{{ s.destination }}</p>
            </li>
          </ol>
        </div>

        <footer class="outcome">
          <div class="outcome-time">
            <p class="t-mono">Temps d'exécution</p>
            <p class="outcome-value">{{ seconds }}<span>sec.</span></p>
          </div>
          <p class="outcome-statement">Le système exécute.<br>Votre équipe avance.</p>
          <ul class="zeros">
            <li><span aria-hidden="true" />0 copier-coller</li>
            <li><span aria-hidden="true" />0 oubli</li>
            <li><span aria-hidden="true" />0 attente</li>
          </ul>
        </footer>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo {
  overflow: hidden;
}

.demo-intro {
  text-align: left;
}

.demo-copy {
  max-width: 42ch;
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--color-mute);
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  line-height: 1.55;
}

.system {
  color: var(--color-cream);
  background-color: var(--color-ink);
  border: 1px solid color-mix(in srgb, var(--color-ink) 20%, transparent);
  box-shadow: 0 2rem 5rem color-mix(in srgb, var(--color-ink) 9%, transparent);
}

.system-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.75rem;
  padding-inline: clamp(1.25rem, 3vw, 2.25rem);
  border-bottom: 1px solid color-mix(in srgb, var(--color-cream) 13%, transparent);
}

.system-name {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  color: color-mix(in srgb, var(--color-cream) 66%, transparent);
}

.system-mark {
  width: 1.15rem;
  height: auto;
  color: var(--color-sage);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  color: var(--color-sage);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: currentColor;
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-sage) 45%, transparent);
  animation: status-pulse 2.4s ease-out infinite;
}

.system-body {
  display: grid;
}

.trigger {
  position: relative;
  overflow: hidden;
  min-height: 15rem;
  padding: clamp(1.75rem, 4vw, 3rem);
  border-bottom: 1px solid color-mix(in srgb, var(--color-cream) 13%, transparent);
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--color-sage) 9%, transparent), transparent 58%),
    var(--color-ink-soft);
}

.trigger-label {
  color: var(--color-sage);
}

.trigger-title {
  max-width: 10ch;
  margin-top: 2.25rem;
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.03em;
}

.trigger-detail {
  margin-top: 0.8rem;
  color: color-mix(in srgb, var(--color-cream) 54%, transparent);
  font-size: 0.95rem;
}

.trigger-flow {
  position: absolute;
  right: clamp(1.75rem, 4vw, 3rem);
  bottom: clamp(1.75rem, 4vw, 3rem);
  left: clamp(1.75rem, 4vw, 3rem);
  height: 1px;
  background-color: color-mix(in srgb, var(--color-sage) 28%, transparent);
}

.trigger-flow::after {
  content: '→';
  position: absolute;
  right: -0.15rem;
  top: 50%;
  color: var(--color-sage);
  font-size: 0.85rem;
  transform: translateY(-52%);
}

.trigger-pulse {
  position: absolute;
  top: -3px;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background-color: var(--color-sage);
  animation: trigger-travel 2.8s var(--ease-out-expo) infinite;
}

.workflow {
  display: grid;
}

.step {
  min-height: 11.5rem;
  padding: clamp(1.35rem, 2.5vw, 2rem);
  border-top: 1px solid color-mix(in srgb, var(--color-cream) 11%, transparent);
  opacity: 0.18;
  transform: translateY(0.75rem);
  transition:
    opacity 0.65s var(--ease-out-expo),
    transform 0.65s var(--ease-out-expo),
    background-color 0.45s ease;
}

.step:first-child {
  border-top: 0;
}

.is-in .step {
  opacity: 1;
  transform: none;
  transition-delay: var(--d);
}

.step:hover {
  background-color: color-mix(in srgb, var(--color-sage) 5%, transparent);
}

.step-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.step-n {
  color: color-mix(in srgb, var(--color-cream) 38%, transparent);
}

.step-label {
  max-width: 15ch;
  margin-top: 2.25rem;
  font-size: clamp(1.1rem, 1.7vw, 1.35rem);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.02em;
}

.step-destination {
  margin-top: 0.65rem;
  color: color-mix(in srgb, var(--color-cream) 34%, transparent);
}

.step-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.55rem;
  height: 1.55rem;
  border: 1px solid color-mix(in srgb, var(--color-sage) 35%, transparent);
  color: var(--color-ink);
  background-color: transparent;
  transform: rotate(45deg) scale(0.6);
  opacity: 0;
  transition:
    transform 0.5s var(--ease-out-expo),
    opacity 0.4s var(--ease-out-expo),
    background-color 0.4s var(--ease-out-expo);
}

.is-in .step-mark {
  transform: rotate(45deg);
  opacity: 1;
  background-color: var(--color-sage);
  transition-delay: calc(var(--d) + 0.16s);
}

.step-mark svg {
  transform: rotate(-45deg);
}

.outcome {
  display: grid;
  gap: 2rem;
  padding: clamp(1.75rem, 4vw, 3rem);
  color: var(--color-ink);
  background-color: var(--color-sage);
}

.outcome-time .t-mono {
  color: color-mix(in srgb, var(--color-ink) 54%, transparent);
}

.outcome-value {
  margin-top: 0.75rem;
  font-family: var(--font-display);
  font-size: clamp(4rem, 9vw, 7.5rem);
  font-weight: 600;
  line-height: 0.78;
  letter-spacing: -0.055em;
}

.outcome-value span {
  margin-left: 0.12em;
  font-family: var(--font-sans);
  font-size: 0.25em;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.outcome-statement {
  align-self: end;
  font-size: clamp(1.5rem, 2.8vw, 2.4rem);
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.zeros {
  display: flex;
  flex-direction: column;
  align-self: end;
  gap: 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.zeros li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.zeros span {
  width: 0.45rem;
  height: 0.45rem;
  background-color: var(--color-ink);
  transform: rotate(45deg);
}

@keyframes status-pulse {
  65%, 100% { box-shadow: 0 0 0 0.55rem transparent; }
}

@keyframes trigger-travel {
  0% { opacity: 0; transform: translateX(0); }
  12% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; transform: translateX(clamp(8rem, 19vw, 15rem)); }
}

@media (min-width: 768px) {
  .workflow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .step:nth-child(2) {
    border-top: 0;
  }

  .step:nth-child(even) {
    border-left: 1px solid color-mix(in srgb, var(--color-cream) 11%, transparent);
  }

  .outcome {
    grid-template-columns: 1fr 1fr;
    align-items: end;
  }

  .zeros {
    grid-column: 2;
    margin-top: 1rem;
  }
}

@media (min-width: 1024px) {
  .system-body {
    grid-template-columns: minmax(16rem, 0.7fr) minmax(0, 2.3fr);
  }

  .trigger {
    min-height: 24rem;
    border-right: 1px solid color-mix(in srgb, var(--color-cream) 13%, transparent);
    border-bottom: 0;
  }

  .workflow {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .step {
    min-height: 12rem;
  }

  .step:nth-child(3) {
    border-top: 0;
  }

  .step:nth-child(even) {
    border-left: 0;
  }

  .step:not(:nth-child(3n + 1)) {
    border-left: 1px solid color-mix(in srgb, var(--color-cream) 11%, transparent);
  }

  .outcome {
    grid-template-columns: 0.9fr 1.15fr 0.75fr;
  }

  .zeros {
    grid-column: auto;
    margin-top: 0;
    padding-bottom: 0.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .status-dot,
  .trigger-pulse {
    animation: none;
  }
}
</style>
