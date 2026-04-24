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
  MessageCircle,
  Play,
  Search,
  Share2,
  Sparkles,
  Store,
  Trophy,
  Users,
} from 'lucide-react'
import { assets, caseStudies, contactInfo, homeHighlights, processSteps, serviceCards, type IconKey } from '@/lib/site-data'
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

type HomePageProps = {
  fadeUp: {
    initial: { opacity: number; y: number }
    whileInView: { opacity: number; y: number }
    viewport: { once: boolean; amount: number }
    transition: { duration: number; ease: 'easeOut' }
  }
}

function HeroStat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-md">
      <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">Signal</div>
      <div className="mt-2 text-lg font-medium">{title}</div>
      <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
    </div>
  )
}

export function HomePage({ fadeUp }: HomePageProps) {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:px-6 md:py-20">
        <div className="flex flex-col justify-between">
          <motion.div {...fadeUp}>
            <SectionLabel>Kuala Lumpur rooted. Real-world execution.</SectionLabel>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              We turn
              <span className="block text-white/75">content</span>
              into turnout.
            </h1>
            <div className="mt-4 text-4xl italic leading-[1.02] text-white/90 md:text-6xl">
              And events
              <span className="block">into growth.</span>
            </div>
            <p className="mt-8 max-w-lg text-base leading-7 text-white/65 md:text-lg">
              我们不是只做漂亮画面，也不是只办一场热闹活动。Tiptop Karipop 更像一支会亲自下场的内容与活动操盘团队，把品牌叙事、现场体验与 O2O 转化接起来。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/#services" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                Explore Services
              </Link>
              <Link href="/#work" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/35">
                See Real Projects
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">Focus</div>
              <div className="mt-2 text-xl font-medium">Content Systems</div>
              <p className="mt-2 text-sm leading-6 text-white/60">Strategy, concept, rollout and platform rhythm that support actual business logic.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">Focus</div>
              <div className="mt-2 text-xl font-medium">Event Momentum</div>
              <p className="mt-2 text-sm leading-6 text-white/60">Pre-heat, public visibility, on-ground experience and post-event brand extension.</p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl md:min-h-[680px]">
          <img src={assets.kldfHero} alt="TTK hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />
          <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/80 backdrop-blur">
            Tiptop Karipop / Brand Experience
          </div>
          <div className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-3">
            <HeroStat title="Attention that moves offline" desc="The job is not finished when people see it. It starts when people show up." />
            <HeroStat title="Strategy × execution × 现场" desc="Thinking matters. But the real advantage is being able to make it happen on the ground." />
            <HeroStat title="Brand memory over empty traffic" desc="A crowd photo means little without experience design and a reason to return." />
          </div>
        </motion.div>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <motion.div {...fadeUp} className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                A growth operator,
                <span className="block text-white/65">not just a content team.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-white/60">
                我们不是只做内容制作，而是更接近品牌增长系统的运营方。重点不是增加内容数量，而是建立一套从 Content → Conversion、CRM 沉淀、私域承接到活动放大的可持续增长结构。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {serviceCards.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[#101010] p-6">
                    <Icon className="h-6 w-6 text-[#ff7a00]" />
                    <div className="mt-5 text-2xl font-medium tracking-tight">{item.title}</div>
                    <p className="mt-4 text-sm leading-7 text-white/60">{item.desc}</p>
                    <div className="mt-5 space-y-2">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-white/70">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-[#f3f0eb] text-black">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-[0.65fr_1.35fr]">
            <div>
              <SectionLabel dark={false}>Proof of execution</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                The work looks better
                <span className="block text-black/55">when it is real.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-black/65">
                真实团队、真实活动、真实空间，比任何空洞包装更有说服力。你网站最强的部分，不该是假想案例，而是已经做过的事情。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {homeHighlights.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="text-xl font-medium">{item.title}</div>
                    <p className="mt-3 text-sm leading-6 text-black/65">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:px-6">
        <motion.div {...fadeUp} className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Selected realities</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Case studies built from real work.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/60">
            这三页不是装饰，而是正式网站最该成立的部分：用户要先看到你做过什么，才会相信你接下来能做什么。
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <motion.div key={item.slug} {...fadeUp}>
              <Link className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101010] text-left transition hover:border-white/20" href={`/case-studies/${item.slug}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.hero} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#ff7a00]">{item.category}</div>
                  <div className="mt-3 text-3xl font-medium leading-tight tracking-tight">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.subtitle}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                    View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <motion.div {...fadeUp}>
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">How we build from attention to arrival.</h2>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((item) => (
              <motion.div key={item.no} {...fadeUp} className="rounded-[1.75rem] border border-white/10 bg-[#0f0f0f] p-6">
                <div className="text-sm font-medium text-[#ff7a00]">{item.no}</div>
                <div className="mt-4 text-2xl font-medium tracking-tight">{item.title}</div>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-6">
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img src={assets.team} alt="TTK team" className="h-full max-h-[520px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/35" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-8 py-10 md:px-12">
              <SectionLabel>Let’s build something people actually show up for.</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Tiptop Karipop
                <span className="block text-white/70">内容营销 × 活动营销 × O2O 转化</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
                现在对外联络先采用你现阶段真实可用的联络方式。先让 Contact 板块能接得到人，比继续做花样更重要。
              </p>
              <div className="mt-8 grid max-w-3xl gap-3 md:grid-cols-2">
                <a href={`tel:${contactInfo.eventMarketing.replace(/\s+/g, '')}`} className="rounded-2xl border border-white/15 bg-black/25 px-5 py-4 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">Event Marketing</div>
                  <div className="mt-2 text-lg font-medium text-white">{contactInfo.eventMarketing}</div>
                </a>
                <a href={`tel:${contactInfo.contentMarketing.replace(/\s+/g, '')}`} className="rounded-2xl border border-white/15 bg-black/25 px-5 py-4 backdrop-blur">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">Content Marketing</div>
                  <div className="mt-2 text-lg font-medium text-white">{contactInfo.contentMarketing}</div>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="rounded-2xl border border-white/15 bg-black/25 px-5 py-4 backdrop-blur md:col-span-2">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">Email</div>
                  <div className="mt-2 break-all text-lg font-medium text-white">{contactInfo.email}</div>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${contactInfo.email}`} className="rounded-full bg-[#ff7a00] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90">
                  Contact TTK
                </a>
                <span className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/35">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
