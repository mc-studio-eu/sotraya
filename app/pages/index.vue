<script setup lang="ts">
import { LEGAL } from '~/utils/legal'

// canonical lives per page; the legal pages set their own
useHead({
  link: [{ rel: 'canonical', href: `${LEGAL.siteUrl}/` }]
})
</script>

<template>
  <SecHero />
  <SecProbleme />
  <SecManifesto />
  <SecServices />
  <SecDemo />
  <SecScope />
  <SecRealisations />
  <SecMethode />
  <SecPropriete />
  <SecOrigine />
  <SecCta />
</template>
