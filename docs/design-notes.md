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

## Build status

Section 1 of N complete: announcement bar, sticky header, hero.
