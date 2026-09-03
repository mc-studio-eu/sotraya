<template>
  <section id="a-propos" class="band">
    <div class="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <BrandVisual
        v-reveal
        name="portrait"
        ratio="1 / 1"
        sizes="(min-width: 1024px) 38vw, 100vw"
        alt="Daris, fondateur de Sotraya"
      >
        Daris — fondateur
      </BrandVisual>

      <div class="lg:pt-6">
        <h2 v-reveal class="t-section max-w-[22ch]">
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
