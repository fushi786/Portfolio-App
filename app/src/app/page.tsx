import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { ChatWidget } from './components/ChatWidget'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section className="mt-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <p className="uppercase tracking-[0.18em] text-slate-400">
            Highlight projects
          </p>
          <Link
            href="/projects"
            className="text-[11px] text-slate-400 underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <ProjectCard
            title="TailorCV"
            subtitle="GenAI CV app"
            description="GenAI‑powered CV and cover‑letter helper with sleek, card‑based UI and purple branding."
            tech={['React', 'Next.js', 'Tailwind', 'GenAI']}
            liveUrl="https://gen-ai-cv.vercel.app/"
            codeUrl="https://github.com/fushi786/GenAI-CV"
          />
          <ProjectCard
            title="Habit tracker"
            subtitle="Full‑stack app"
            description="Supabase‑backed habit tracker with auth, daily logs, streak analytics, and TailorCV‑style design."
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
            description="Async Python bot for a social 3D environment: welcomes, VIPs, teleports, emotes, moderation, and stats."
            tech={['Python', 'Async IO', 'Bot SDK', 'JSON']}
            codeUrl="https://github.com/fushi786/PythonBot"
          />
        </div>
      </section>

      <ChatWidget />
    </div>
  )
}
