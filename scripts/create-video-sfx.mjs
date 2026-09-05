import {mkdirSync, writeFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

// A restrained sound-design bed: no music or voice-over, only soft clicks,
// low impacts and short whooshes synchronised with the film's system motion.
const sampleRate = 44100;
const duration = 30;
const samples = sampleRate * duration;
const left = new Float32Array(samples);
const right = new Float32Array(samples);

let seed = 310819;
const noise = () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647 * 2 - 1;
};
const add = (time, length, fn, pan = 0) => {
  const start = Math.floor(time * sampleRate);
  const end = Math.min(samples, start + Math.floor(length * sampleRate));
  for (let i = start; i < end; i++) {
    const t = (i - start) / sampleRate;
    const value = fn(t);
    left[i] += value * (1 - Math.max(0, pan));
    right[i] += value * (1 + Math.min(0, pan));
  }
};

for (let i = 0; i < samples; i++) {
  const t = i / sampleRate;
  const bed = (Math.sin(t * Math.PI * 2 * 43) * .0025 + noise() * .0012) * (0.7 + 0.3 * Math.sin(t * .17));
  left[i] = bed;
  right[i] = bed;
}

const click = (t, pan = 0) => add(t, .085, (x) => {
  const envelope = Math.exp(-x * 57);
  return (Math.sin(Math.PI * 2 * (780 + x * 1200) * x) * .035 + noise() * .018) * envelope;
}, pan);
const pulse = (t, pan = 0) => add(t, .46, (x) => {
  const envelope = Math.exp(-x * 8);
  return (Math.sin(Math.PI * 2 * (92 - x * 26) * x) * .07 + Math.sin(Math.PI * 2 * 184 * x) * .018) * envelope;
}, pan);
const whoosh = (t, pan = 0) => add(t, .42, (x) => {
  const envelope = Math.sin(Math.min(1, x / .09) * Math.PI / 2) * Math.exp(-Math.max(0, x - .09) * 7);
  return (noise() * .025 + Math.sin(Math.PI * 2 * (160 + x * 1120) * x) * .012) * envelope;
}, pan);
const impact = (t) => add(t, .9, (x) => (
  Math.sin(Math.PI * 2 * (57 - x * 23) * x) * .125 * Math.exp(-x * 4.5) + noise() * .012 * Math.exp(-x * 18)
));

click(.38, -.45); click(.72, .3); click(1.05, -.2); click(1.42, .45); click(1.84, -.3); impact(2.48);
click(3.35); whoosh(6.7); click(7.15); whoosh(9.72);
[10.1, 10.52, 10.92, 11.31, 11.68].forEach((time, i) => click(time, [-.6, -.25, 0, .25, .6][i]));
pulse(13.45);
[14.3, 15.1, 15.9, 16.7, 17.5, 18.3].forEach((time, i) => { pulse(time, i % 2 ? .24 : -.24); click(time + .06); });
whoosh(19.82); pulse(20.25); click(21.16); click(22.08); pulse(23.56);
[24.28, 25.02, 25.76].forEach((time, i) => { click(time, i === 1 ? 0 : i ? .25 : -.25); pulse(time + .03, i === 1 ? 0 : i ? .25 : -.25); });
whoosh(26.82); impact(27.18); click(28.55);

const bytes = Buffer.alloc(44 + samples * 4);
bytes.write('RIFF', 0); bytes.writeUInt32LE(36 + samples * 4, 4); bytes.write('WAVE', 8);
bytes.write('fmt ', 12); bytes.writeUInt32LE(16, 16); bytes.writeUInt16LE(1, 20); bytes.writeUInt16LE(2, 22);
bytes.writeUInt32LE(sampleRate, 24); bytes.writeUInt32LE(sampleRate * 4, 28); bytes.writeUInt16LE(4, 32); bytes.writeUInt16LE(16, 34);
bytes.write('data', 36); bytes.writeUInt32LE(samples * 4, 40);
for (let i = 0; i < samples; i++) {
  bytes.writeInt16LE(Math.max(-1, Math.min(1, left[i])) * 32767, 44 + i * 4);
  bytes.writeInt16LE(Math.max(-1, Math.min(1, right[i])) * 32767, 46 + i * 4);
}

const output = resolve('public/audio/sotraya-brand-film-sfx.wav');
mkdirSync(dirname(output), {recursive: true});
writeFileSync(output, bytes);
console.log(`Generated ${output}`);
