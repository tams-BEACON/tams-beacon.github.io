# BEACON Design System

**B.E.A.C.O.N. — Build Experiences And Career Opportunities Now**

A student club that connects students with industry professionals for experiences, internships, and presentations.

## Sources

- **Logo / Mascot**: `uploads/shiba_inu.png` — pixel-art Shiba Inu in bow tie with "B.E.A.C.O.N." logotype
- No external Figma links or GitHub repos were provided. Design system is derived from the logo asset and brand brief.

---

## CONTENT FUNDAMENTALS

**Tone:** Warm, encouraging, and direct. BEACON speaks like a trusted mentor or a knowledgeable older student — not a corporate HR department. The voice is confident but never condescending.

**Person:** Second-person ("you", "your") for user-facing content. First-person plural ("we", "our") for club communications. Never cold third-person.

**Casing:**
- Brand name: always **B.E.A.C.O.N.** (with periods, all caps) in logotype contexts
- Headings: Title Case for major headings; sentence case for body and UI labels
- CTAs: Short, imperative — "Apply Now", "Meet the Team", "Explore Opportunities"

**Punctuation:** Oxford comma is used. Em dashes (—) preferred over parentheses for asides.

**Emoji:** Not used in primary brand communications. The pixel-art mascot serves as the brand's expressive character — emoji would dilute it. Emoji may appear in casual social/Discord contexts only.

**Length:** Copy is brief and scannable. Long paragraphs are avoided. Bullets and short sentences preferred.

**Examples of on-brand copy:**
- "We get you in the room." ✓
- "Your career starts with a conversation." ✓
- "BEACON connects ambitious students with real industry professionals." ✓
- "BEACON is a student organization that helps students get internships and network." ✗ (too wordy, passive)

**Vibe keywords:** Purposeful · Approachable · Ambitious · Real · Collegiate-but-sharp

---

## VISUAL FOUNDATIONS

### Colors
- **Primary Background:** White (#FFFFFF)
- **Primary Foreground:** Near-black (#0A0A0A)
- **Accent Orange:** #E8891A — derived from the Shiba Inu mascot fur; used for highlights, CTAs, and emphasis
- **Accent Amber:** #C4701A — darker shade of the orange, used for hover states
- **Cream:** #F7F2E8 — warm off-white from the Shiba's chest; used for secondary backgrounds and cards
- **Gray Scale:** #F5F5F5 (bg) → #E4E4E4 (border) → #9A9A9A (muted text) → #5A5A5A (secondary text) → #0A0A0A (primary text)

### Typography
- **Primary font:** Times New Roman (specified by brand). Georgia as fallback. System serif stack.
- **Display / logotype:** All caps, tracked (letter-spacing: 0.2–0.4em), used for brand name and major headings
- **Body:** Regular weight, 16–18px, generous line-height (1.65–1.75)
- **Labels / UI:** Small caps or tracked lowercase, 11–13px, used for category tags and captions
- **No custom web font required** — Times New Roman is a web-safe system font

### Spacing
- Base unit: 8px
- Scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128px

### Backgrounds
- Predominantly **flat white** — no gradients, no textures
- Cream (#F7F2E8) used as a warm alternative for section backgrounds
- The pixel-art mascot is used as a focal brand illustration, not a background pattern
- No full-bleed photography defined (no photos were provided); if photos are used, they should be warm-toned, candid, and human-centered

### Animations & Transitions
- **Easing:** ease-out or cubic-bezier(0.25, 0, 0, 1) — gentle, natural deceleration
- **Duration:** 150ms for micro-interactions (hover, focus); 300ms for panel/modal reveals; 500ms for page-level transitions
- **Types:** Opacity fades, subtle Y-axis translates (8–12px on enter), no bounces or springs
- **Hover states:** Slight opacity shift (0.8) or color darken on interactive elements. No dramatic scale transforms.
- **Press states:** Slight darken of background; minimal scale(0.98) on buttons

### Borders & Cards
- Border radius: **0** by default (sharp, editorial feel); 2px for subtle softness on small elements; 4px maximum
- Cards: White background, 1px border (#E4E4E4), or a very subtle shadow (0 2px 8px rgba(0,0,0,0.06))
- No accent-color left-border cards

### Shadows & Elevation
- Level 0: No shadow (flat)
- Level 1: `0 1px 3px rgba(0,0,0,0.08)` — cards, inputs
- Level 2: `0 4px 16px rgba(0,0,0,0.10)` — dropdowns, tooltips
- Level 3: `0 12px 40px rgba(0,0,0,0.14)` — modals, overlays

### Corner Radii
- Default: 0px (sharp, modern-editorial)
- Small elements (tags, badges): 2px
- Buttons: 2px
- Inputs: 2px

### Imagery Color Vibe
- Warm-toned if photography is used
- The mascot illustration has a warm pixel palette (oranges, ambers, black, white)
- No cool/blue imagery unless contextually appropriate

### Use of Transparency & Blur
- Used minimally — only for overlays (semi-transparent black scrim at 50% for modals)
- No frosted-glass effects

---

## ICONOGRAPHY

- **No icon font or SVG icon system was provided** in the source materials.
- The primary brand illustration is the pixel-art Shiba Inu mascot (`assets/shiba_inu.png`)
- **Recommended icon system:** Lucide Icons (CDN: `https://unpkg.com/lucide@latest`) — clean, stroke-based, 1.5px weight, minimal, matches the brand's editorial minimalism
- Emoji: Not used in primary UI
- Unicode chars: Used sparingly (→ for directional cues, — for typographic dashes)
- **Logo asset:** `assets/shiba_inu.png` — use at sizes ≥ 80px tall to preserve pixel art clarity

---

## FILE INDEX

| Path | Description |
|---|---|
| `README.md` | This file — brand overview and visual foundations |
| `SKILL.md` | Agent skill manifest |
| `colors_and_type.css` | CSS custom properties for colors and typography |
| `assets/shiba_inu.png` | Primary brand logo / mascot (pixel-art Shiba Inu + B.E.A.C.O.N. logotype) |
| `preview/` | Design system card previews (registered in Design System tab) |
| `ui_kits/beacon/` | BEACON website/app UI kit |
| `ui_kits/beacon/index.html` | Interactive UI kit demo |

---

## UI KITS

| Kit | Path | Description |
|---|---|---|
| BEACON Web | `ui_kits/beacon/index.html` | Marketing/club website with homepage, events, team, and contact |
