import { motion } from 'motion/react'
import { ArrowRight, Mail, MapPin, Network, ShieldCheck } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'
import { images } from '../data/images'

const facts = [
  { icon: MapPin, label: 'Based in Tanzania' },
  { icon: ShieldCheck, label: 'Security-minded' },
  { icon: Network, label: 'IT 8137 · Networking' },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28 md:pt-32">
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-slate-300">Available for freelance &amp; full-time</span>
          </span>

          <h1 className="display mt-7 font-extrabold text-white">
            A software
            <br />
            <span className="gradient-text">odyssey.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I&apos;m DAK, a full-stack developer and Information &amp; Computer Networking student. I turn technical
            problems into working software, from landing pages to network intelligence platforms.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn btn-primary">
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="mailto:daudki044@gmail.com" className="btn btn-ghost">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {facts.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-slate-500" />
                {label}
              </li>
            ))}
            <li>
              <a
                href="https://github.com/Daudki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <GithubIcon className="h-4 w-4 text-slate-500" />
                github.com/Daudki
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0 lg:max-w-md"
        >
          <div
            className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/30 via-transparent to-emerald-400/25 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 shadow-2xl">
            <img
              src={images.hero.portrait}
              alt="DAK seated at his desk, terminal and bookshelf behind him"
              className="h-full w-full object-cover object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/50 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="font-display text-sm font-bold text-white">Daudi Kisulo</p>
                <p className="text-xs text-slate-400">Mbeya, Tanzania</p>
              </div>
              <span className="font-mono text-xs text-emerald-300">DAK</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
