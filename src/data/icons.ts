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
  check: wrap('<circle cx="8" cy="8" r="6.4"/><path d="M5.5 8.2l1.8 1.8 3.4-3.6"/>'),
  play: wrap('<path d="M5.5 3.5v9l7-4.5z" fill="currentColor" stroke="none"/>'),
  external: wrap('<path d="M5 11l6-6M6 5h5v5"/>'),
} as const;

export type IconKey = keyof typeof icons;
