<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { MARK_MODULES } from '~/utils/mark'
import { useScrollProgress } from '~/composables/useScrollProgress'

/**
 * The page's signature: the six modules of the Sotraya symbol arrive scattered,
 * connect into the S, then — as the hero scrolls away — resolve into the
 * 01 INPUT → 02 PROCESS → 03 ACTION → 04 RESULT chain the brand runs on.
 */

const CANVAS = { w: 560, h: 380 }
const SYMBOL_SCALE = 1.55
const ORIGIN = { x: 153.8, y: 79.7 }

/** Where each module comes from on page load. */
const SCATTER = [
  { dx: 92, dy: -74 },
  { dx: 132, dy: -30 },
  { dx: 58, dy: 92 },
  { dx: -112, dy: 42 },
  { dx: -84, dy: 82 },
  { dx: -134, dy: -52 }
]

/** Where each module lands once the symbol becomes a workflow. */
const FLOW = [
  { x: 168, y: 152.9, s: 1.05 },
  { x: 296, y: 175.4, s: 1 },
  { x: 338, y: 160.2, s: 1.3 },
  { x: 44, y: 159.2, s: 1.3 },
  { x: 428, y: 152.5, s: 1.05 },
  { x: 126, y: 175.4, s: 1 }
]

const CONNECTORS = [
  { x1: 92, x2: 121 },
  { x1: 150, x2: 163 },
  { x1: 257, x2: 291 },
  { x1: 320, x2: 333 },
  { x1: 386, x2: 423 }
]

const STEPS = [
  { x: 66.9, n: '01', label: 'Input' },
  { x: 211.2, n: '02', label: 'Process' },
  { x: 360.7, n: '03', label: 'Action' },
  { x: 471.9, n: '04', label: 'Result' }
]

const { target, progress } = useScrollProgress()
const entry = ref(0)
let frame = 0

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))
/** Holds the S together for the first half of the scroll, then resolves the chain. */
const flowT = computed(() => easeOutExpo(clamp01((progress.value - 0.12) / 0.68)))
const chainT = computed(() => clamp01((progress.value - 0.5) / 0.35))

const transforms = computed(() =>
  MARK_MODULES.map((m, i) => {
    const e = easeOutExpo(clamp01((entry.value - i * 0.08) / 0.62))
    const scatter = SCATTER[i]!
    const flow = FLOW[i]!

    const ax = ORIGIN.x + m.x * SYMBOL_SCALE
    const ay = ORIGIN.y + m.y * SYMBOL_SCALE
    const asx = m.sx * SYMBOL_SCALE
    const asy = m.sy * SYMBOL_SCALE

    const t = flowT.value
    const x = lerp(lerp(ax + scatter.dx, ax, e), flow.x, t)
    const y = lerp(lerp(ay + scatter.dy, ay, e), flow.y, t)
    const sx = lerp(asx, m.sx * flow.s, t)
    const sy = lerp(asy, m.sy * flow.s, t)

    return { transform: `translate(${x} ${y}) scale(${sx} ${sy})`, opacity: e }
  })
)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    entry.value = 1
    return
  }
  const start = performance.now()
  const run = (now: number) => {
    entry.value = clamp01((now - start) / 1500)
    if (entry.value < 1) frame = requestAnimationFrame(run)
  }
  frame = requestAnimationFrame(run)
})

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <div ref="target" class="morph">
    <svg :viewBox="`0 0 ${CANVAS.w} ${CANVAS.h}`" class="w-full h-auto" aria-hidden="true">
      <g class="chain" :style="{ opacity: chainT }">
        <g v-for="(c, i) in CONNECTORS" :key="`c${i}`">
          <line :x1="c.x1" y1="186" :x2="c.x2 - 5" y2="186" stroke="currentColor" stroke-width="1" />
          <path
            :d="`M${c.x2 - 5.5} 182.6 L${c.x2} 186 L${c.x2 - 5.5} 189.4 Z`"
            fill="currentColor"
          />
        </g>
        <g v-for="s in STEPS" :key="s.n" :transform="`translate(${s.x} 0)`" text-anchor="middle">
          <text y="248" class="step-n">{{ s.n }}</text>
          <text y="262" class="step-l">{{ s.label }}</text>
        </g>
      </g>

      <g fill="currentColor">
        <path
          v-for="(m, i) in MARK_MODULES"
          :key="i"
          :d="m.d"
          :transform="transforms[i]!.transform"
          :opacity="transforms[i]!.opacity"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.morph {
  color: var(--color-ink);
}

.chain {
  color: color-mix(in srgb, var(--color-ink) 45%, transparent);
}

.step-n,
.step-l {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  fill: color-mix(in srgb, var(--color-ink) 55%, transparent);
}

.step-l {
  font-size: 8px;
  fill: color-mix(in srgb, var(--color-ink) 38%, transparent);
}
</style>
