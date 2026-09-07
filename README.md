# Lyzr Sovereign AI, reimagined

A ground-up redesign of [lyzr.ai/sovereign-ai](https://www.lyzr.ai/sovereign-ai/)
in the design language of [ramp.com](https://ramp.com). White ground,
Lyzr's own brand purple, and a type and space system built from scratch.

**[Design notes: every decision and why →](docs/design-notes.md)**

---

## What this is

Sixteen sections, header to footer, rebuilt rather than restyled. Same
content and the same product story, reasoned through again from the
type scale up.

It is a static site. No CMS, no server, no framework runtime. The
entire page is **six requests**:

| Asset | Size |
|---|---|
| HTML | 34 KB gzipped |
| CSS | 12 KB gzipped |
| Font, self-hosted and preloaded | 29 KB |
| Three images: the logo in two tones, and the analyst badge strip | 19 KB total |
| **External JavaScript files** | **none** |

Every image carries its intrinsic dimensions so nothing shifts while
loading, and everything below the fold is lazy.

Every logo, icon, heartbeat trace and laurel is inline SVG. Every
animation is CSS or a few lines of vanilla JavaScript inlined into the
page. No React, no Tailwind, no animation library, no icon package.

## Why it was built this way

The brief asked for six things: design sense, space management,
animation, responsiveness, load time, and no vibe-coding elements.
Those last two shaped nearly every technical decision.

**Astro, and no client framework.** Astro renders components to HTML at
build time and ships no runtime. Next.js would have sent 40 to 90 KB of
React before a single pixel of content. That difference is most of why
this page loads the way it does.

**Hand-written CSS, not a utility framework.** A wall of utility classes
in the markup is the most recognisable signature of a generated page.
The token layer in `src/styles/tokens.css` is the design system: no raw
hex value, spacing number or duration appears anywhere else.

**One typeface.** The source page sets emphasis in a serif italic in
several headlines. Loading a second family for a handful of phrases
costs a request and a render delay, so the emphasis is carried by
colour instead.

**Nothing repeats.** Every section is a different shape by design: an
asymmetric hero, a centred belt, hairline columns, a tab strip, a
sticky index, a scale rail, a matrix, a drag-scroll rail, full-width
quote rows. Three identical card grids in a row is what a template
looks like, and the notes carry a running watchlist of those tells.

**Motion means something.** Status badges carry a heartbeat when live,
one slow pulse when dated, and nothing at all when nothing is
committed. Figures draw meters that fill to their own value, so 0%
renders as an empty bar. The page has one gradient, one dark passage,
and one looping decoration, each spent deliberately.

## How it was built

**Content is data, not markup.** `src/data` holds one typed module per
concern: navigation tree, customer marks, product tiers, footer links.
Editing a nav item or a compliance mark is a one-line change and the
components render whatever is there.

**Everything was measured, not assumed.** Aspect ratios, image
sharpness against device pixel ratio, subgrid alignment, scroll
positions, animation counts and colour contrast were all verified in a
real browser against the production build. Several bugs only surfaced
that way: an image at 0.64× the resolution it needed, a scroll-driven
progress bar silently frozen by a CSS shorthand, a menu panel spilling
outside its own container mid-transition.

**The commit history is part of the work.** Each commit says what
changed and why, including the approaches that were built and then
reverted.

```
src/
  data/        content and design data, one module per concern
  components/  one Astro component per section
  layouts/     page shell, scroll reveal, count-up, line splitting
  scripts/     the line splitter
  styles/      tokens.css and base.css
docs/
  design-notes.md   every decision, and the bugs behind them
```

## Running it

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the build
```

## The sections

| Section | The idea |
|---|---|
| Header | Four mega menus on one morphing surface, hover intent, full keyboard support, native accordions on mobile |
| Hero | Asymmetric split, product substance instead of stock illustration |
| Customer wall | CSS-only endless belt of real vector marks, brand colour on hover |
| Stat band | Five figures on hairlines, counting up once on entry |
| Why it matters | Three columns sharing six subgrid rows, each figure drawing a meter to its own value |
| The path | Four steps that advance on their own, with a strip showing the stack accumulating |
| Full stack | A sticky index tracking a scrolling column |
| Optimus | The tiers are a scale, so the control is one |
| Governance | A matrix that says *when* each control runs, not just what |
| Customer stories | An endless rail you can drag with the mouse |
| Testimonials | Full-width rows, no cards |
| Recognition | Lyzr's own analyst artwork, recoloured for a white page |
| Resources | Covers that are typeset rather than photographed |
| Closing | The page's one dark passage, bookending the hero's bloom |
| Footer | Nine link groups from data, with a form that acknowledges in place |

## Accessibility

Real semantics throughout: `tablist` with roving tabindex, `radiogroup`
for the Optimus scale, live regions where content swaps, `<details>`
accordions on mobile. Every interactive surface works from the
keyboard.

`prefers-reduced-motion` disables the auto-advance, the marquee, the
count-ups, the heartbeat and the reveals rather than merely shortening
them. Every status colour was contrast-checked against its own
background, and gradient or filter effects fall back under
`forced-colors`.

Off-screen sections pause their animations, so nothing loops for a
reader who cannot see it.

## Attribution

Product copy, brand colours, logo and analyst badge artwork are Lyzr's.
Customer and partner marks belong to their owners. This is a design
exercise and is not affiliated with Lyzr.
