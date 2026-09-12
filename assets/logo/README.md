# NestWise logo — SVG reconstruction

Faithful vector reconstruction of the supplied NestWise Services logo. No
redesign, no restyling. Nothing on the website has been changed by this task.

## Files

| File | Purpose |
| --- | --- |
| `nestwise-logo-transparent.svg` | Full lockup, no background |
| `nestwise-logo-cream.svg` | Full lockup on the cream field |
| `nestwise-icon.svg` | Simplified square mark, red N on cream |
| `README.md` | This file |

`nestwise-favicon.png` (512) and `nestwise-touch-icon.png` (180) are rendered
from `nestwise-icon.svg`. The site loads the SVG lockup everywhere the logo
appears, and the icon for the favicon and touch icon.

The earlier PNG lockups and the approval-time `logo-preview.html` have been
removed. The preview page depended on `assets/logo-reference/`, which is no
longer carried in the website repository — the reference art lives in the
build package.

## Colours

Sampled directly from the artwork.

| Value | Role |
| --- | --- |
| `#DE0003` | NESTWISE wordmark, red |
| `#14262F` | SERVICES wordmark, dark charcoal |
| `#8D8E87` | Hive linework, warm grey |
| `#FBF4DD` | Cream background |

## Type

**Asap ExtraBold (800)** — SIL Open Font License 1.1, by Omnibus-Type.

The original lettering does not match any font I could identify, so this is a
substitute chosen by measurement rather than by eye. I compared seventeen heavy
open-licence sans faces against the artwork on two tests: per-letter
width-to-cap-height ratios, and pixel overlap of the whole word set at true
proportions. Asap ExtraBold was the closest on letter proportions (about 8%
average error across N, E, S, T, W, I) and second on overlap. It also has the
softly rounded corners the original shows, which the sharper candidates
(Barlow, Catamaran, Montserrat) do not.

Runners-up, if a different feel is wanted: Barlow ExtraBold (crisper corners,
slightly better pixel overlap), Fredoka Bold (rounder, friendlier, wider).

Both wordmarks are **converted to outline paths**, so the SVGs render
identically everywhere with no webfont to load and no font licence to ship.
The trade-off: editing the words means regenerating from the font, not
retyping. The settings needed to do that:

| | Cap height | Tracking | Baseline |
| --- | --- | --- | --- |
| NESTWISE | 232 units | −0.037 em | y 607 |
| SERVICES | 117 units | −0.045 em | y 782 |

## Coordinate system

The `viewBox` is `12 62 1414 956` — the artwork's own pixel grid, cropped
tight to the ink with a small margin. Every number in the file can be checked
against the reference image directly. The large empty margin in the supplied
screenshot is gone.

## What had to be approximated

Listed plainly, because this is a reconstruction and not a copy.

1. **The typeface is a substitute**, as described above. Letterform overlap
   with the original is about 0.61 — close in weight, proportion and feel, not
   identical. The S and W differ most.

2. **The hive is hand-authored, not traced.** I measured its silhouette off
   the reference row by row and rebuilt it as nine stacked coils plus a lid,
   collar, spike and foot. Widths and heights match the measurements; the exact
   curvature of each coil is my approximation.

3. **Two coils are inferred.** The coils behind NESTWISE (roughly y 392–502)
   and behind SERVICES (roughly y 632–738) are covered by the lettering in the
   only reference available, so their profile is interpolated from the coils
   above and below.

4. **The sketch hatching is representative, not matched.** The original has
   short hand-drawn texture strokes inside the coils. I placed ten equivalent
   strokes in similar positions. They are not stroke-for-stroke copies.

5. **Stroke weight is uniform.** The original linework varies slightly in
   thickness, the way a drawn line does. The reconstruction uses a constant
   6-unit stroke, which is what makes it scale cleanly.

## Two supplied files disagree

The build package describes its `assets/logo-reference/nestwise-logo-reference.png`
as the only supplied logo image, but the approved PNGs from earlier are a
higher-resolution export of the same design — wordmark 1384×241 px against the
reference screenshot's 539×87 px. The reference PNG also carries a one-pixel
black column down its right edge, a screenshot artifact.

The two renderings are **not identical**: the package reference is set about
9% looser. Same typeface, same drawing, different letterspacing.

I built against the higher-resolution file, since it resolves the letterforms
far better. If the package reference is the canonical spacing instead, it is a
one-line change: set NESTWISE tracking to about −0.005 em and regenerate.
