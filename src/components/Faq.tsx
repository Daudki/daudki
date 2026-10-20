import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'
import { images } from '../data/images'

const faqs = [
  {
    q: 'What are you available for right now?',
    a: 'Freelance builds, collaborations, and full-time roles, especially anything spanning full-stack development, network security, or AI-assisted tooling.',
  },
  {
    q: 'Do you work solo or with a team?',
    a: "Both. I've shipped solo projects end-to-end and worked within client/stakeholder teams (school platform, affiliate landing pages) where requirements come from someone else.",
  },
  {
    q: 'What does a typical project look like?',
    a: "Usually a React/TypeScript frontend on a Python backend, tested as it's built rather than at the end. See VEXUS for an example with a full test suite.",
  },
  {
    q: "What's the best way to reach you?",
    a: 'Email is fastest (daudki044@gmail.com), or check the code itself on GitHub @Daudki.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section">
      <div className="fade-left pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] md:block" aria-hidden="true">
        <img src={images.faq.portrait} alt="" loading="lazy" className="h-full w-full object-cover object-[50%_20%] opacity-25" />
      </div>

      <div className="wrap relative">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionHeading
              index="05"
              label="Good to know"
              title={
                <>
                  Frequently asked
                  <br />
                  questions
                </>
              }
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {faqs.map((item, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={item.q}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-white">{item.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-blue-300' : 'text-slate-500'
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pr-8 text-sm leading-relaxed text-slate-400 sm:text-base">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
