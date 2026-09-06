/**
 * A single heartbeat cycle. `pathLength="100"` normalises the path so
 * the sweep can be expressed in percentages rather than measured
 * lengths, which would change with any edit to the curve.
 *
 * Two copies of the path: a dim resting trace, and a lit segment that
 * travels along it, which is how a monitor actually draws.
 */
// One tall spike on a flat line. A full PQRST cycle was legible at
// print size and mush at 30px, so the waveform is reduced to the one
// feature that has to survive: the beat itself.
const D = "M0 7h10l2.2-5.5 2.6 11 2.2-5.5H32";

export const ekg = `<svg class="ekg" viewBox="0 0 32 14" fill="none" aria-hidden="true" focusable="false">
  <path class="ekg__base" d="${D}" pathLength="100" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path class="ekg__lit" d="${D}" pathLength="100" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
