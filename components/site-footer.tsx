import Link from 'next/link'
import { Camera, Mail } from 'lucide-react'
import { assets, caseStudies } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] md:px-6">
        <div>
          <Link href="/" className="flex items-center gap-3 text-left">
            <img src={assets.logo} alt="Tiptop Karipop" className="h-10 w-10 rounded-md object-cover" />
            <div>
              <div className="text-lg font-semibold tracking-tight">Tiptop Karipop</div>
              <div className="text-xs text-white/45">Built for content, events and conversion.</div>
            </div>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
            We craft culture-driven experiences that move people and grow brands. 我们打造有温度的体验，连接人心，成就品牌。
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">Navigate</div>
          <div className="mr-4 space-y-3 text-sm text-white/70">
            <Link href="/#services" className="block transition hover:text-white">Services</Link>
            <Link href="/#work" className="block transition hover:text-white">Work</Link>
            <Link href="/#about" className="block transition hover:text-white">About</Link>
            <Link href="/#contact" className="block transition hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">Case studies</div>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            {caseStudies.map((item) => (
              <Link key={item.slug} href={`/case-studies/${item.slug}`} className="block transition hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">Follow</div>
          <div className="mt-4 flex gap-3 text-white/70">
            {[Camera, Mail].map((Icon, index) => (
              <div key={index} className="rounded-full border border-white/10 p-3">
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-white/45">Kuala Lumpur rooted · Brand experiences · Event-led growth · O2O conversion</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/35 md:px-6">
        © 2025 Tiptop Karipop. All rights reserved.
      </div>
    </footer>
  )
}
