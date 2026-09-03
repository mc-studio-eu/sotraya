<template>
  <section class="own">
    <div class="shell flex min-h-[80vh] flex-col justify-center py-24">
      <h2 v-reveal class="t-statement max-w-[17ch]">
        Nous ne voulons pas vous rendre dépendant de nous.
      </h2>

      <ul class="owned mt-14 md:mt-20">
        <li v-reveal="60">Vos comptes.</li>
        <li v-reveal="130">Vos données.</li>
        <li v-reveal="200">Vos workflows.</li>
        <li v-reveal="270">Votre documentation.</li>
      </ul>

      <p v-reveal="340" class="mt-10 text-xl text-sage md:text-2xl">Tout reste à vous.</p>

      <p v-reveal="400" class="t-mono mt-12 max-w-[46ch] text-mute-dark">
        Un bon système doit continuer à fonctionner lorsque nous partons.
      </p>
    </div>
  </section>
</template>

<style scoped>
.own {
  background-color: var(--color-ink);
  color: var(--color-cream);
}

.owned {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2.5rem;
  font-size: clamp(1.5rem, 3.2vw, 2.75rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  color: color-mix(in srgb, var(--color-cream) 65%, transparent);
}
</style>
