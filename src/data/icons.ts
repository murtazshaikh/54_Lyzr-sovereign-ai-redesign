/* 16px line icons for menu items. Stroke inherits currentColor. */

const wrap = (body: string) =>
  `<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

export const icons = {
  studio: wrap(
    '<rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/>'
  ),
  architect: wrap(
    '<path d="M8 2.5 14 5.5 8 8.5 2 5.5z"/><path d="M2 8.5l6 3 6-3"/><path d="M2 11.5l6 3 6-3"/>'
  ),
  controlplane: wrap(
    '<path d="M3 4.5h10M3 8h10M3 11.5h10"/><circle cx="6" cy="4.5" r="1.4" fill="#fff"/><circle cx="10.5" cy="8" r="1.4" fill="#fff"/><circle cx="7" cy="11.5" r="1.4" fill="#fff"/>'
  ),
  agenticos: wrap(
    '<rect x="4" y="4" width="8" height="8" rx="1.5"/><path d="M6.5 6.5h3v3h-3zM8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5M4 1.5v2.5M12 1.5v2.5M4 12v2.5M12 12v2.5" stroke-width="1.2"/>'
  ),
  sovereign: wrap(
    '<path d="M8 1.8 13 3.6v4.1c0 3.2-2.1 5.4-5 6.5-2.9-1.1-5-3.3-5-6.5V3.6z"/><path d="M5.8 8l1.6 1.6L10.4 6.4"/>'
  ),
  nitro: wrap('<path d="M9 1.5 3.5 9h4l-.5 5.5L12.5 7h-4z"/>'),
  optimus: wrap(
    '<path d="M8 2v3M8 11v3M2 8h3M11 8h3M4 4l2 2M10 10l2 2M12 4l-2 2M6 10l-2 2"/>'
  ),
  cost: wrap(
    '<path d="M8 1.6v12.8"/><path d="M10.9 4.1H6.6a1.9 1.9 0 0 0 0 3.8h2.8a1.9 1.9 0 0 1 0 3.8H4.8"/>'
  ),
  lock: wrap(
    '<rect x="2.8" y="6.9" width="10.4" height="7.1" rx="1.4"/><path d="M5.4 6.9V4.8a2.6 2.6 0 0 1 5.2 0v2.1"/>'
  ),
  audit: wrap(
    '<rect x="2.6" y="2.2" width="10.8" height="11.6" rx="1.4"/><path d="M5.6 7.6l1.5 1.5 3.3-3.3"/>'
  ),
  shield: wrap('<path d="M8 1.8 13 3.6v4.1c0 3.2-2.1 5.4-5 6.5-2.9-1.1-5-3.3-5-6.5V3.6z"/><path d="M5.9 7.9l1.5 1.5 2.8-2.9"/>'),
  search: wrap('<circle cx="7.1" cy="7.1" r="4.3"/><path d="M10.3 10.3 13.6 13.6"/>'),
  scales: wrap('<path d="M8 2.4v11.2M4.2 3.6h7.6M2 12.2h4M10 12.2h4"/><path d="M4 4.2 2 9.4h4zM12 4.2l-2 5.2h4z"/>'),
  doc: wrap('<path d="M9.2 1.9H4.6a1.3 1.3 0 0 0-1.3 1.3v9.6a1.3 1.3 0 0 0 1.3 1.3h6.8a1.3 1.3 0 0 0 1.3-1.3V5.2z"/><path d="M9.2 1.9v3.3h3.5"/><path d="M5.8 9h4.4M5.8 11.3h3"/>'),
  flask: wrap('<path d="M6.4 1.9v3.7L3.1 11.6a1.3 1.3 0 0 0 1.1 2h7.6a1.3 1.3 0 0 0 1.1-2L9.6 5.6V1.9"/><path d="M5.6 1.9h4.8M4.6 9.6h6.8"/>'),
  check: wrap('<circle cx="8" cy="8" r="6.4"/><path d="M5.5 8.2l1.8 1.8 3.4-3.6"/>'),
  play: wrap('<path d="M5.5 3.5v9l7-4.5z" fill="currentColor" stroke="none"/>'),
  external: wrap('<path d="M5 11l6-6M6 5h5v5"/>'),
} as const;

/** Compliance marks. 24-unit viewBox, from Lyzr's own markup. */
const w24 = (body: string) =>
  `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

export const complianceIcons = {
  gdpr: w24(
    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2c-2.76 4-2.76 16 0 20"/><path d="M12 2c2.76 4 2.76 16 0 20"/>'
  ),
  soc2: w24('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  iso: w24(
    '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  ),
  hipaa: w24('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'),
  ccpa: w24(
    '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
  ),
} as const;

export type ComplianceKey = keyof typeof complianceIcons;
