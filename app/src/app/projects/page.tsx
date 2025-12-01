import { ProjectCard } from '../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-50">Projects</h1>
      <p className="text-sm text-slate-300">
        A focused set of projects showing GenAI UX, full‑stack web apps, infra as code,
        and Python realtime bot development.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <ProjectCard
          title="TailorCV"
          subtitle="GenAI CV app"
          description="Personalised CV and cover‑letter assistant that uses generative AI to adapt applications to job descriptions."
          tech={['React', 'Next.js', 'Tailwind', 'GenAI']}
          liveUrl="https://gen-ai-cv.vercel.app/"
          codeUrl="https://github.com/fushi786/GenAI-CV"
        />
        <ProjectCard
          title="Habit tracker"
          subtitle="Full‑stack app"
          description="Secure habit tracker with Supabase auth, RLS‑protected Postgres data, and streak analytics for daily habits."
          tech={['Next.js', 'Supabase', 'Postgres', 'Auth']}
          liveUrl="https://habit-tracker-nu-rosy.vercel.app/login"
          codeUrl="https://github.com/fushi786/habit-tracker"
        />
      <ProjectCard
  title="Portfolio"
  subtitle="Infra & migration"
  description="Containerised Next.js portfolio deployed on AWS with Terraform, later migrated to Vercel."
  tech={['Next.js', 'Docker', 'AWS', 'Terraform', 'CI/CD']}
  liveUrl="https://portfolio-app-alpha-taupe.vercel.app/"
  codeUrl="https://github.com/fushi786/Portfolio-App"
/>
        <ProjectCard
          title="Python game bot"
          subtitle="Realtime bot"
          description="Async Python bot that welcomes users, manages VIPs via JSON storage, teleports players, triggers emotes from a large JSON catalogue, and offers moderation and stats tools via Web APIs."
          tech={['Python', 'Async IO', 'Bot SDK', 'Web API', 'JSON']}
          codeUrl="https://github.com/fushi786/PythonBot"
        />
      </div>

      <p className="text-[11px] text-slate-500">
        The Python bot runs inside a live social 3D environment rather than a public web server,
        so it is showcased via code, API usage, and behaviour rather than a browser demo.
      </p>
    </div>
  )
}
