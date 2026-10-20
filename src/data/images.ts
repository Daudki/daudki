const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const images = {
  hero: { portrait: img('portrait-desk-terminal.webp') },
  about: { devsLogo: img('vexus-devs-logo.webp') },
  services: { bg: img('bg-hooded-figure.webp') },
  projects: { bg: img('bg-glow-cubes.webp') },
  vexus: {
    bg: img('bg-fedora-laptop.webp'),
    logo: img('vexus-security-logo.webp'),
  },
  faq: { portrait: img('portrait-leaning.webp') },
  contact: { avatar: img('portrait-gradient.webp') },
} as const
