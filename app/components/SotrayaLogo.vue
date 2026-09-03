<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
</script>

<template>
  <span class="inline-flex items-center gap-3">
    <SotrayaMark class="h-[1.15em] w-auto shrink-0" label="" aria-hidden="true" />
    <span v-if="!compact" class="wordmark">Sotraya</span>
    <span class="sr-only">Sotraya</span>
  </span>
</template>

<style scoped>
.wordmark {
  font-family: var(--font-display);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.19em;
  line-height: 1;
  /* the lockup's optical trailing space, so the tracking doesn't push it off-centre */
  padding-right: 0.19em;
}
</style>
