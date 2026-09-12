# NestWise Services — final client revision

One-page private revision for NestWise Services. Window cleaning is the primary
service across Utah, Salt Lake, Wasatch, and Summit County service areas.

**Status: local draft. Not deployed, not indexed, form not connected.**
`<meta name="robots" content="noindex, nofollow">` stays until launch.

## Run it

From the repository root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/previews/nestwise-services/>

No build step, no dependencies. One webfont family (Asap) from Google Fonts.

## Structure

```
previews/nestwise-services/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── logo/          approved SVG lockups, icon, favicon, touch icon
    └── photos/
        ├── web/       optimized derivatives used by the page
        └── og-share.png
```

The repository carries only what the page loads. The photo originals and the
logo reference art live in the separate NestWise build package, not here.
Regenerating the derivatives requires that package.

## Privacy edits

Three photos carry a privacy treatment. In every case it is applied only to
the web derivatives; the originals in the build and update packages are
untouched, and nothing else in any photo has been altered.

- `exterior-wash-*` (IMG_0712) — the house number on the fascia. It sits in
  the centre of the frame, so cropping it away would have lost the worker and
  the ladders.
- `permanent-lighting-*` — the house number plaque on the stone column between
  the garage doors. The frame is also cut at x=1700 to drop the truck at the
  right edge.
- `traditional-christmas-lights-*` (IMG_1018) — a small house number above the
  front door is feather-blurred. The crop removes the black band from the
  supplied image while preserving the lighting display.

## September photo review

All eleven newly supplied files were reviewed. The finished page uses the
strongest verified hard-water pair and IMG_1018 for traditional Christmas
lights. The remaining new files stay in the client source package rather than
the website because they were weaker, repetitive, screen captures, or
introduced avoidable distractions.

The selected hard-water pair is `Screenshot 2026-09-08 at 7.05.58 PM.png`
(Before) and `Screenshot 2026-09-08 at 7.06.28 PM.png` (After). The frame,
trim, ground details, and damage marks confirm the same window. The optimized
derivatives remove the phone interface and use matching 4:5 crops with
site-native labels.

The gutter presentation uses `IMG_1029(2).jpeg` as Before and
`IMG_1030(2).jpeg` as After. The roofline, gutter, lighting clips, fence, and
tree placement confirm the same project. The responsive derivatives preserve
the full source frames, while matching 4:5 display crops and site-native labels
make the comparison consistent in the page layout. Neither gutter source
required a privacy edit.

## Open questions — search `CONFIRM:` in index.html

1. Final domain and canonical URL
2. Production form endpoint

The approved service-area grouping places Hideout under Wasatch County.

## Claims audit

Everything on the page is confirmed. Cesar has since confirmed the following,
which earlier drafts deliberately left out:

- insured
- owner operated, run personally by Cesar with help when needed
- residential and commercial service
- the four county service areas and supplied communities
- Permanent Lighting as the exact public service name
- post-construction window cleaning
- gutter cleaning and resealing
- traditional Christmas light services

Still deliberately absent, because they remain unconfirmed: licensing,
certifications, guarantees, warranties, free estimates, prices, years in
business, employee count, business history, and any brand, product or dealer
name for the lighting.

The three review cards reproduce verified Google review wording exactly. Their
displayed reviewer names use first name and last initial: Kamren N., Amber P.
and Jeff M. The footer links only to the confirmed Facebook, Instagram and
Google Business profiles.

The hard water copy states that buildup can be harder to remove over time and
may damage glass. It promises no result.

The two hard water photos are a verified matched before-and-after pair of the
same window. The website uses matching crops and accessible site-native labels.

## Form

No `action`, no endpoint, and no third-party script. `script.js` validates for
the user's benefit, then answers on-page. Nothing leaves the browser.
