export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-50">Contact</h1>
      <p className="text-sm text-slate-300">
        Get in touch via email or LinkedIn. Open to discussing full‑stack, cloud, and GenAI roles.
      </p>

      <div className="grid gap-3 text-sm md:grid-cols-2">
        <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Email
          </p>
          <a
            href="mailto:faseeyounis@outlook.com"
            className="block text-slate-100 underline underline-offset-4 hover:text-purple-300"
          >
            faseeyounis@outlook.com
          </a>
        </div>

        <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/fasee-ul-hasan-younis-898694180/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-slate-100 underline underline-offset-4 hover:text-purple-300"
          >
            linkedin.com/in/fasee-ul-hasan-younis-898694180
          </a>
        </div>
      </div>

      <p className="text-[11px] text-slate-500">
        Full CV (with additional contact details) is available on request.
      </p>
    </div>
  )
}
