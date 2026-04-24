'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Clapperboard,
  Globe,
  Handshake,
  Heart,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Play,
  Search,
  Share2,
  Sparkles,
  Store,
  Trophy,
  Users,
} from 'lucide-react'
import { caseStudies, type CaseStudy, type IconKey } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/section-label'

const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  'calendar-days': CalendarDays,
  camera: Camera,
  clapperboard: Clapperboard,
  globe: Globe,
  handshake: Handshake,
  heart: Heart,
  'layout-grid': LayoutGrid,
  'message-circle': MessageCircle,
  play: Play,
  search: Search,
  share2: Share2,
  sparkles: Sparkles,
  store: Store,
  trophy: Trophy,
  users: Users,
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
}

function OverviewStrip({ items }: { items: CaseStudy['overview'] }) {
  return (
    <div className="grid gap-0 border-t border-white/10 bg-[#101010] md:grid-cols-4">
      {items.map((item, index) => (
        <div key={item.label} className={cn('border-white/10 px-6 py-7', index < items.length - 1 && 'md:border-r')}>
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#ff7a00]">{item.label}</div>
          <div className="mt-3 text-sm leading-7 text-white/75">{item.value}</div>
        </div>
      ))}
    </div>
  )
}

function ChallengePoint({ text, icon: Icon }: { text: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-md bg-black p-3 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-sm leading-7 text-black/70">{text}</p>
    </div>
  )
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const otherCases = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2)
  const challengeIcons = [Sparkles, Users, Heart]

  return (
    <>
      <section className="relative">
        <div className="relative h-[62vh] min-h-[520px] overflow-hidden md:h-[72vh]">
          <img src={study.hero} alt={study.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/15" />
          <div className="absolute inset-x-0 bottom-0 top-0 mx-auto flex max-w-7xl items-end px-5 pb-10 md:px-6 md:pb-14">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#ff7a00]">{study.category}</div>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">{study.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{study.subtitle}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-[#ff7a00]" /> {study.location}
              </div>
            </motion.div>
          </div>
        </div>
        <OverviewStrip items={study.overview} />
      </section>

      <section className="bg-[#f3f0eb] text-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.95fr_1.05fr] md:px-6">
          <motion.div {...fadeUp}>
            <SectionLabel dark={false}>The challenge</SectionLabel>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{study.challengeTitle}</h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-black/70">{study.challengeBody}</p>
          </motion.div>
          <div className="space-y-8">
            {study.challengePoints.map((point, i) => (
              <motion.div key={point} {...fadeUp}>
                <ChallengePoint text={point} icon={challengeIcons[i] || Sparkles} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <motion.div {...fadeUp}>
            <SectionLabel>{study.approachTitle}</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">A premium system, built for the real world.</h2>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {study.approachCards.map((card) => {
              const Icon = iconMap[card.icon]
              return (
                <motion.div key={card.title} {...fadeUp} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="h-6 w-6 text-[#ff7a00]" />
                  <div className="mt-5 text-2xl font-medium tracking-tight">{card.title}</div>
                  <p className="mt-4 text-sm leading-7 text-white/60">{card.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] text-black">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-6">
          <motion.div {...fadeUp}>
            <SectionLabel dark={false}>The impact</SectionLabel>
          </motion.div>
          <div className="mt-8 grid gap-4 border-t border-black/10 pt-8 md:grid-cols-4">
            {study.impacts.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div key={item.title} {...fadeUp} className="flex items-start gap-4 border-black/10 md:border-r md:pr-5 last:md:border-r-0">
                  <Icon className="mt-1 h-6 w-6 text-[#ff7a00]" />
                  <div>
                    <div className="text-xl font-medium leading-tight">{item.title}</div>
                    <div className="mt-2 text-sm text-black/55">{item.sub}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {study.gallery.map((item) => (
              <motion.div key={item.title} {...fadeUp} className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-xl font-medium tracking-tight">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-black/65">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-6">
        <motion.div {...fadeUp} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Your story deserves to be experienced.</div>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                从策略到执行，真正有分量的案例不是讲得多漂亮，而是能不能把人、空间、内容和品牌关系接起来。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/#work" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                Back to Work
              </Link>
              <Link href={`/case-studies/${otherCases[0]?.slug || caseStudies[0].slug}`} className="rounded-full border border-[#ff7a00] px-6 py-3 text-sm font-medium text-[#ff7a00] transition hover:bg-[#ff7a00] hover:text-black">
                Next Case Study
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {otherCases.map((item) => (
            <Link key={item.slug} href={`/case-studies/${item.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] text-left transition hover:border-white/20">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={item.hero} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#ff7a00]">{item.category}</div>
                <div className="mt-2 text-2xl font-medium tracking-tight">{item.title}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
                  View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
