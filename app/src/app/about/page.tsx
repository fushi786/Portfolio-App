export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-50">About</h1>
      <p className="text-sm text-slate-300">
        Full‑Stack Cloud Engineer with 6 years of experience building cloud‑native, serverless, and
        end‑to‑end applications on AWS using Python, React, and modern JavaScript. Comfortable owning
        features from API design through to front‑end UX, infrastructure, and CI/CD.
      </p>

      <section className="grid gap-3 text-sm md:grid-cols-2">
        <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-950/80 p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Experience
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-200">
            <li>Senior Application Developer at a large consultancy, building AWS‑backed, full‑stack systems for public‑sector and enterprise clients.</li>
            <li>Previously Software Engineer delivering serverless backends, React front‑ends, and automation pipelines on AWS.</li>
            <li>Early experience across analytics, QA, and customer‑facing roles, giving strong communication and stakeholder skills.</li>
          </ul>
        </div>

        <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-950/80 p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Core skills
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-200">
            <li>Frontend: React, Next.js, TypeScript, modern, responsive UI and component‑driven design.</li>
            <li>Backend: Python and Node.js APIs, serverless backends, event‑driven patterns, REST API design.</li>
            <li>Cloud & DevOps: AWS (Lambda, API Gateway, DynamoDB, S3, Cognito, SES), CI/CD with GitHub Actions, Docker, basic Terraform, monitoring and logging.</li>
            <li>Databases: DynamoDB, PostgreSQL, MySQL, and NoSQL stores like Firestore.</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-3 text-sm md:grid-cols-2">
        <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-950/80 p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Education & certifications
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-200">
            <li>BSc (Hons) Digital &amp; Technology Solutions — First Class.</li>
            <li>A‑Levels in Maths, Chemistry, and Biology.</li>
            <li>AWS Certified Cloud Practitioner plus multiple OutSystems and Blue Prism certifications.</li>
          </ul>
        </div>

        <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-950/80 p-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Highlights
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-200">
            <li>Built and maintained AWS‑backed systems with Lambda, API Gateway, DynamoDB, and S3 for real users.</li>
            <li>Designed CI/CD pipelines, automation scripts, and monitoring to improve reliability and delivery speed.</li>
            <li>Created a Python automation bot serving hundreds of weekly users, using async workflows, SDKs, and persistent state.</li>
          </ul>
        </div>
      </section>

      <p className="text-[11px] text-slate-500">
        Full CV (with contact details) is available on request via email or LinkedIn.
      </p>
    </div>
  )
}
