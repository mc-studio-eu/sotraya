<template>
  <div class="big" aria-hidden="true">
    <SotrayaMark class="big-mark" label="" />
    <span class="big-word">Sotraya</span>
  </div>
</template>

<style scoped>
.big {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 3vw, 2.5rem);
  padding-block: clamp(4rem, 10vw, 8rem);
}

.big-mark {
  height: clamp(2.5rem, 8vw, 7rem);
  width: auto;
  flex-shrink: 0;
}

.big-word {
  font-family: var(--font-display);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: clamp(2rem, 9.5vw, 9rem);
  line-height: 1;
  white-space: nowrap;
}
</style>
