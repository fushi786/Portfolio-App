export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-50">Contact</h1>
      <p className="text-sm text-slate-300">
        Best way to reach me is via email or LinkedIn. For technical deep dives, I&apos;m happy to walk through the code, infra diagrams, and trade‑offs behind these projects.
      </p>

      <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200">
        <p>Email: <span className="text-slate-100">your.email@example.com</span></p>
        <p>LinkedIn: <span className="text-slate-100">/in/your‑linkedin</span></p>
      </div>
    </div>
  )
}
