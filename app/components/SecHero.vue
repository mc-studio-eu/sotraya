<script setup lang="ts">
import { computed } from 'vue'

/**
 * The hero is a single centred column laid over a full-bleed landscape.
 * The photo derivatives come from `npm run visuals` (source: visuals-src/paysage.png);
 * the scrim below them keeps the type readable over the bright sky.
 */

const VISUAL = 'paysage'
const WIDTHS = [800, 1280, 1920]

const srcset = (ext: string) => WIDTHS.map((w) => `/visuals/${VISUAL}-${w}.${ext} ${w}w`).join(', ')

const avif = computed(() => srcset('avif'))
const webp = computed(() => srcset('webp'))
const jpg = computed(() => srcset('jpg'))
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-media" aria-hidden="true">
      <picture>
        <source type="image/avif" :srcset="avif" sizes="100vw">
        <source type="image/webp" :srcset="webp" sizes="100vw">
        <img
          :src="`/visuals/${VISUAL}-1920.jpg`"
          :srcset="jpg"
          sizes="100vw"
          alt=""
          width="1920"
          height="1080"
          fetchpriority="high"
          decoding="async"
        >
      </picture>
      <div class="hero-scrim"></div>
    </div>

    <div class="hero-inner shell">
      <h1 class="t-hero hero-title">
        <span v-reveal="{ variant: 'clip', delay: 120, duration: 1100 }" class="block">
          Faites grandir votre entreprise.
        </span>
        <span v-reveal="{ variant: 'clip', delay: 220, duration: 1100 }" class="block">
          Pas votre charge de travail.
        </span>
      </h1>

      <p v-reveal="{ variant: 'fade', delay: 420, duration: 1000 }" class="t-lead hero-lead">
        Sotraya conçoit les systèmes qui connectent vos outils, automatisent vos opérations et
        éliminent le travail répétitif.
      </p>

      <div v-reveal="{ variant: 'up', delay: 560 }" class="hero-actions">
        <a href="#parler" class="hero-cta">Demander votre audit gratuit</a>
        <p class="t-mono hero-note">30 min · sans engagement</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 100svh;
  display: flex;
  /* the inset frame the rest of the page sits inside */
  margin: clamp(0.4rem, 0.7vw, 0.75rem);
  border-radius: clamp(0.75rem, 1.4vw, 1.5rem);
}

/* Media ------------------------------------------------------------ */
.hero-media {
  position: absolute;
  inset: 0;
  z-index: -1;
  /* stands in for the photo until the derivatives are generated */
  background: linear-gradient(180deg, #2f4d7d 0%, #7d8ea6 42%, #d8c39c 72%, #f0e0c2 100%);
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  animation: hero-settle 1.8s var(--ease-out-expo) both;
}

/* Darkens the sky so the nav and the headline stay legible. */
.hero-scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--color-ink) 66%, transparent) 0%,
      color-mix(in srgb, var(--color-ink) 46%, transparent) 30%,
      /* held through the band where the sun glow would swallow the lead and the CTA */
      color-mix(in srgb, var(--color-ink) 34%, transparent) 52%,
      color-mix(in srgb, var(--color-ink) 12%, transparent) 72%,
      transparent 88%
    );
  animation: hero-scrim-in 1.2s ease-out both;
}

@keyframes hero-settle {
  from { transform: scale(1.045); }
  to { transform: scale(1); }
}

@keyframes hero-scrim-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Content ---------------------------------------------------------- */
.hero-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* clears the nav and holds the column in the upper half, as in the reference */
  padding-top: clamp(8.5rem, 19svh, 13rem);
  padding-bottom: clamp(4rem, 10vh, 7rem);
}

.hero-title {
  max-width: 32ch;
  font-weight: 400;
  color: var(--color-paper);
  text-wrap: balance;
}

.hero-lead {
  margin-top: 1.75rem;
  max-width: 52ch;
  color: color-mix(in srgb, var(--color-paper) 92%, transparent);
  text-wrap: pretty;
}

.hero-actions {
  margin-top: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-ink);
  color: var(--color-cream);
  padding: 1.05rem 1.9rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  transition:
    background-color 0.3s var(--ease-out-expo),
    transform 0.35s var(--ease-out-expo),
    box-shadow 0.35s var(--ease-out-expo);
}
.hero-cta:hover {
  background-color: var(--color-sage-deep);
  transform: translateY(-2px);
  box-shadow: 0 0.75rem 2rem color-mix(in srgb, var(--color-ink) 22%, transparent);
}

.hero-note {
  color: color-mix(in srgb, var(--color-paper) 78%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .hero-media img,
  .hero-scrim {
    animation: none;
  }
}
</style>
