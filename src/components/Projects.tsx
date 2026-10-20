import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { images } from '../data/images'

export default function Projects() {
  const [query, setQuery] = useState('')
  const trimmed = query.trim()

  const results = useMemo(() => {
    const q = trimmed.toLowerCase()
    if (!q) return projects
    return projects.filter((p) =>
      [p.title, p.tagline, p.description, ...p.tags].join(' ').toLowerCase().includes(q),
    )
  }, [trimmed])

  return (
    <section id="projects" className="section">
      <div className="fade-bottom pointer-events-none absolute inset-x-0 top-0 h-[34rem]" aria-hidden="true">
        <img src={images.projects.bg} alt="" loading="lazy" className="h-full w-full object-cover opacity-[0.12]" />
      </div>

      <div className="wrap relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <SectionHeading index="03" label="Selected work" title="Projects">
              Platforms, tools, and client work. Search by name, tag, or technology.
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="w-full md:max-w-xs">
            <label className="flex h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 transition-colors focus-within:border-blue-400/60">
              <Search className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search projects"
                aria-label="Search projects"
                className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500 [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="-mr-2 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>
          </ScrollReveal>
        </div>

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-slate-500" aria-live="polite">
          {trimmed ? `${results.length} of ${projects.length} projects` : `${projects.length} projects`}
        </p>

        {results.length > 0 ? (
          <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-5">
            {results.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                number={String(projects.indexOf(p) + 1).padStart(2, '0')}
              />
            ))}
          </div>
        ) : (
          <div className="card mt-5 p-10 text-center">
            <p className="text-white">No projects match “{trimmed}”.</p>
            <button onClick={() => setQuery('')} className="mt-3 text-sm font-semibold text-blue-300 hover:underline">
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
