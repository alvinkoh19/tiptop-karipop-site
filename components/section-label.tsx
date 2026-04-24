import { cn } from '@/lib/utils'

type SectionLabelProps = {
  children: React.ReactNode
  dark?: boolean
}

export function SectionLabel({ children, dark = true }: SectionLabelProps) {
  return (
    <div className={cn('text-[11px] uppercase tracking-[0.32em]', dark ? 'text-[#ff7a00]' : 'text-[#ff7a00]')}>
      {children}
    </div>
  )
}
