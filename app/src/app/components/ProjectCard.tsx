import Link from 'next/link'

type ProjectCardProps = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  liveUrl?: string
  codeUrl?: string
}

export function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm shadow-sm">
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
          {subtitle}
        </p>
        <h3 className="text-base font-semibold text-slate-50">{title}</h3>
        <p className="text-xs text-slate-300">{description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-300">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-900/70 px-2 py-0.5 text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-900 hover:bg-slate-200"
          >
            Live
          </Link>
        )}
        {codeUrl && (
          <Link
            href={codeUrl}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-slate-950/70 px-3 py-1 font-medium text-slate-100 hover:border-purple-400/70"
          >
            Code
          </Link>
        )}
      </div>
    </article>
  )
}
