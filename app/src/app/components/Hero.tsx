'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="mb-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-start">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-300/80">
          Portfolio · 2025
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
          Shipping full‑stack, cloud & GenAI projects.
        </h1>
        <p className="max-w-xl text-sm text-slate-300">
          React/Next.js, AWS, Docker, Terraform, Supabase and Python. This portfolio
          highlights a GenAI CV app, a full‑stack habit tracker, a Dockerised portfolio,
          and a realtime Python bot for a social 3D environment.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/30"
          >
            View projects
          </Link>
          <a
            href="#ai-assistant"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-100 hover:border-purple-500/70 hover:text-purple-100"
          >
            Ask the AI assistant
          </a>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="rounded-full bg-slate-900/70 px-2 py-1">
            React · Next.js · TypeScript
          </span>
          <span className="rounded-full bg-slate-900/70 px-2 py-1">
            AWS · Docker · Terraform
          </span>
          <span className="rounded-full bg-slate-900/70 px-2 py-1">
            Supabase · Postgres · CI/CD
          </span>
          <span className="rounded-full bg-slate-900/70 px-2 py-1">
            Python · Async bots · GenAI
          </span>
        </div>
      </div>

      <aside className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/60">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          Snapshot
        </p>
        <div className="space-y-2 text-sm">
          <p className="text-slate-100">
            Targeting mid‑level / senior React, full‑stack, and GenAI roles.
          </p>
          <p className="text-slate-300">
            Comfortable owning features end‑to‑end: frontend, backend, infra as code,
            and AI integrations.
          </p>
        </div>
      </aside>
    </section>
  )
}
