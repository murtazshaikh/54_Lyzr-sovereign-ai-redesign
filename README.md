# Lyzr Sovereign AI, reimagined

A ground-up redesign of [lyzr.ai/sovereign-ai](https://www.lyzr.ai/sovereign-ai/)
in the design language of [ramp.com](https://ramp.com): white ground,
Lyzr's own brand purple, and a type and space system built from scratch.

**[Design notes and rationale →](docs/design-notes.md)**

---

## What it weighs

The entire page is four requests.

| Asset | Size |
|---|---|
| HTML | 31 KB gzipped |
| CSS | 11 KB gzipped |
| Font, self-hosted and preloaded | 30 KB |
| One image, lazy-loaded below the fold | 14 KB |
| **External JavaScript files** | **none** |

Every logo and icon is inline SVG. Every animation is CSS, or a few
lines of vanilla JavaScript inlined into the page. There is no
framework runtime, no animation library, and no icon package.

## Running it

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the build
```

## How it is put together

```
src/
  data/        content and design data, one module per concern
  components/  one Astro component per section
  layouts/     page shell, scroll reveal, count-up
  styles/      tokens.css and base.css
```

**Content lives in `src/data`, not in markup.** Editing a nav link, a
customer story or a compliance mark is a one-line change in a typed
module, and the components render whatever is there.

**`tokens.css` is the design system.** No raw hex value, spacing number
or animation duration appears anywhere else in the codebase.

## The sections

| Section | The idea |
|---|---|
| Header | Four mega menus, hover intent, full keyboard support, native `<details>` accordions on mobile |
| Hero | Asymmetric split, product substance instead of stock illustration |
| Customer wall | CSS-only endless belt of real vector logos, pauses on hover |
| Stat band | Five figures on hairlines, counting up once on entry |
| Why it matters | Three columns sharing five subgrid rows so every baseline aligns |
| The path | Four steps that advance on their own and yield the moment you engage |
| Full stack | A sticky index tracking a scrolling column |
| Optimus | The tiers are a scale, so the control is one |
| Governance | A matrix that says *when* each control runs, not just what it does |
| Customer stories | An endless rail you can drag with the mouse |
| Testimonials | Full-width rows, no cards |
| Recognition | Real analyst artwork, recoloured for a white page |
| Resources | Covers that are typeset rather than photographed |
| Closing | The page's one dark passage, bookending the hero's bloom |

## Decisions worth knowing

Each of these is explained in full in the [design notes](docs/design-notes.md).

- **No utility-class framework, no animation library.** Both are the
  most recognisable signature of a generated page. The notes carry a
  running watchlist of those tells and where this build stands on each.
- **One typeface.** The source uses a serif italic for emphasis in
  several headlines. Rather than load a second family for a handful of
  phrases, the emphasis is carried by colour.
- **Nothing repeats.** Every section is a different shape by design.
  Three identical card grids in a row is what a template looks like.
- **Every claim was measured, not assumed.** Aspect ratios, image
  sharpness, subgrid alignment, scroll positions and colour contrast
  were all verified in a real browser against the production build.

## Accessibility

Real semantics throughout: `tablist` with roving tabindex, `radiogroup`
for the Optimus scale, live regions where content swaps. Every
interactive surface works from the keyboard. `prefers-reduced-motion`
disables the auto-advance, the marquee, the count-ups and the reveals
rather than merely shortening them. Colour contrast on every status
colour was checked against its own background.

## Attribution

Product copy, brand colours, logo and analyst badge artwork are Lyzr's.
Customer and partner marks belong to their owners. This is a design
exercise, not affiliated with Lyzr.
