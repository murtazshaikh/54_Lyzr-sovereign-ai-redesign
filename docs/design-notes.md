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
| Hero 1130px tall, only half a card above the fold | Display ceiling cut 76px to 66px, top padding reduced. Now 1003px |
| Headline broke into four ragged lines | `max-width` moved to 17ch, settles into three full lines |
| Green status pill sat outside the palette | Desaturated to `#35624f` on `#eff4f2` so it recedes |
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

| State | Meaning | Text | Dot | Contrast |
|---|---|---|---|---|
| Live | Shipped and running | `#067a4e` | Solid `#16a34a` | 4.8:1 |
| Shipping Q4 | Dated, pre-orderable | `#5433d6` | Ring `#7458e8` | 6.3:1 |
| Coming | No date committed | `#4a5878` | None | 6.2:1 |

The dot runs brighter than the text beside it. It carries no reading
load, so it can be fully saturated while the label stays legible. That
is where the colour feels alive without any chip failing AA. The menu's
New and OSS badges pull from the same two ramps.

Before this, Coming and Shipping Q4 shared one purple, which flattened
a real distinction: one is orderable today, the other has no date.
Purple is now spent on the state the page is actually selling, and the
hollow dot says dated but not yet true.

## Customer wall

A full-bleed hairline-ruled belt, not a static grid. The heading block
is centred, which deliberately contrasts with the asymmetric hero so
the two sections do not read as the same shape twice.

- **Motion** is pure CSS. Four copies of the set translate by exactly
  one set width, -25%, landing on an identical frame. Two copies was
  not enough: a set is ~1095px, so once the belt had slid a full set
  its right edge sat inside a 1440px viewport and opened a gap. Four
  covers viewports to ~3280px.
- **Hover** stops the belt so a logo can actually be read, then the set
  recedes and the one under the cursor resolves. Same grammar as the
  hero's partner row, so the page has one interaction language.
- **Edges** dissolve with a mask rather than being cut off.
- **Reduced motion** collapses it to a single static wrapped row.
- **Sprite.** Geometry is defined once and referenced 24 times through
  `<use>`. Inlined per instance it was 111KB of markup.
- **Density.** The first pass was 631px tall at 1440 with 320px of that
  being padding, so half the band was empty. It now runs 388px. This is
  a proof strip, not a headline section, so it takes about half the
  page's section rhythm and the heading drops a step below h2, from
  52px to 34px, introducing the belt instead of competing with the hero.

### Logo pipeline

Source SVG, strip any embedded raster, svgo at precision 2, measure the
real bounding box in a browser, store that as the viewBox. Tight boxes
mean `height` alone controls optical size.

| Step | HTML raw | HTML gzip |
|---|---|---|
| Inlined per instance | 111KB | 19.2KB |
| Sprite + `<use>` | 88KB | 19.1KB |
| Sprite + svgo | 80KB | 15.7KB |

Cap heights are per logo, not shared: wide wordmarks read heavy at a
given height and compact glyphs read light, so the row is balanced by
eye. Movate 21, Accenture 22, Persistent 21, Hitachi 19, AWS 25,
NVIDIA 24.

**Do not hand-round SVG path data.** Arc flags can be written without
separators, so a naive number rewriter changes an arc's argument count
and the path silently collapses. That is exactly what happened to the
Hitachi mark before svgo replaced the regex.

Eight marks: Movate, Accenture, Persistent, NTT Data, Hitachi, KPMG,
AWS, NVIDIA. Ordered so the two compact glyph marks do not sit next to
each other.

Two source quirks worth recording:

- **KPMG** is white letterforms knocked out of a blue plate. Flattened
  to one colour the plate swallows the letters and the mark renders as
  a solid block, so the plate is dropped and the letterforms kept.
- **Movate** ships a full raster copy of itself alongside its vector
  paths. Stripping the embedded image took the file from 600KB to 19KB
  before svgo even ran.

Three names on the source wall are omitted because they publish no
vector mark that could be found: Firstsource, WTW and MSP Corp. Mixing
a PNG into a row of crisp vectors would show at any zoom.

## Stat band

Five figures divided by hairlines rather than five bordered cards, each
under the same short purple tick the mega menu column titles use.
Numbers use `tabular-nums` so they do not jitter while counting.

## Why it matters

Three columns split by hairlines, not three rounded cards with icons.
That card shape is on the watchlist above and it is exactly what a
generated page reaches for.

The columns share five grid rows through **subgrid**, so the icon,
heading, body, figure and caption of all three sit on the same
baselines however the copy wraps. Bottom-pinning the figure was tried
first and was not enough: column one's caption wraps to two lines,
which pushed its own number up by 20px. Splitting value and caption
into their own shared rows, with the wrapper set to `display: contents`
so its children join the grid, fixes it. Below 881px the columns stack
and the subgrid block does not apply.

## Count-up

One implementation in the layout serves both sections. Any element with
`data-count` animates from zero once, when it first enters view, on the
same cubic curve as the CSS easing so the motion feels of a piece.

Under `prefers-reduced-motion` the numbers are never blanked in the
first place, so a reader who has asked for stillness sees the real
figure immediately rather than a zero that never animates.

## Build status

Sections complete: announcement bar, sticky header with four mega menus, hero, customer wall, stat band, why it matters.
Page is 2224px at 1440, 18KB HTML and 5.3KB CSS gzipped, plus the 29KB font. Still no external scripts and no images. Hero is 884px tall at 1440, so it fits one screen.
No horizontal overflow at 1440, 1280, 834 or 390.
Payload 4.5KB HTML, 3.1KB CSS, both gzipped, plus a 29KB font.
