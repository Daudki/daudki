import { images } from './images'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  link?: string
  repo?: string
  status?: string
  image?: string
  logo?: string
  featured?: boolean
  accent: string
}

export const projects: Project[] = [
  {
    id: 'vexus',
    title: 'VEXUS',
    tagline: 'AI-Powered Network Security Intelligence',
    description:
      'A network security platform with authorized discovery, monitoring, detection, and incident investigation. FastAPI backend, React frontend, 154 tests across every module.',
    tags: ['Python', 'FastAPI', 'React', 'AI', 'Security'],
    repo: 'https://github.com/Daudki/vexus',
    status: 'In development',
    image: images.vexus.bg,
    logo: images.vexus.logo,
    featured: true,
    accent: '#34d399',
  },
  {
    id: 'astrovexus',
    title: 'AstroVexus',
    tagline: 'Software Studio, Coming Soon',
    description:
      'A new software studio in Mbeya, Tanzania, built by two founders: a programmer and a designer. The studio site is live while the company and its products are still being built.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Express'],
    link: 'https://astrovexus.vercel.app',
    repo: 'https://github.com/Daudki/astrovexus',
    status: 'Live · Still building',
    logo: images.astrovexus.logo,
    accent: '#2dd4bf',
  },
  {
    id: 'agrovet-manager',
    title: 'Agrovet Manager',
    tagline: 'Inventory & Sales for Agrovet Shops',
    description:
      'Inventory, sales, and expiry management built for agrovet shops. Multi-tenant accounts, batch-level stock with first-expiry-first-out selling, a point of sale, and English and Kiswahili support.',
    tags: ['React', 'Node.js', 'Express', 'SQLite'],
    repo: 'https://github.com/Daudki/agrovet-manager',
    status: 'In development',
    logo: images.agrovet.logo,
    accent: '#4ade80',
  },
  {
    id: 'iyungad',
    title: 'Iyunga Technical',
    tagline: 'School Web Platform',
    description:
      'A complete school platform for Iyunga Technical Secondary School: public site, authentication, and role-based dashboards for students, teachers, and administrators. Backend in a companion Java repo (iyunga-backend).',
    tags: ['React', 'TypeScript', 'Tailwind', 'Java'],
    repo: 'https://github.com/Daudki/iyunga-tech',
    status: 'In development',
    accent: '#60a5fa',
  },
  {
    id: 'sportsbet-mn',
    title: 'Sportsbet MN',
    tagline: 'Affiliate Landing Page',
    description:
      'A conversion-focused landing page for a Melbet affiliate targeting the Mongolian market. Deployed with live analytics and a tracked promo code.',
    tags: ['TypeScript', 'React', 'SEO'],
    link: 'https://sportsbet-mn.com',
    repo: 'https://github.com/Daudki/melbet',
    status: 'Live · Client work',
    image: images.sportsbet.cover,
    accent: '#fb923c',
  },
  {
    id: '1xbet-global',
    title: '1xBet Global',
    tagline: 'Affiliate Landing Page',
    description: 'A second affiliate landing page, same playbook as Sportsbet MN, different platform.',
    tags: ['TypeScript', 'React'],
    link: 'https://sportsbet-tips.com',
    repo: 'https://github.com/Daudki/1xbet-global',
    status: 'Live',
    image: images.onexbet.cover,
    accent: '#38bdf8',
  },
  {
    id: 'icn-platform',
    title: 'ICN Platform',
    tagline: 'Study Companion for Networking Students',
    description:
      'A study resource mapping the Information and Computer Networking curriculum to working Python projects. 28 modules, a project for each.',
    tags: ['HTML', 'Education'],
    link: 'https://daudki.github.io/icn-blog/',
    repo: 'https://github.com/Daudki/icn-blog',
    status: 'In development',
    accent: '#818cf8',
  },
  {
    id: 'cognitive-mirror',
    title: 'Cognitive Mirror',
    tagline: 'Journaling & Self-Reflection App',
    description:
      'A standalone Flask journaling app with two analytical lenses: the Mirror, which flags cognitive distortions per entry, and the Sherlock Lens, which deduces patterns across entries over time.',
    tags: ['Python', 'Flask', 'CBT-inspired'],
    link: 'https://cognitive-mirror-ujjx.onrender.com',
    repo: 'https://github.com/Daudki/cognitive-mirror',
    status: 'In development',
    accent: '#c084fc',
  },
  {
    id: 'insightflow',
    title: 'InsightFlow',
    tagline: 'Blog Platform + MindLens AI Module',
    description:
      'A blog platform built with a friend, with an AI analysis module (MindLens, with its own landing page and routing) built in as my contribution.',
    tags: ['Python', 'Flask', 'AI', 'Collaboration'],
    repo: 'https://github.com/Daudki/insightflow',
    status: 'In development',
    accent: '#f472b6',
  },
  {
    id: 'smart-vle',
    title: 'Smart VLE',
    tagline: 'Smarter Short-Answer Grading',
    description:
      "Fixes exact-match grading on MUST's VLE by generating format variants and WordNet synonyms for lecturer approval before grading. Role-based dashboards, PDF and XLSX reports. Built during Industrial Practical Training.",
    tags: ['React', 'FastAPI', 'NLTK', 'Education'],
    link: 'https://smart-vle.vercel.app',
    repo: 'https://github.com/Daudki/smart-vle',
    status: 'Working · Still building',
    accent: '#facc15',
  },
  {
    id: 'vidget',
    title: 'theOutcast VidGet',
    tagline: 'Video Downloader, Web App',
    description:
      'Evolved from a Rust CLI to a Flask web UI to a hosted app on Render: Docker, yt-dlp, an async job system, and ffmpeg under the hood.',
    tags: ['Python', 'Flask', 'Docker', 'yt-dlp'],
    link: 'https://vidget-ekvn.onrender.com',
    repo: 'https://github.com/Daudki/vidget',
    status: 'Stable · Nearly done',
    logo: images.vidget.logo,
    accent: '#f87171',
  },
]
