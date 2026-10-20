import { Mail } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink">
      <div className="wrap flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Daudi Kisulo. Built in Mbeya, Tanzania.
        </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/Daudki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:daudki044@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
