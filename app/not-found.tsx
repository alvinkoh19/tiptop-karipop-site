import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-5 py-20 md:px-6">
      <div>
        <div className="text-[11px] uppercase tracking-[0.32em] text-[#ff7a00]">404</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Page not found.</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
          The page you are looking for does not exist. Head back to the homepage and continue from there.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
          Back to home
        </Link>
      </div>
    </main>
  )
}
