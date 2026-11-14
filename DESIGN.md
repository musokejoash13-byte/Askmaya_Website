---
name: AskMaya Cleaning Services
colors:
  surface: '#f7f9ff'
  surface-dim: '#cadcf0'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e2efff'
  surface-container-high: '#d8eafe'
  surface-container-highest: '#d3e4f8'
  on-surface: '#0b1d2b'
  on-surface-variant: '#3e4946'
  inverse-surface: '#213241'
  inverse-on-surface: '#e7f2ff'
  outline: '#6e7a75'
  outline-variant: '#bdc9c4'
  surface-tint: '#006b5b'
  primary: '#005f50'
  on-primary: '#ffffff'
  primary-container: '#0d7a68'
  on-primary-container: '#aaffe9'
  inverse-primary: '#7cd7c1'
  secondary: '#4b6077'
  on-secondary: '#ffffff'
  secondary-container: '#cce2fc'
  on-secondary-container: '#50647b'
  tertiary: '#005d62'
  on-tertiary: '#ffffff'
  tertiary-container: '#00787e'
  on-tertiary-container: '#b6faff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#99f3dd'
  primary-fixed-dim: '#7cd7c1'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005144'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#b3c9e3'
  on-secondary-fixed: '#051d30'
  on-secondary-fixed-variant: '#34495e'
  tertiary-fixed: '#6bf6ff'
  tertiary-fixed-dim: '#3edae3'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f53'
  background: '#f7f9ff'
  on-background: '#0b1d2b'
  surface-variant: '#d3e4f8'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 75rem
---

## Brand & Style

This design system embodies pure cleanliness, professional dependability, and warm accessibility. Built for a premium home and commercial cleaning service, the aesthetic moves away from sterile clinical environments, favoring an airy, revitalizing sanctuary atmosphere.

The style fuses crisp modern minimalism with soft tactile layering. Generous breathing room, pristine surfaces, and sparkling aquatic accents evoke the sensory relief of a spotless space. The target demographic spans busy residential homeowners, renters seeking move-out guarantees, and commercial offices demanding vetted dependability. The design evokes serenity, immaculate precision, and effortless reliability.

## Colors

The palette balances clinical clarity with organic vitality:

- **Primary (`#0D7A68`)**: Deep Aquatic Emerald. Represents organic cleanliness, security, and renewal. Used for key conversion touchpoints, active states, and primary button fills.
- **Secondary (`#13293D`)**: Slate Navy. Provides structural weight and institutional authority. Applied to high-contrast typography, structural footers, and prominent telephone CTAs.
- **Tertiary (`#00C2CB`)**: Sparkling Cyan. Conveys fresh running water and pristine shine. Used for verified badges, rating stars, accent highlights, and progress bars.
- **Neutral (`#5A6B7C`)**: Soft Mineral Slate. Balances readability for body text, meta annotations, and inactive icon states without the harshness of pure black.

### Surface System
- `surface-base`: `#FFFFFF` — Immaculate canvas.
- `surface-subtle`: `#F4F8F8` — Soft mint-tinted white for section differentiation.
- `surface-card`: `#FFFFFF` with translucent border overlays.
- `surface-accent-tint`: `#E6F7F5` — Soft container fill for trust chips and verified status badges.

## Typography

Plus Jakarta Sans delivers friendly warmth alongside clean geometric discipline. The rounded terminals and open counters evoke hospitality, approachable service, and modern reliability.

- Use `display-hero` exclusively above the fold to spotlight prompt booking and instant phone consultations.
- Maintain `label-sm` in uppercase or semi-bold tracking for cleaner verification badges and service categories.
- Ensure numeric data (such as quotes, hourly estimates, and contact numbers) uses tabular lining numerals where applicable to maintain alignment across booking summaries.

## Layout & Spacing

The layout is anchored on an 8pt base grid within a responsive fluid-width container (max-width `75rem` / 1200px), maintaining tidy margins and clear structure.

- **Mobile (up to 767px)**: Single-column flow with `1rem` horizontal edge margins. Booking steps and quick-action contact triggers stay persistent or anchored at the viewport base.
- **Tablet (768px - 1023px)**: 8-column layout with `1.25rem` gutters. Quote estimation forms and cleaner profiles adopt 2-column comparative formats.
- **Desktop (1024px+)**: 12-column layout with `1.5rem` gutters and dynamic section padding (`3rem` to `4.5rem`) to reinforce the uncluttered, spotless aesthetic.

## Elevation & Depth

Visual depth is conveyed through light, aquatic ambient diffusion paired with subtle border definitions to mimic crystalline surfaces. Heavy drop shadows are strictly avoided to keep the interface feeling weightless and pure.

- **Level 0 (Flat)**: Pure `#FFFFFF` or `#F4F8F8` background with no shadow. Used for page roots and subtle section cards.
- **Level 1 (Card Default)**: `box-shadow: 0 4px 20px -2px rgba(19, 41, 61, 0.05)`, bordered with `1px solid rgba(13, 122, 104, 0.08)`. Applied to service selection tiles, verified cleaner cards, and review snippets.
- **Level 2 (Floating Action / Sticky Bars)**: `box-shadow: 0 8px 24px -4px rgba(13, 122, 104, 0.12)`. Applied to fixed navigation bars, quick-call action bars (`0762465788`), and active selection states.
- **Level 3 (Modals / Booking Overlays)**: `box-shadow: 0 20px 48px -8px rgba(19, 41, 61, 0.18)`, backed by a `backdrop-filter: blur(8px)` with `rgba(19, 41, 61, 0.35)` wash.

## Shapes

The design system employs a rounded shape language (Level 2), featuring `0.5rem` on standard controls, `1rem` on container cards, and full pill rounding for micro-badges and high-priority action buttons. This curvature removes clinical harshness and introduces an inviting, approachable tone.

- Form fields and utility buttons: `0.5rem` (8px).
- Service cards, profile panels, and review blocks: `1rem` (16px).
- Verified trust badges, pricing pills, and primary CTAs: Fully rounded pill shape (`9999px`).

## Components

### Buttons
- **Primary Action (Book a Clean / Instant Quote)**: Pill-shaped, Emerald fill (`#0D7A68`), crisp white text, `label-md` weight. Subtle hover elevation to `#0A6253` with `0 6px 16px rgba(13, 122, 104, 0.25)`.
- **Secondary Action / Direct Call CTA (`0762465788`)**: Slate Navy fill (`#13293D`) or clean white background with a `#13293D` border. Pairs a phone icon with bold tracking for immediate legibility.
- **Tertiary Accent (Sparkle/Express)**: Sparkling Cyan tint (`#E6FBFB`), Cyan text (`#008A91`), borderless, used for instant add-ons or room expansions.

### Trust & Verification Badges
- Compact pill-shaped chip featuring an aquatic teal checkmark icon.
- Background: `#E6F7F5`; Border: `1px solid rgba(0, 194, 203, 0.3)`.
- Typography: `label-sm` in `#0D7A68`. Applied to "Police Checked", "Insured & Bonded", and "5-Star Rated Cleaners".

### Booking & Service Cards
- Background: `#FFFFFF` with Level 1 elevation and `1rem` corner rounding.
- Hover transition brings a border shift from muted slate to Primary Emerald (`#0D7A68`), subtly lifting by `-2px`.
- Contains room selectors, estimated service duration icons, and a clear transparent pricing breakdown.

### Form Inputs
- Crisp white fields with a `1.5px` border in `#CFD8DC`.
- Focus state: Border transitions to Primary Emerald (`#0D7A68`) with a subtle `3px` outer ring in `rgba(0, 194, 203, 0.25)`.
- Integrated helper tags show real-time cleaning availability based on postcode input.

### Direct Contact Bar
- Fixed bottom on mobile, inline header element on desktop.
- Displays "Call AskMaya: 0762465788" alongside an active pulse indicator in Sparkling Cyan (`#00C2CB`), signaling available team dispatch.