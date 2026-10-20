import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Mail, Menu, X } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'

const links = [
  { label: 'Home', id: 'top' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Stack', id: 'stack' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16)
  const [active, setActive] = useState('top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open ? 'border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between">
          <a href="#top" onClick={close} className="flex items-center gap-2.5" aria-label="daudki, back to top">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 text-[11px] font-black text-ink">
              DK
            </span>
            <span className="font-display text-sm font-bold tracking-tight text-white">daudki</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/Daudki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="ml-2 rounded-full p-2.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex h-dvh flex-col bg-ink px-6 pb-8 pt-24 md:hidden"
          >
            <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />
            <nav aria-label="Mobile" className="relative flex flex-1 flex-col justify-center">
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.045, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={close}
                      className={`flex items-baseline gap-4 py-2.5 font-display text-[clamp(2rem,9vw,2.75rem)] font-extrabold tracking-tight transition-colors ${
                        active === l.id ? 'text-white' : 'text-slate-500 active:text-white'
                      }`}
                    >
                      <span className="font-mono text-xs font-normal tracking-widest text-slate-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="relative flex items-center justify-between text-sm text-slate-400">
              <a href="mailto:daudki044@gmail.com" className="inline-flex items-center gap-2 py-2 hover:text-white">
                <Mail className="h-4 w-4" />
                daudki044@gmail.com
              </a>
              <a
                href="https://github.com/Daudki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-3 hover:bg-white/10 hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
