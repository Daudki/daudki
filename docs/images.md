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
| `logo-astrovexus.webp` | AstroVexus card logo |
| `logo-agrovet.webp` | Agrovet Manager card logo |
| `logo-vidget.webp` | VidGet card logo |
| `project-sportsbet.webp` | Sportsbet MN card cover |
| `project-1xbet.webp` | 1xBet Global card cover |

## Not used
`bg-black-cubes.webp` is not referenced anywhere.

## Projects without images
Iyunga Technical, ICN Platform, Cognitive Mirror, InsightFlow and Smart VLE have
no image yet, so their cards are text only. Set `image` (wide cover) or `logo`
(centered tile) in `projects.ts` to give a card a media header. `featured: true`
makes a card full width with a side image.

## Guidelines
- Dark, low detail backgrounds work best
- Export WebP, about 1600 to 1920px wide for backgrounds, about 1200px for portraits
