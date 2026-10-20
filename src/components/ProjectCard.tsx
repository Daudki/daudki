import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  number: string
}

export default function ProjectCard({ project, number }: Props) {
  const style = { '--accent': project.accent } as CSSProperties
  const hasImage = Boolean(project.featured && project.image)

  return (
    <article
      style={style}
      className={`card project-card group flex h-full overflow-hidden ${
        hasImage ? 'flex-col-reverse md:col-span-2 md:grid md:grid-cols-[1.1fr_0.9fr]' : 'flex-col'
      }`}
    >
      {!hasImage && (project.image || project.logo) && (
        <div
          className="relative flex h-40 items-center justify-center overflow-hidden bg-ink-2"
          style={{ backgroundImage: `radial-gradient(60% 90% at 50% 0%, ${project.accent}2e, transparent 75%)` }}
        >
          {project.image ? (
            <>
              <img src={project.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </>
          ) : (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              loading="lazy"
              className="h-20 w-20 rounded-2xl object-cover shadow-2xl ring-1 ring-white/15"
            />
          )}
        </div>
      )}

      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-slate-500">{number}</span>
          {project.status && (
            <span
              className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold"
              style={{ color: project.accent, backgroundColor: `${project.accent}1a` }}
            >
              {project.status}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium" style={{ color: project.accent }}>
          {project.tagline}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-300">
              {tag}
            </li>
          ))}
        </ul>

        {(project.link || project.repo) && (
          <div className="mt-6 flex items-center gap-5 text-sm font-semibold">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-1 hover:underline"
                style={{ color: project.accent }}
              >
                View live
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-1 text-slate-400 transition-colors hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        )}
      </div>

      {hasImage && (
        <div className="relative min-h-56 overflow-hidden bg-ink md:min-h-full">
          <img src={project.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30 md:bg-gradient-to-r md:from-ink/80 md:via-transparent md:to-transparent" />
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              loading="lazy"
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover shadow-2xl ring-1 ring-white/15 sm:h-28 sm:w-28"
            />
          )}
        </div>
      )}
    </article>
  )
}
