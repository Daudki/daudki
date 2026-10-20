import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

const stack = [
  'Python', 'TypeScript', 'React', 'FastAPI', 'Tailwind',
  'Linux', 'Bash', 'AI/ML', 'Cybersecurity', 'Git',
]

export default function Stack() {
  return (
    <section id="stack" className="section bg-ink-2">
      <div className="wrap">
        <ScrollReveal>
          <SectionHeading index="04" label="Tools" title="Stack">
            Technologies I use to build and ship.
          </SectionHeading>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <li
                key={s}
                className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-white"
              >
                {s}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
