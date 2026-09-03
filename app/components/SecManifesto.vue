<template>
  <section id="manifeste" class="manifesto">
    <div class="shell flex min-h-[64vh] flex-col justify-center pt-28 pb-20 md:pt-36">
      <SotrayaMark v-reveal class="h-12 w-auto self-start text-ink md:h-16" label="Sotraya" />

      <p v-reveal="120" class="t-statement mt-16 max-w-[16ch] text-ink">
        Des éléments isolés.<br >Un système qui tourne.
      </p>

      <p v-reveal="240" class="t-lead mt-10 text-ink/65">C'est ce que nous construisons.</p>
    </div>

    <BrandVisual
      v-reveal
      name="structure"
      class="structure"
      sizes="100vw"
      alt="Ensemble architectural en béton — volumes suspendus, portiques et escalier — assemblés en une seule structure."
    />
  </section>
</template>

<style scoped>
.manifesto {
  background-color: var(--color-sage);
}

.structure {
  --visual-ratio: 4 / 3;
}

@media (min-width: 768px) {
  .structure {
    --visual-ratio: 21 / 9;
  }
}
</style>
