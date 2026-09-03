<template>
  <section id="a-propos" class="band">
    <div class="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <figure v-reveal class="portrait">
        <div class="portrait-frame">
          <SotrayaMark class="portrait-mark" label="" aria-hidden="true" />
        </div>
        <figcaption class="t-mono mt-4 text-mute">
          Daris — fondateur · portrait éditorial à fournir
        </figcaption>
      </figure>

      <div class="lg:pt-6">
        <p v-reveal class="t-mono text-mute">Pourquoi Sotraya existe</p>

        <h2 v-reveal="80" class="t-section mt-8 max-w-[22ch]">
          Les grandes entreprises ont compris depuis longtemps la puissance des bons systèmes.
        </h2>

        <p v-reveal="160" class="t-lead mt-10 max-w-[52ch] text-mute">
          Après avoir évolué chez XPO Logistics, Kuehne+Nagel, Egis et IVECO, Daris a observé de
          l'intérieur comment des organisations complexes structurent leurs opérations.
        </p>

        <p v-reveal="220" class="t-lead mt-6 max-w-[52ch]">
          Sotraya est né d'une conviction simple : une entreprise plus petite devrait pouvoir accéder
          à cette efficacité sans passer des années à la construire.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portrait-frame {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 4 / 5;
  background-color: var(--color-stone);
  overflow: hidden;
}

.portrait-mark {
  height: 30%;
  width: auto;
  color: color-mix(in srgb, var(--color-ink) 14%, transparent);
}
</style>
