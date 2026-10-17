# SARVOS Design System — Technical Editorial Studio

---

name: Technical Editorial Studio
colors:
surface: '#f9f9f9'
surface-dim: '#dadada'
surface-bright: '#f9f9f9'
surface-container-lowest: '#ffffff'
surface-container-low: '#f3f3f3'
surface-container: '#eeeeee'
surface-container-high: '#e8e8e8'
surface-container-highest: '#e2e2e2'
on-surface: '#1a1c1c'
on-surface-variant: '#4c4546'
inverse-surface: '#2f3131'
inverse-on-surface: '#f0f1f1'
outline: '#7e7576'
outline-variant: '#cfc4c5'
surface-tint: '#5e5e5e'
primary: '#000000'
on-primary: '#ffffff'
primary-container: '#1b1b1b'
on-primary-container: '#848484'
inverse-primary: '#c6c6c6'
secondary: '#5e5e5e'
on-secondary: '#ffffff'
secondary-container: '#e3e2e2'
on-secondary-container: '#646464'
tertiary: '#000000'
on-tertiary: '#ffffff'
tertiary-container: '#1b1b1b'
on-tertiary-container: '#848484'
error: '#ba1a1a'
on-error: '#ffffff'
error-container: '#ffdad6'
on-error-container: '#93000a'
primary-fixed: '#e2e2e2'
primary-fixed-dim: '#c6c6c6'
on-primary-fixed: '#1b1b1b'
on-primary-fixed-variant: '#474747'
secondary-fixed: '#e3e2e2'
secondary-fixed-dim: '#c7c6c6'
on-secondary-fixed: '#1b1c1c'
on-secondary-fixed-variant: '#464747'
tertiary-fixed: '#e2e2e2'
tertiary-fixed-dim: '#c6c6c6'
on-tertiary-fixed: '#1b1b1b'
on-tertiary-fixed-variant: '#474747'
background: '#f9f9f9'
on-background: '#1a1c1c'
surface-variant: '#e2e2e2'
typography:
display:
fontFamily: Geist
fontSize: 56px
fontWeight: '600'
lineHeight: 64px
letterSpacing: -0.04em
display-mobile:
fontFamily: Geist
fontSize: 36px
fontWeight: '600'
lineHeight: 42px
letterSpacing: -0.03em
headline-lg:
fontFamily: Geist
fontSize: 40px
fontWeight: '500'
lineHeight: 48px
letterSpacing: -0.03em
headline-lg-mobile:
fontFamily: Geist
fontSize: 28px
fontWeight: '500'
lineHeight: 36px
letterSpacing: -0.02em
headline-md:
fontFamily: Geist
fontSize: 24px
fontWeight: '500'
lineHeight: 32px
letterSpacing: -0.02em
headline-sm:
fontFamily: Geist
fontSize: 18px
fontWeight: '500'
lineHeight: 26px
letterSpacing: -0.01em
body-lg:
fontFamily: Geist
fontSize: 16px
fontWeight: '400'
lineHeight: 26px
letterSpacing: -0.01em
body-md:
fontFamily: Geist
fontSize: 14px
fontWeight: '400'
lineHeight: 22px
letterSpacing: 0em
body-sm:
fontFamily: Geist
fontSize: 13px
fontWeight: '400'
lineHeight: 18px
letterSpacing: 0em
label-mono-md:
fontFamily: JetBrains Mono
fontSize: 12px
fontWeight: '500'
lineHeight: 16px
letterSpacing: 0.06em
label-mono-sm:
fontFamily: JetBrains Mono
fontSize: 11px
fontWeight: '500'
lineHeight: 14px
letterSpacing: 0.08em
rounded:
sm: 0.25rem
DEFAULT: 0.5rem
md: 0.75rem
lg: 1rem
xl: 1.5rem
full: 9999px
spacing:
gutter: 3rem
gutter-tablet: 2rem
gutter-mobile: 1.25rem
margin: 3rem
margin-mobile: 1.25rem
space-xs: 0.25rem
space-sm: 0.5rem
space-md: 1rem
space-lg: 1.5rem
space-xl: 2rem
---

## Brand & Style

The design system embodies the rigor, precision, and austere clarity of an elite software and systems engineering consultancy. It is engineered to project deep architectural authority, mechanical honesty, and quiet technical mastery to executives, engineering leadership, and founders.

The aesthetic fuses Swiss modernist editorial discipline with the systematic clarity of precision technical documentation. The interface relies entirely on typography, 1px structural hairline divisions, and exact spatial ratios to establish hierarchy. It deliberately excludes gratuitous gradients, simulated lighting, floating dropshadows, glassmorphism, or non-functional decorative motifs. The visual density communicates focus, deterministic execution, and architectural integrity.

## Colors

The palette is strictly achromatic and structured across two uncompromising modes: light and dark. Visual weight is determined by luminosity steps rather than chromatic accents.

### Light Mode (Default)

- **Base Canvas:** `#FAFAFA`
- **Surface / Card Layer:** `#FFFFFF`
- **Foreground / Text Primary:** `#000000`
- **Muted Surface / Subdued Fills:** `#F5F5F5`
- **Active / Accent Surface:** `#EBEBEB`
- **Text Secondary / Muted:** `#737373`
- **Hairline Borders:** `#E5E5E5`

### Dark Mode

- **Base Canvas:** `#000000`
- **Surface / Card Layer:** `#111111`
- **Foreground / Text Primary:** `#FFFFFF`
- **Muted Surface / Subdued Fills:** `#171717`
- **Active / Accent Surface:** `#1F1F1F`
- **Text Secondary / Muted:** `#A3A3A3`
- **Hairline Borders:** `#262626`

Interactive states use binary tone inversion (e.g., solid black surfaces shifting to muted grays on hover in light mode, or inverted white surfaces) without introducing external chromatic hues.

## Typography

Typography establishes structure, cadence, and hierarchy. Two typefaces drive the system:

1. **Geist**: Applied across all structural headlines, titles, narrative editorial blocks, and interface text. Tight negative tracking (`-0.01em` to `-0.04em`) gives headings an engineered, cohesive density.
2. **JetBrains Mono**: Applied to technical indicators, indexing (`[01]`, `SYS.04`), telemetry, timestamps, micro-tags, and status readouts. Always set in uppercase with deliberate positive tracking (`0.06em` to `0.08em`) to enforce legibility at compact sizes (11px–12px).

### Editorial Rules

- Section headings are always paired with a leading mono-index tag (e.g., `[ 01 ] CAPABILITIES`).
- Body content must preserve a strict measure of 65–75 characters per line to maintain editorial reading cadence.
- Tabular data and code blocks default strictly to the monospaced hierarchy.

## Layout & Spacing

The layout is anchored to a rigid 12-column grid capped at a maximum width of `1200px` and horizontally centered on the canvas.

### Grid & Breakpoints

- **Desktop (>= 1024px):** 12 columns, `48px` (3rem) gutters, `48px` outer margins, max-width `1200px`.
- **Tablet (768px – 1023px):** 8 columns, `32px` (2rem) gutters, `32px` outer margins.
- **Mobile (< 768px):** 4 columns, `20px` (1.25rem) gutters, `20px` outer margins.

### Spatial Discipline

Layout relies on direct hairline boundaries and systematic gaps. Containers are bordered rather than spaced ambiguously. The internal rhythm follows an 8px base module:

- `space-xs` (4px): Inline icon spacing, tight badge padding.
- `space-sm` (8px): Metadata row gaps, chip horizontal padding.
- `space-md` (16px): Input field internal padding, table cell vertical gaps.
- `space-lg` (24px): Card interior padding, metric group gaps.
- `space-xl` (32px): Block dividers, major sub-panel spacing.

## Elevation & Depth

Visual hierarchy is communicated strictly through surface value separation and continuous 1px hairline rules. Shadows are entirely prohibited.

### Tiers of Separation

- **Surface Differentiation:** The canvas sits at the base value (`#FAFAFA` light / `#000000` dark). Higher-level modules and cards sit on a raised contrast surface (`#FFFFFF` light / `#111111` dark).
- **Hairline Grid Architecture:** Surfaces do not float; they are anchored using continuous 1px solid hairline borders (`#E5E5E5` light / `#262626` dark). Adjacent cards often share borders in grid layouts rather than using isolated drop-shadowed cards.
- **Overlays & Modals:** Modals and flyout menus utilize the card background color surrounded by a prominent 1px hairline border, set against an unblurred canvas dimming fill (`rgba(0, 0, 0, 0.4)` light / `rgba(0, 0, 0, 0.7)` dark).

## Shapes

The geometric framework uses a disciplined 8px border radius (`0.5rem`) for standard surfaces, ensuring soft precision without becoming organic or playful.

### Corner Radii Guidelines

- **Cards, Panels, Inputs, Modals:** Uniform 8px radius (`roundedness: 2`).
- **Inner Nested Elements:** When a chip, action button, or tag is nested tightly inside an 8px card, use 4px (`rounded-sm`) to maintain concentric geometry.
- **Tags and Technical Badges:** 4px radius or 0px square depending on tabular context. Full pills (`rounded-full`) are prohibited to maintain the architectural, technical aesthetic.

## Components

### Buttons

- **Primary:** Solid foreground (`#000000` light / `#FFFFFF` dark) with inverse text (`#FFFFFF` light / `#000000` dark). Font: Geist 14px Medium. Height: 40px. Padding: 0 16px. Border: 1px solid transparent. Hover: 90% opacity.
- **Secondary / Ghost:** Transparent background with 1px hairline border (`#E5E5E5` light / `#262626` dark). Foreground text. Hover: `#F5F5F5` (light) / `#171717` (dark).
- **Command / Mono Button:** Geist Mono 12px uppercase, prefixed with terminal prompt (`> RUN`). 1px hairline outline.

### Cards & Surfaces

- Flat `#FFFFFF` (light) or `#111111` (dark) fill enclosed in a 1px solid hairline border.
- Internal padding is strictly 24px (`space-lg`).
- Modular grid cards join borders directly on 12-column layouts to simulate architectural blueprints.

### Tags & Metadata Badges

- Set strictly in uppercase JetBrains Mono (11px or 12px).
- Flat subtle fill (`#F5F5F5` light / `#171717` dark) with a 1px hairline border.
- Padding: 2px 8px. Height: 22px. Radius: 4px.
- Prefix format: `[ SYSTEM.ACTIVE ]` or `ID: 0x82F`.

### Inputs & Form Fields

- Background: `#FFFFFF` (light) / `#111111` (dark).
- 1px hairline border (`#E5E5E5` light / `#262626` dark).
- Height: 40px. Padding: 0 12px. Font: Geist 14px.
- Focus state: Border color transitions sharply to primary foreground (`#000000` light / `#FFFFFF` dark) without outer glow rings or drop-shadow effects.

### Data Tables & Spec Lists

- Structural rows with hairline bottom borders.
- Header row set in uppercase JetBrains Mono 11px, text-secondary.
- Numerical and status columns right-aligned and monospaced for comparative scanning.

### Selection Controls (Checkboxes & Radios)

- 16px square (checkbox) or 16px circle (radio).
- 1px hairline border. Checked state fills solid primary foreground with inverse monochrome tick or dot.
