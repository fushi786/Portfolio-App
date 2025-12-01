import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fushi · Portfolio',
  description: 'Full‑stack, Cloud & GenAI Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.20),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_rgba(15,23,42,1))]" />
          <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
            <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur-xl md:p-8">
              <header className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-sm font-semibold text-white shadow-lg">
                    F
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Portfolio
                    </p>
                    <p className="text-sm font-medium text-slate-100">
                      Full‑stack · Cloud · GenAI · Python
                    </p>
                  </div>
                </div>
                <nav className="hidden gap-3 text-xs font-medium text-slate-300 md:flex">
                  <Link href="/" className="rounded-full bg-slate-900/60 px-3 py-1 text-slate-100">
                    Home
                  </Link>
                  <Link href="/projects" className="rounded-full px-3 py-1 hover:bg-slate-800/60">
                    Projects
                  </Link>
                  <Link href="/about" className="rounded-full px-3 py-1 hover:bg-slate-800/60">
                    About
                  </Link>
                  <Link href="/contact" className="rounded-full px-3 py-1 hover:bg-slate-800/60">
                    Contact
                  </Link>
                </nav>
              </header>

              {children}

              <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-white/5 pt-4 text-[11px] text-slate-500 md:flex-row">
                <span>© {new Date().getFullYear()} Fushi · Portfolio</span>
                <span>v0.1.0 · Next.js · TypeScript · Tailwind · Docker · AWS · Terraform · GenAI · Python</span>
              </footer>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
