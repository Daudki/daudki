# Design system

One page, one calm dark theme. Sections are separated by spacing and a very
slight background shift, not by lines, grids or per-section colors.

## Color
- Base: `ink` `#06080f`, alternate sections use `ink-2` `#0a0e18`
- Text: white for headings, `slate-300` for lead text, `slate-400` for body, `slate-500` for meta
- Accent: one gradient, `#93c5fd` to `#60a5fa` to `#34d399` (`.gradient-text`)
- Each project carries its own `accent` in `projects.ts`, used on its status chip, tagline and hover glow

## Type
- Display and headings: Plus Jakarta Sans, extrabold, tight tracking
- Body: Inter
- Eyebrows and numbers: JetBrains Mono
- `.display` for the hero and contact headline, `.h2` for section headings, both fluid via `clamp()`

## Shared classes (`src/index.css`)
- `.wrap`: centered 72rem container with responsive side padding
- `.section`: vertical rhythm for every section
- `.btn`, `.btn-primary`, `.btn-ghost`: pill buttons, 45px+ touch height
- `.card`: soft surface with hairline border and a small lift on hover
- `.eyebrow`: numbered mono label above each heading
- `.fade-left`, `.fade-bottom`, `.fade-top`: mask fades for background photos
- `.glow-hero`, `.glow-contact`: the only two ambient gradients on the site

## Rules
- No grid, dot or diagonal line textures
- No em dashes in any copy
- Background photos sit at low opacity behind a mask fade, never full strength
- Motion: `ScrollReveal` (fade and rise), the FAQ accordion, the mobile menu. Nothing else
- Mobile menu is a full screen overlay that closes on link tap, Escape, or when the viewport grows past `md`

## Adding a section
1. Add a component with `<section id="..." className="section">` and a `.wrap` inside
2. Use `SectionHeading` with the next number
3. Wrap content in `ScrollReveal`
4. Add the id to the `links` array in `Navbar.tsx`
