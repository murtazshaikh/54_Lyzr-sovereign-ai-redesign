# Lyzr Sovereign AI — redesign notes

Rebuild of `lyzr.ai/sovereign-ai` in the design language of `ramp.com`.
White ground, Lyzr brand purple used sparingly.

## Stack, and why

| Choice | Reason |
|---|---|
| Astro, static output | Ships no JS framework. The built page has zero external script files. |
| Hand-authored CSS | No utility-class framework. The token layer is the design system. |
| Self-hosted variable font | One 29KB woff2, preloaded. No third-party font request, no layout shift. |
| CSS transitions + IntersectionObserver | The whole motion system is 739 bytes of inlined JS. No animation library. |

## Token layer

Everything resolves to `src/styles/tokens.css`. No raw hex, spacing value or
duration appears anywhere else in the codebase.

- **Ink** `#13112a` headlines, `#4a4762` body, `#8f9bb7` captions
- **Brand** `#7458e8` primary, `#2e2270` for purple text that must pass AA,
  `#f7f5ff` as the alternating section ground
- **Line** `rgba(19,17,42,0.08)` hairlines carry the structure. Shadows are
  used once, at 1px, on the hero card
- **Type** fluid `clamp()` from 40px to 76px display. Negative tracking scales
  with size: -0.035em on display, -0.02em on h3
- **Space** 4px base, twelve fixed steps. Section rhythm is a single
  `--section-y` that runs 72px to 160px
- **Radius** 4/6/8px only. Nothing is a pill except status chips
- **Motion** one easing curve, three durations

## AI-generated signature watchlist

Tells that make a site read as machine-generated, and where this build stands.

| Tell | Status |
|---|---|
| Tailwind utility soup in markup | Avoided. Semantic classes, scoped CSS |
| Framer Motion / AOS dependency | Avoided. 20 lines of IntersectionObserver |
| Inter as the typeface | Avoided. Instrument Sans |
| Purple-to-pink gradient headlines | Avoided. Flat ink headlines |
| Glassmorphism cards, heavy blur | Avoided. One 12px blur on the sticky header only |
| Large radii everywhere, 16px+ pills | Avoided. 4/6/8px |
| Emoji as section icons | Avoided |
| Three-column feature grid of identical cards | To watch. Vary section shapes |
| Every element fading up on scroll | To watch. Reveal only leads and card groups |
| Stock 3D blobs or generic isometric art | Avoided. Visuals are real product content |
| Lorem-flavoured filler copy | Avoided. Lyzr's own copy, restructured |
| Centred everything, no asymmetry | To watch. Hero is asymmetric 1.05:0.95 |
| Uniform section padding with no rhythm | To watch. Vary density between sections |

## Review pass 1 — section 1

Six issues found on first visual review and fixed.

| Issue | Fix |
|---|---|
| Dead quadrant under the stack card | Trust row moved out of the grid to span the full shell |
| Hero 1130px tall, only half a card above the fold | Display ceiling cut 76px to 66px, top padding reduced. Now 1003px |
| Headline broke into four ragged lines | `max-width` moved to 17ch, settles into three full lines |
| Green status pill sat outside the palette | Desaturated to `#35624f` on `#eff4f2` so it recedes |
| Partner names were plain text at 42% opacity | Real monochrome SVG marks, inlined, about 4KB total |
| Announcement bar lost its message on phones | Short variant swaps in under 1020px |

Note on the Azure mark: the Wikimedia source layers four paths, two of
which are shading overlays that flatten into noise in monochrome.
Paths 0, 1 and 3 give the correct silhouette with its counter.

## Review pass 2 — section 1

| Change | Why |
|---|---|
| Announcement chip became a beacon dot plus label | A filled purple chip reads as a button. A pulsing dot reads as news |
| Sign in demoted to a text link | Four buttons above the fold was too many. Book a demo is now the only nav control |
| Optimus row highlighted at rest | The hero button sells Optimus, so the card points at it |
| Chevrons on Solutions, Platform, Partners, Resources | Signals the mega menus without building them |
| Hero bloom raised from 10% to 17% | Was faint enough to read as a rendering artefact |
| Copy column widened to 1.1fr | "leading enterprises" needed 552px and had 551. Now has 594 |

The beacon is the one deliberate looping animation on the page. It is a
status signal, not decoration, and stops under `prefers-reduced-motion`.

## Mega menus

Four dropdowns transcribed from the source site, rendered in the page's
own language: white panel, hairline border, one soft shadow because the
layer genuinely floats. Column titles carry a short purple rule.

- **Data** lives in `src/data/nav.ts`. Icons in `src/data/icons.ts`,
  partner marks in `src/data/marks.ts` shared with the hero.
- **Open** on hover after a 60ms intent delay, on click, on focus.
  **Close** on Escape, outside pointer, focus leaving, or 140ms after
  the pointer leaves. A 14px invisible bridge covers the gap between
  trigger and panel.
- **Placement** clamps each panel inside the shell, so the two 1040px
  panels never spill past the right edge.
- **Mobile** uses native `<details>` accordions. No JS.
- **Cost** about 5.6KB gzipped HTML, no images. The Featured strip
  is text cards with a play mark rather than video thumbnails.
- **Panel widths** 560 / 780 / 1040. Tinted first columns get 1.35fr.
  Titles and plain labels never wrap; described labels may.

## Status badges

Three states doing three different jobs, so each gets its own colour
and its own dot. The dot carries the meaning too, so the ladder still
reads with colour stripped out.

| State | Meaning | Colour | Dot | Contrast |
|---|---|---|---|---|
| Live | Shipped and running | Green `#35624f` | Solid | 6.3:1 |
| Shipping Q4 | Dated, pre-orderable | Purple `#2e2270` | Ring | 11.4:1 |
| Coming | No date committed | Slate `#5b6480` | None | 5.3:1 |

Before this, Coming and Shipping Q4 shared one purple, which flattened
a real distinction: one is orderable today, the other has no date.
Purple is now spent on the state the page is actually selling, and the
hollow dot says dated but not yet true.

## Build status

Section 1 complete after three review passes: announcement bar, sticky header with four mega menus, hero, partner row. Hero is 884px tall at 1440, so it fits one screen.
No horizontal overflow at 1440, 1280, 834 or 390.
Payload 4.5KB HTML, 3.1KB CSS, both gzipped, plus a 29KB font.
