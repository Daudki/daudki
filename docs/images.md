# Images

Real images live in `public/images/` (WebP) and are mapped in
`src/data/images.ts`. Project images and logos are set through the `image` and
`logo` fields in `src/data/projects.ts`.

## In use

| File | Used in |
|---|---|
| `portrait-desk-terminal.webp` | Hero portrait |
| `vexus-devs-logo.webp` | About, VEXUS Dev's chip |
| `bg-hooded-figure.webp` | Services background (md and up) |
| `bg-glow-cubes.webp` | Projects header background |
| `bg-fedora-laptop.webp` | VEXUS card image |
| `vexus-security-logo.webp` | VEXUS card logo |
| `portrait-leaning.webp` | FAQ background (md and up) |
| `portrait-gradient.webp` | Contact background |

## Not used
`bg-black-cubes.webp` is not referenced anywhere.

## Projects without images
Only VEXUS has an image. The other project cards are text only, so there are
no external placeholder photos left. To give a card an image, set `image` (and
optionally `featured: true` for a wide card) in `projects.ts`.

## Guidelines
- Dark, low detail backgrounds work best
- Export WebP, about 1600 to 1920px wide for backgrounds, about 1200px for portraits
