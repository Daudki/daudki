import type { ReactNode } from 'react'

interface Props {
  index: string
  label: string
  title: ReactNode
  children?: ReactNode
  align?: 'left' | 'center'
}

export default function SectionHeading({ index, label, title, children, align = 'left' }: Props) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto text-center' : ''}>
      <span className="eyebrow">
        <span className="gradient-text font-medium">{index}</span>
        {label}
      </span>
      <h2 className="h2 mt-4 font-extrabold text-white">{title}</h2>
      {children && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg ${center ? 'mx-auto' : ''}`}>
          {children}
        </p>
      )}
    </div>
  )
}
