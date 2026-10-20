import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import { images } from '../data/images'
import { projects } from '../data/projects'

const stats = [
  { value: projects.length, label: 'Projects built' },
  { value: 154, label: 'Tests in VEXUS' },
  { value: 28, label: 'ICN modules' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal>
          <SectionHeading index="01" label="About" title="Meet DAK." />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
            Full-stack developer and Information &amp; Computer Networking student from Tanzania. I build across web,
            Android, and network security, and I like shipping things that actually work.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="card p-4 sm:p-5">
                <p className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-slate-400 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="card mt-6 inline-flex items-center gap-4 p-2.5 pr-6">
            <img
              src={images.about.devsLogo}
              alt="VEXUS Dev's logo"
              loading="lazy"
              className="h-14 w-14 rounded-xl object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-white">VEXUS Dev&apos;s</p>
              <p className="text-xs text-slate-400">Build / Automate / Innovate</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
