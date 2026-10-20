import { Brain, Code2, ShieldCheck } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import { images } from '../data/images'

const services = [
  {
    icon: Code2,
    title: 'Full-stack builds',
    body: 'React/TypeScript frontends and Python/FastAPI backends, shipped as working products, not just prototypes.',
  },
  {
    icon: ShieldCheck,
    title: 'Network & security',
    body: 'Authorized discovery, monitoring, and incident tooling, grounded in an Information & Computer Networking program.',
  },
  {
    icon: Brain,
    title: 'AI-assisted tools',
    body: 'Practical AI features bolted onto real apps: analysis, summarization, and assistants people actually use.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-ink-2">
      <div className="fade-left pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block" aria-hidden="true">
        <img src={images.services.bg} alt="" loading="lazy" className="h-full w-full object-cover opacity-25" />
      </div>

      <div className="wrap relative">
        <ScrollReveal>
          <SectionHeading
            index="02"
            label="What I build"
            title={
              <>
                Three lanes,
                <br />
                one toolbox.
              </>
            }
          >
            Most projects mix all three: a security tool with a real UI, or an app with AI baked in from the start.
          </SectionHeading>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {services.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 0.08} className="h-full">
              <div className="card h-full bg-ink-2/80 p-6 backdrop-blur-sm sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-400/20">
                    <Icon className="h-5 w-5 text-blue-300" />
                  </span>
                  <span className="font-mono text-xs text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
