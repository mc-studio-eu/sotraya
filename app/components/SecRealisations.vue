<template>
  <section id="realisations" class="band">
    <div class="shell">
      <div v-reveal class="flex flex-wrap items-baseline justify-between gap-6">
        <h2 class="t-section">Ce que nous avons construit.</h2>
        <p class="t-mono text-mute">Des systèmes en production</p>
      </div>

      <article class="mt-12 md:mt-16">
        <div v-reveal="{ variant: 'scale', duration: 1200 }" class="cover">
          <picture class="cover-media">
            <source
              type="image/avif"
              srcset="
                /visuals/maison-awl-operations-v3-800.avif 800w,
                /visuals/maison-awl-operations-v3-1280.avif 1280w,
                /visuals/maison-awl-operations-v3-1920.avif 1920w
              "
              sizes="(min-width: 1280px) 1200px, calc(100vw - 3rem)"
            >
            <source
              type="image/webp"
              srcset="
                /visuals/maison-awl-operations-v3-800.webp 800w,
                /visuals/maison-awl-operations-v3-1280.webp 1280w,
                /visuals/maison-awl-operations-v3-1920.webp 1920w
              "
              sizes="(min-width: 1280px) 1200px, calc(100vw - 3rem)"
            >
            <img
              src="/visuals/maison-awl-operations-v3-1920.jpg"
              srcset="
                /visuals/maison-awl-operations-v3-800.jpg 800w,
                /visuals/maison-awl-operations-v3-1280.jpg 1280w,
                /visuals/maison-awl-operations-v3-1920.jpg 1920w
              "
              sizes="(min-width: 1280px) 1200px, calc(100vw - 3rem)"
              alt="Système organisé de planification et de production de contenu"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <div class="cover-inner">
            <p class="t-mono cover-kicker">Organisation d'intérieur · Activité de créatrice</p>
            <p class="cover-name">Maison AWL</p>
            <ol class="cover-chain" aria-hidden="true">
              <li v-for="s in ['Demande', 'Dossier', 'Planning', 'Livraison']" :key="s">{{ s }}</li>
            </ol>
          </div>
        </div>

        <h3 v-reveal class="t-section mt-12 max-w-[24ch]">
          Structurer l'opérationnel pour libérer le temps créatif.
        </h3>

        <dl class="mt-12 grid gap-10 border-t border-ink/12 pt-10 md:grid-cols-3 md:gap-12">
          <div v-reveal>
            <dt class="t-mono text-sage-deep">Problème</dt>
            <dd class="t-lead mt-4">L'opérationnel prenait trop de place dans le quotidien.</dd>
          </div>
          <div v-reveal="90">
            <dt class="t-mono text-sage-deep">Système</dt>
            <dd class="t-lead mt-4 text-mute">
              Un espace de pilotage centralisé pour organiser les demandes, le calendrier éditorial,
              la production des contenus et les livraisons.
            </dd>
          </div>
          <div v-reveal="180">
            <dt class="t-mono text-sage-deep">Impact</dt>
            <dd class="t-lead mt-4 text-mute">
              Une organisation plus fluide, une meilleure visibilité sur les priorités et davantage
              de temps consacré à la création.
            </dd>
          </div>
        </dl>

        <blockquote v-reveal class="quote mt-16">
          <p class="t-section max-w-[26ch]">
            « Un accompagnement structuré, efficace, qui m'a permis de me concentrer sur ce qui compte
            vraiment : créer du contenu et développer mon activité. »
          </p>
          <footer class="quote-author mt-8">
            <div class="quote-avatar">
              <img
                src="/visuals/maison-awl-avatar.jpg"
                alt="Créatrice de Maison AWL"
                width="88"
                height="88"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div>
              <p class="quote-author-name">Maison AWL</p>
              <p class="quote-author-role">Créatrice de contenu · Home Organizer Certifiée</p>
            </div>
          </footer>
        </blockquote>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cover {
  position: relative;
  overflow: hidden;
  background-color: var(--color-ink);
  color: var(--color-cream);
  aspect-ratio: 16 / 9;
  min-height: 22rem;
  display: flex;
  align-items: flex-end;
  padding: clamp(1.5rem, 4vw, 3.5rem);
}

.cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(12 13 12 / 88%) 0%, rgb(12 13 12 / 62%) 42%, rgb(12 13 12 / 8%) 78%),
    linear-gradient(0deg, rgb(12 13 12 / 78%) 0%, transparent 62%);
  pointer-events: none;
}

.cover-media,
.cover-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.cover-media img {
  object-fit: cover;
  object-position: center;
  transform: scale(1.035);
  transition: transform 1.6s var(--ease-out-expo);
}

.cover.is-in .cover-media img,
.cover:not(.reveal) .cover-media img {
  transform: none;
}

.cover-inner {
  position: relative;
  z-index: 1;
}

.cover-kicker {
  color: var(--color-sage);
}

.cover-name {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2.5rem, 7vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin-top: 0.75rem;
}

.cover-chain {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-cream) 55%, transparent);
}

.cover-chain li {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
}

.cover-chain li:not(:last-child)::after {
  content: '→';
  color: color-mix(in srgb, var(--color-sage) 70%, transparent);
}

.quote {
  border-left: 1px solid var(--color-sage-deep);
  padding-left: clamp(1.5rem, 4vw, 3rem);
}

.quote-author {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.5rem);
}

.quote-avatar {
  flex: 0 0 auto;
  width: clamp(4.25rem, 7vw, 5.5rem);
  aspect-ratio: 1;
  overflow: hidden;
  border: 2px solid color-mix(in srgb, var(--color-sage-deep) 28%, transparent);
  border-radius: 9999px;
  background-color: var(--color-stone);
}

.quote-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.quote-author-name {
  font-size: clamp(1.125rem, 1.5vw, 1.375rem);
  font-weight: 600;
  line-height: 1.15;
}

.quote-author-role {
  margin-top: 0.35rem;
  color: var(--color-mute);
  font-size: clamp(0.875rem, 1.2vw, 1.0625rem);
  line-height: 1.4;
}

@media (max-width: 479.98px) {
  .cover::after {
    background:
      linear-gradient(90deg, rgb(12 13 12 / 82%) 0%, rgb(12 13 12 / 35%) 100%),
      linear-gradient(0deg, rgb(12 13 12 / 90%) 0%, transparent 72%);
  }

  .cover-media img {
    object-position: 64% center;
  }

  .quote-author {
    align-items: flex-start;
  }

  .quote-author-role {
    max-width: 22ch;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cover-media img {
    transform: none;
    transition: none;
  }
}
</style>
