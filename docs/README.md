# daudki: project docs

Personal portfolio for Daudi Kisulo (DAK). One scrolling page with a calm dark
theme, one accent gradient (blue to emerald), and a card based projects section.

Read `roadmap.md` first when picking this project back up.

## Stack
- React 19 + TypeScript, Vite 8
- Tailwind CSS v4 (`@theme` tokens and a few component classes in `src/index.css`)
- `motion` for scroll reveals, the FAQ accordion and the mobile menu
- `react-router-dom` (single route today)
- `lucide-react` for icons

## Structure
```
src/
  components/   Navbar, Hero, About, Services, Projects, ProjectCard, Stack,
                Faq, Contact, Footer, SectionHeading, ScrollReveal,
                icons/GithubIcon
  pages/        HomePage, composes the sections in order
  data/
    projects.ts   add, update or remove projects here
    images.ts     every real image, mapped in one place
  index.css     tokens, base styles, shared component classes
public/images/  image files
docs/           roadmap.md, design-system.md, images.md
```

## Content to keep current
- `src/data/projects.ts`: title, tagline, description, tags, links, status, accent
- `src/data/images.ts`: swap an image by changing the filename
- Contact email and GitHub handle appear in `Navbar.tsx`, `Hero.tsx`, `Contact.tsx` and `Footer.tsx`
