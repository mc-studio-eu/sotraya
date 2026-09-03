<script setup lang="ts">
import { useInView } from '~/composables/useInView'

const steps = ['Formulaire', 'CRM', 'Email', 'Facturation', 'Équipe']
const { target, isIn } = useInView({ threshold: 0.35 })
</script>

<template>
  <div ref="target" class="compare" :class="{ 'is-in': isIn }">
    <div class="row">
      <p class="t-mono row-label">Avant</p>
      <ol class="chain chain--manual">
        <template v-for="(s, i) in steps" :key="`a${s}`">
          <li v-if="i" class="link" aria-hidden="true"><span class="link-note">manuel</span></li>
          <li class="node">{{ s }}</li>
        </template>
      </ol>
    </div>

    <div class="row row--after">
      <p class="t-mono row-label">Avec Sotraya</p>
      <ol class="chain chain--auto">
        <template v-for="(s, i) in steps" :key="`b${s}`">
          <li v-if="i" class="link" aria-hidden="true">
            <span class="pulse" :style="{ animationDelay: `${(i - 1) * 0.42}s` }" />
          </li>
          <li class="node node--live">{{ s }}</li>
        </template>
      </ol>
      <p class="caption">Une action déclenche tout le reste.</p>
    </div>
  </div>
</template>

<style scoped>
.compare {
  background-color: var(--color-ink);
  color: var(--color-cream);
  padding: clamp(1.75rem, 4vw, 3.5rem);
}

.row + .row {
  margin-top: clamp(2.5rem, 5vw, 4rem);
  padding-top: clamp(2.5rem, 5vw, 4rem);
  border-top: 1px solid color-mix(in srgb, var(--color-cream) 12%, transparent);
}

.row-label {
  color: var(--color-mute-dark);
  margin-bottom: 1.75rem;
}
.row--after .row-label {
  color: var(--color-sage);
}

.chain {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}

.node {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  padding: 0.85rem 1rem;
  border: 1px solid color-mix(in srgb, var(--color-cream) 22%, transparent);
  text-align: center;
  white-space: nowrap;
}

.node--live {
  border-color: color-mix(in srgb, var(--color-sage) 55%, transparent);
  color: var(--color-sage);
}

/* connectors ----------------------------------------------------- */
.link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
}

.link::before {
  content: '';
  position: absolute;
  inset-block: 0.5rem;
  width: 1px;
  background-image: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--color-cream) 30%, transparent) 50%,
    transparent 0
  );
  background-size: 1px 7px;
}

.chain--auto .link::before {
  background-image: none;
  background-color: color-mix(in srgb, var(--color-sage) 45%, transparent);
}

.link-note {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-mute-dark);
  background-color: var(--color-ink);
  padding-inline: 0.5rem;
  position: relative;
}

.pulse {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--color-sage);
  opacity: 0;
}

.is-in .pulse {
  animation: travel-y 1.6s var(--ease-out-expo) infinite;
}

@keyframes travel-y {
  0% { opacity: 0; transform: translateY(-1.4rem); }
  15% { opacity: 1; }
  75% { opacity: 1; }
  100% { opacity: 0; transform: translateY(1.4rem); }
}

.caption {
  margin-top: 1.75rem;
  font-size: 1rem;
  color: var(--color-sage);
}

@media (min-width: 768px) {
  .chain {
    flex-direction: row;
    align-items: center;
  }

  .node {
    flex: 0 0 auto;
    padding-inline: clamp(0.75rem, 2vw, 1.6rem);
  }

  .link {
    flex: 1 1 auto;
    min-height: 0;
    height: 3rem;
  }

  .link::before {
    inset-block: auto;
    inset-inline: 0.4rem;
    top: 50%;
    width: auto;
    height: 1px;
    background-image: linear-gradient(
      to right,
      color-mix(in srgb, var(--color-cream) 30%, transparent) 50%,
      transparent 0
    );
    background-size: 7px 1px;
  }

  .chain--auto .link::before {
    background-image: none;
  }

  .is-in .pulse {
    animation-name: travel-x;
  }

  @keyframes travel-x {
    0% { opacity: 0; transform: translateX(-2.2rem); }
    15% { opacity: 1; }
    75% { opacity: 1; }
    100% { opacity: 0; transform: translateX(2.2rem); }
  }
}
</style>
