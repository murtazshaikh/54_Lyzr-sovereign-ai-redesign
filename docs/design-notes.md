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

A full-bleed hairline belt that scrolls continuously, with the heading
centred above it.

An operations-board version was built and reverted. It was more
informative on paper and worse in practice: a static table in the
middle of the page killed the movement that gives this section its
life, and the sector column added a row of text nobody needs to read.

- **Colour on hover.** The marks are desaturated at rest and lift to
  full brand colour under the cursor. One asset serves both states
  through a CSS filter; shipping a second coloured set would have
  doubled the payload for the same effect.
- **Only the hovered mark changes.** An earlier version dimmed the rest
  of the set, which made the whole row react to a pointer that is only
  pointing at one thing. The set now holds still and one mark lights.
- **Hover stops the belt**, because a logo wall you cannot read is just
  noise.
- **Edges dissolve** with a mask rather than being cut off.
- **Reduced motion** collapses it to a single static wrapped row.
- **Sprite.** Geometry is defined once and referenced 24 times through
  `<use>`.
- **The belt repeats the set four times** and translates by exactly one
  set. Two copies was not enough: a set is ~1095px, so once the track
  had slid a full set its right edge sat inside a 1440px viewport and
  opened a gap.

Three marks came from a monochrome source and carry their brand colour
applied per shape: AWS `#FF9900`, Hitachi `#E60027`, NVIDIA `#76B900`.

**KPMG needed a judgement call.** Its logo is white letterforms knocked
out of a blue plate. Kept whole, it renders as a solid grey block beside
eight light wordmarks and drags the eye. The plate is dropped and the
letterforms take KPMG blue, which sits with the row at rest and is still
correct on hover.

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

Five figures divided by hairlines rather than five bordered cards.
Numbers use `tabular-nums` so they do not jitter while counting.

## Why it matters

Three columns split by hairlines, not three rounded cards with icons.
That card shape is on the watchlist above and it is exactly what a
generated page reaches for.

**Each figure draws itself.** A meter under every number fills to its
value: 95% nearly closes, 100% closes, and 0% stays empty, which is the
claim made visible rather than asserted. The fill rides the same reveal
as its column, so it draws while the number counts rather than after.

The columns share six grid rows through **subgrid**, so the icon,
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

## The four-step path

Four step cards over one detail panel. The belt advances on its own so
every step's content gets seen without the reader having to click, but
it yields the moment they engage.

- **Active card is ink.** The one dark card in a white row makes the
  selection unmistakable without a highlight colour or a border trick.
- **A dwell bar** fills across the active card, so the advance is
  announced rather than surprising.
- **It yields.** Hover or focus pauses it. A click or arrow key means
  the reader is driving, and the belt stops for good.
- **It idles.** An IntersectionObserver stops the timer whenever the
  section is off screen, so nothing runs in the background.
- **No layout jump.** All four panels sit in one grid cell, so the
  block is as tall as the tallest and the page never shifts when the
  step changes. Measured: all four are 220px.
- **Real tabs.** `role="tablist"`, `aria-selected`, roving tabindex and
  arrow-key navigation, so it works from the keyboard.
- **Reduced motion** disables the auto-advance and the dwell bar
  entirely; the steps become plain clickable tabs.

## The full stack

The source shows three equal cards, one of them dark. By this point in
the page that shape would have been the fourth three-column block and
the second "one dark card" treatment, so it is built differently.

**A sticky index tracking a scrolling column.** The left side holds the
heading and a numbered list of the three products and stays put; the
right side is a long scroll of the three cards. As a card reaches the
middle of the viewport the index highlights it and the card lifts on a
faint purple border.

- **Nearest-to-centre, not `isIntersecting`.** With cards this tall two
  can overlap the trigger band at once and a plain intersection test
  flickers between them. The observer instead measures which card
  centre is closest to the viewport centre.
- **The index is a scroll tracker, so it disappears below 980px**,
  where one column would put it directly above the thing it tracks.
- The aside measures 547px, comfortably inside a 900px viewport, which
  is what keeps the sticky behaviour from breaking.

## Optimus tiers

The source shows a list of four tiers beside a spec panel, which is
close to what the full stack section already does. But these tiers are
literally a scale, one desk to 10,000 users, so the control is one: a
track with four stops that fills up to wherever you are.

- **`role="radiogroup"`** with roving tabindex, arrow keys, Home and
  End. It is a real control, not four buttons that look like one.
- **Every stop up to the active one reads as reached**, so the rail
  shows position on a range rather than just which item is selected.
- **Spec values use the system monospace stack.** Zero bytes, and it
  gives the sheet the feel of hardware documentation.
- **Rows arrive in a 45ms stagger** when the tier changes, so the eye
  reads the sheet top to bottom instead of the block flashing in.
- **No auto-advance here.** The path section already advances on its
  own, and the copy says "pick the appliance", so this one waits.
- All four panels share a grid cell and measure 372px, so switching
  never shifts the page.

## Governance

Two moves here, both about saying more than the source does with the
same content.

**The six controls are ordered by lifecycle, not by their listing
order, and each carries the stage it runs in.** Before production, in
production, every decision. The section's own copy already claims
governance "runs automatically, before production, in production, and
in every decision", so the matrix now demonstrates that claim instead
of sitting next to it. Six generic capability cards became a matrix
that answers when as well as what.

**The controls are one matrix, not six cards.** A 1px grid gap over a
`--line` background draws every rule, so there are no doubled borders
between cells and the block reads as a single table.

**The checklist is drawn, not faded.** Each tick's ring scales in and
then its check stroke draws along a dash offset, staggered 130ms apart,
so the list reads as checks being performed rather than five bullets
appearing. Under reduced motion the marks are simply present.

## Customer stories

A real scroll container, not a transform carousel, so trackpad, touch,
buttons and keyboard all work with almost no code. The rail bleeds past
the shell on the right, which is what tells a reader there is more
without showing a scrollbar.

**It loops, endlessly, both ways.** The rail holds three copies of the
set. The reader always sits in the middle one, and whenever they wander
into an outer copy the scroll position is shifted by exactly one set
width. The shift is the same distance as the content it replaces, so
nothing moves on screen and there is no seam, no rewind, and no dead
end in either direction.

**One story carries the dark treatment**, so the rail has an anchor the
eye returns to as it comes round again.

**Drag to scroll.** A native scroll container gives touch and trackpad
for free but ignores a mouse drag, which is the gesture people reach
for on a rail like this. Pointer capture handles the drag, and a
movement of more than 4px suppresses the click that would otherwise
fire on release.

**Dots, not a progress bar.** A loop has no start or end for a bar to
measure against. A dot press travels to the nearest copy of that story,
so it never scrolls the long way round.

**Metrics and tags are bottom-pinned** so those rows align across cards
despite different quote lengths, and the tags name capabilities from
the governance matrix so the proof points back at the product.

### Three things worth remembering

**Scroll-snap was removed.** Once the trailing cards fit on screen,
their snap positions sit past the maximum scroll, and the browser snaps
backwards to the last reachable one. The rail visibly drifted off the
end on its own. `proximity` did not fix it.

**The buttons step a tracked index** rather than recomputing from
`scrollLeft`, which reads mid-flight values during a smooth scroll and
selects the wrong card.

**The rail's vertical axis is pinned shut.** `overflow-x: auto` makes
the browser compute `overflow-y: auto` too, so the vertical padding
became a small scrollable strip inside the component.

## Testimonials

Full-width rows, not three cards. These are three C-level statements of
equal weight, so none of them earns a column of its own: each gets the
full measure, with the attribution set opposite and a hairline between.
The quote mark is a real glyph at display size rather than an icon, so
it carries the typographic weight of the row, and it lifts from 32% to
full opacity on hover.

## Recognition and compliance

**Lyzr's own badge artwork**, so the analyst logos are real rather than
approximated. The source is near-white on transparency, built for a
dark background, so it is recoloured to `#5d6a88` for a white page.

Getting it small took some work. The recoloured strip at full width was
50KB, and the alpha channel was most of that: at `alpha_q` 90 it was
36KB, at 70 it was 21KB with no visible difference on line art.

**Source width and display width are locked to a 2x ratio.** A first
pass shipped 1400px and rendered it at 1100px, which is 0.64x of what a
retina screen asks for, and it read as soft. It now renders at 601px,
the width Lyzr's own page uses, from a 1202px source: exactly 1.0x,
measured in the browser rather than assumed. 14KB, lazy-loaded and
below the fold.

The perceived vertical stretch was the blur, not the geometry. The
aspect ratio was 8.28 at both natural and rendered size throughout.

**The rule between the two halves is its own element**, sized to match
the badge strip rather than spanning the whole shell. Lining it up with
the artwork above is what makes the block read as one column instead of
three widths stacked. Verified: the divider and the strip are both
601px and every element in the section shares one centre axis.

Compliance is a five-column grid of large outlined marks over centred
labels, held to a 1000px measure so the five items sit closer together
than the shell would place them, matching the source layout rather than the chips it was first
built as. The icon paths come from Lyzr's own markup on a 24-unit
viewBox, kept separate from the 16-unit set the governance matrix uses
so neither drifts when the other changes. Stroke width is thinned to
1.3 because 1.6 reads heavy once a mark is 46px across.

The whole strip is one image, so the recognitions would be invisible to
a screen reader. The `awards` array still exists and now builds the alt
text, which keeps the data meaningful rather than orphaned.

The page's first and only image. Everything else is still inline SVG.

## Resources

**The covers are typeset, not photographed.** Each card's top panel is
a small typographic composition: title over an ink ground with a purple
bloom, a faint vertical rule standing in for a book spine, and the mark
set top-right. A real book mockup would be a couple of hundred KB per
card for what is, in the end, a title on a panel. This costs nothing
and stays sharp at every size.

One card is inverted, the same anchor device the story rail uses.

## Founder quote

Deliberately inert. After a run of tabs, rails and scroll-trackers, one
statement with a lot of air and nothing to click. The sentence the page
has been building to, "you own the intelligence, and now you own the
machine it lives on", is the only part set in full ink; the rest sits
back in slate.

## Closing and footer

The page's one dark passage, and it earns it by being the end. The
closer carries the same purple bloom as the hero, inverted and rising
from the bottom, so the page opens and closes on the same gesture.

The source sets "someone else's" in a serif italic. We hold one
typeface, so the emphasis is carried by colour instead.

The subscribe form has nowhere to post, so it validates and
acknowledges in place rather than navigating away and losing the page.

`#cta` finally resolves. Every in-page anchor now lands on something,
verified against the built page.

## Logo

Lyzr's own mark, in two variants from one source. The published file is
white artwork on transparency (its `_dark` name means "for dark
grounds"), so the header needs it recoloured to ink and the footer and
resource covers take it as-is. 2.7KB each at 240px, which is past 2x
for the 77px the header renders it at.

Both carry their intrinsic `width` and `height`, so the header cannot
shift while the logo loads. The header copy is `eager` with
`fetchpriority="high"` since it is the first thing above the fold;
every other instance is lazy.

## Motion system

One curve became four, each with a job: `--ease` is the house curve,
`--ease-in` for things leaving so they do not linger, `--ease-out` for
entrances, and `--spring` for exactly one thing, the release of a
button press.

**Headlines rise out of a mask, line by line.** Lines are found with
the Range API by walking the text and watching for the top offset to
change, which is where the browser actually broke it. Counting words
would fight `text-wrap: balance`, which nearly every headline uses.
Re-run on resize, since a different width breaks the text differently.
The splitter refuses any headline carrying inline markup rather than
flattening it and silently dropping an emphasis.

**Reading progress** uses the browser's native scroll timeline where it
exists and rAF where it does not. One bug worth remembering: the
`animation` shorthand resets `animation-duration` to `0s`, and a scroll
timeline needs it left at `auto`, so the bar never moved. Longhands
only.

**A whisper of grain** over the whole page. Flat white at this scale
can read as unfinished; the noise gives it a surface. One inline SVG
turbulence, no request.

**Anchors now clear the sticky header.** `scroll-padding-top` on the
root, verified at 96px of clearance.

## Status motion

The three states carry a motion ladder that mirrors the colour ladder:

| State | Colour | Dot | Motion |
|---|---|---|---|
| Live | Green | Heartbeat trace | Sweeping |
| Shipping Q4 | Purple | Ring | One slow outward pulse |
| Coming | Slate | None | None |

**The row that has committed to nothing does not move.** Movement means
something here, so it is spent only where there is something to say.

The live trace is drawn the way a monitor draws: a dim resting line
with a lit segment travelling along it, not a line that blinks. The
path declares `pathLength="100"`, so the sweep is expressed in
percentages and the waveform can be redrawn without recomputing any
animation values.

It is one tall spike, not a full PQRST cycle. The complete waveform was
legible drawn large and mush at 30px, where the P and T waves collapsed
into noise around the spike. Cutting to the single feature that has to
survive let it be twice as tall in the same space.

The two live rows are offset by 420ms so they do not sweep in lockstep,
which would read as one synchronised widget rather than two independent
services.

## Mega menu

One surface, not four panels. A single box carries the background,
border and shadow, and it is the only thing that animates geometry, so
moving between menus reads as one surface travelling rather than a
close and a reopen. Measured mid-flight at `204, 895x378` between
Solutions at `145, 1040x468` and Platform at `250, 780x307`.

Two problems came out of building it:

**Panels are siblings of the box, so nothing clipped them** while it
resized, and the outgoing content hung outside a shrinking box. Both
panels now clip with `clip-path` on the box's own timing. `clip-path`
rather than width, because it hides content without reflowing it.
Worst measured spill across a transition: 1px.

**Both panels were briefly visible at once**, and two dense text panels
at half opacity in the same place read as a smear. The hand-off is now
sequential, out in 120ms and in from 150ms. Measured at 50ms intervals,
two panels are never visible together; the box is briefly empty, which
is what makes the swap feel deliberate.

Everything below the header dims behind a scrim, which is also a click
target for dismissing.

## Anchor hygiene

The built page is checked for duplicate ids and unresolved in-page
anchors. Two real bugs came out of that check: the full stack cards and
this section both claimed `id="optimus"`, and five header links still
pointed at `#stack`, a section that had been deleted. `#cta` is the one
remaining unresolved anchor and resolves when the closing section lands.

## Build status

Sections complete: announcement bar, sticky header with four mega menus, hero, customer wall, stat band, why it matters, the four-step path, the full stack, the Optimus scale, governance, customer stories, testimonials, recognition and compliance, resources, founder quote, closing call to action, footer. The page is complete.
Page is 2224px at 1440, 18KB HTML and 5.3KB CSS gzipped, plus the 29KB font. Still no external scripts and no images. Hero is 884px tall at 1440, so it fits one screen.
No horizontal overflow at 1440, 1280, 834 or 390.
Payload 4.5KB HTML, 3.1KB CSS, both gzipped, plus a 29KB font.
