'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { assets } from '@/lib/site-data'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/case-studies/kuala-lumpur-durian-fest-2025', label: 'Case Studies' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-left">
          <img src={assets.logo} alt="Tiptop Karipop" className="h-10 w-10 rounded-md object-cover" />
          <div>
            <div className="text-lg font-semibold tracking-tight">Tiptop Karipop</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">Content × Experience × Conversion</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#ff7a00] px-5 py-2.5 text-sm font-medium text-[#ff7a00] transition hover:bg-[#ff7a00] hover:text-black"
          >
            Let’s Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/10 p-2 md:hidden" aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="space-y-2 px-5 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full rounded-2xl bg-white/[0.04] px-4 py-3 text-left text-sm text-white/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="block w-full rounded-2xl bg-[#ff7a00] px-4 py-3 text-left text-sm font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
