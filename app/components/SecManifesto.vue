<template>
  <section class="manifesto">
    <div class="shell flex min-h-[78vh] flex-col justify-center py-24">
      <SotrayaMark v-reveal class="h-12 w-auto text-ink md:h-16" label="Sotraya" />

      <p v-reveal="120" class="t-statement mt-16 max-w-[16ch] text-ink">
        Des éléments isolés.<br >Un système qui tourne.
      </p>

      <p v-reveal="240" class="t-lead mt-10 text-ink/65">C'est ce que nous construisons.</p>
    </div>
  </section>
</template>

<style scoped>
.manifesto {
  background-color: var(--color-sage);
}
</style>
