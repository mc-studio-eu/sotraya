<script setup lang="ts">
import { computed } from 'vue'

/**
 * A brand render served responsively (avif → webp → jpg).
 * Derivatives live in /public/visuals and are produced by `npm run visuals`
 * from the originals in /visuals-src.
 */

const props = withDefaults(
  defineProps<{
    /** basename of the render, e.g. "structure" */
    name: string
    alt: string
    /**
     * aspect-ratio of the frame; the render is cropped to fill it.
     * Omit it and set `--visual-ratio` from the section instead when the
     * crop has to change across breakpoints.
     */
    ratio?: string
    sizes?: string
    /** placeholder tone while the file loads */
    tone?: 'light' | 'dark'
    eager?: boolean
  }>(),
  { ratio: undefined, sizes: '100vw', tone: 'light', eager: false }
)

const WIDTHS = [800, 1280, 1920]

const srcset = (ext: string) =>
  WIDTHS.map((w) => `/visuals/${props.name}-${w}.${ext} ${w}w`).join(', ')

const avif = computed(() => srcset('avif'))
const webp = computed(() => srcset('webp'))
const jpg = computed(() => srcset('jpg'))
</script>

<template>
  <figure class="visual" :class="`visual--${tone}`" :style="ratio ? { '--visual-ratio': ratio } : undefined">
    <div class="frame">
      <picture>
        <source type="image/avif" :srcset="avif" :sizes="sizes">
        <source type="image/webp" :srcset="webp" :sizes="sizes">
        <img
          :src="`/visuals/${name}-1920.jpg`"
          :srcset="jpg"
          :sizes="sizes"
          :alt="alt"
          :loading="eager ? 'eager' : 'lazy'"
          :fetchpriority="eager ? 'high' : 'auto'"
          decoding="async"
          width="1456"
          height="1092"
        >
      </picture>
    </div>
    <figcaption v-if="$slots.default" class="t-mono caption"><slot /></figcaption>
  </figure>
</template>

<style scoped>
.frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: var(--visual-ratio, 4 / 3);
  background-color: var(--color-stone);
}

.visual--dark .frame {
  background-color: var(--color-ink-soft);
}

.frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* settles out of a slow push-in as the section reveals */
  transform: scale(1.05);
  transition: transform 1.6s var(--ease-out-expo);
}

/* .reveal / .is-in are added by the v-reveal directive on this root element */
.visual.is-in .frame img,
.visual:not(.reveal) .frame img {
  transform: none;
}

.caption {
  margin-top: 1rem;
  color: var(--color-mute);
}

.visual--dark .caption {
  color: var(--color-mute-dark);
}

@media (prefers-reduced-motion: reduce) {
  .frame img {
    transform: none;
    transition: none;
  }
}
</style>
