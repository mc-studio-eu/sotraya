<script setup lang="ts">
import { MARK_MODULES, MARK_VIEWBOX } from '~/utils/mark'

withDefaults(defineProps<{ label?: string }>(), { label: 'Sotraya' })
</script>

<template>
  <svg
    :viewBox="`0 0 ${MARK_VIEWBOX.w} ${MARK_VIEWBOX.h}`"
    role="img"
    :aria-label="label"
    fill="currentColor"
  >
    <path
      v-for="(m, i) in MARK_MODULES"
      :key="i"
      :d="m.d"
      :transform="`translate(${m.x} ${m.y}) scale(${m.sx} ${m.sy})`"
    />
  </svg>
</template>
