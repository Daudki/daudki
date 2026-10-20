import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import GithubIcon from './icons/GithubIcon'
import { images } from '../data/images'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="fade-top pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={images.contact.avatar}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-[50%_15%] opacity-20"
        />
      </div>
      <div className="glow-contact pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="wrap relative text-center">
        <ScrollReveal>
          <span className="eyebrow">
            <span className="gradient-text font-medium">06</span>
            Contact
          </span>
          <h2 className="display mx-auto mt-5 max-w-3xl font-extrabold text-white">
            Let&apos;s build
            <br />
            <span className="gradient-text">something.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-slate-400 sm:text-lg">
            Available for freelance work, collaborations, and full-time roles.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:daudki044@gmail.com" className="btn btn-primary">
              daudki044@gmail.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Daudki"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
