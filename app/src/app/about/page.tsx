export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-50">About</h1>
      <p className="text-sm text-slate-300">
        Engineer focused on React/Next.js, full‑stack web apps, AWS, and GenAI‑driven products. Comfortable shipping features end‑to‑end:
        from design and implementation through CI/CD and monitoring.
      </p>

      <div className="grid gap-3 text-sm md:grid-cols-2">
        <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-950/80 p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Core skills
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-200">
            <li>React, Next.js, TypeScript</li>
            <li>Node.js APIs, REST/JSON</li>
            <li>Tailwind CSS & UI systems</li>
          </ul>
        </div>
        <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-950/80 p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Cloud & DevOps
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-200">
            <li>AWS (including Lambda and serverless patterns)</li>
            <li>Docker, Terraform, CI/CD pipelines</li>
            <li>Monitoring, logging, and production readiness</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
