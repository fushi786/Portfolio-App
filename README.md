# Portfolio App

A modern, full-stack portfolio showcasing my projects, experience, and skills as a Full-Stack Cloud Engineer.  
Built with Next.js, TypeScript, and Tailwind CSS, featuring an AI assistant powered by Google Gemini for interactive Q&A about my background and work.

**Live site:** [https://portfolio-app-alpha-taupe.vercel.app/](https://portfolio-app-alpha-taupe.vercel.app/)

---

## Features

- **Project showcase**  
  Highlights four key projects with equal weight:
  - **TailorCV** – GenAI-powered CV and cover-letter helper.
  - **Habit Tracker** – Full-stack Supabase app with auth, logs, and streak analytics.
  - **Portfolio** (this site) – Dockerised Next.js app with planned AWS deployment via Terraform, later migrated to Vercel.
  - **Python game bot** – Async Python bot for a social 3D environment with VIP system, emotes, teleports, moderation, and stats.

- **AI assistant**  
  Embedded Gemini-powered chatbot that answers questions about my experience, skills, certifications, projects, and contact details in real time.

- **About & Contact pages**  
  Clean, public-safe CV summary (no phone number) with links to email and LinkedIn.

- **Responsive, on-brand design**  
  Purple/glassy aesthetic with card-based layout, consistent across all pages.

---

## Tech stack

- **Frontend:** React, Next.js 14 (App Router), TypeScript, Tailwind CSS
- **AI integration:** Google Gemini API (via REST) for conversational assistant
- **Deployment:** Vercel (with planned Docker + AWS + Terraform setup for infra demonstration)
- **Version control:** Git, GitHub

---

## Project structure

portfolio-app/
app/ # Next.js App Router application
app/ # Pages (routes)
page.tsx # Home
layout.tsx # Root layout
about/
page.tsx # About page
contact/
page.tsx # Contact page
projects/
page.tsx # Projects grid
components/ # Reusable React components
Hero.tsx
ProjectCard.tsx
ChatWidget.tsx
api/
ai-chat/
route.ts # Gemini API handler
globals.css # Global styles
infra/ # Infrastructure-as-code (Docker, Terraform, CI/CD)
docker/
Dockerfile # Multi-stage Docker build for Next.js
terraform/ # (Planned) AWS resources via Terraform
ci/ # (Planned) CI/CD pipeline config
README.md

text

---

## Getting started

### Prerequisites

- Node.js 20+
- npm (or yarn/pnpm)
- A Gemini API key from [Google AI Studio](https://aistudio.google.com)

### Local setup

1. **Clone the repo**

git clone https://github.com/fushi786/Portfolio-App.git
cd Portfolio-App/app

text

2. **Install dependencies**

npm install

text

3. **Configure environment variables**

Create `app/.env.local`:

GEMINI_API_KEY=your-gemini-key-here
GEMINI_MODEL_NAME=gemini-2.0-flash
GEMINI_API_BASE_URL=https://generativelanguage.googleapis.com/v1beta/models

text

4. **Run the development server**

npm run dev

text

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

### Current: Vercel

The live site is deployed on Vercel with automatic deployments from the `main` branch.

**Environment variables** on Vercel:
- `GEMINI_API_KEY`
- `GEMINI_MODEL_NAME`
- `GEMINI_API_BASE_URL`

### Planned: Docker + AWS + Terraform

This portfolio will also demonstrate:

- **Dockerfile** – Multi-stage build for production Next.js container.
- **AWS deployment** – ECS/EC2 with Terraform-managed infrastructure (VPC, load balancer, ECR).
- **CI/CD** – Automated build, push to ECR, and Terraform apply via GitHub Actions or Jenkins.
- **Migration story** – Document the trade-offs and process of moving from AWS to Vercel (cost, simplicity, edge performance).

This showcases end-to-end cloud engineering: containerisation, infrastructure-as-code, and architectural decision-making.

---

## Key pages

- **Home (`/`)** – Hero, project cards, AI assistant
- **Projects (`/projects`)** – Detailed project grid with live/code links
- **About (`/about`)** – CV summary: experience, skills, certifications, education
- **Contact (`/contact`)** – Email and LinkedIn links

---

## AI assistant

The embedded chatbot uses Google Gemini with a fixed system prompt containing:

- My professional background (6 years as Full-Stack Cloud Engineer)
- Core skills (React/Next, Python, AWS, CI/CD, Docker, Terraform)
- Certifications (AWS Cloud Practitioner, OutSystems, Blue Prism)
- All four portfolio projects and their context
- Public contact details (email, LinkedIn)

Users can ask questions like:
- "Who is Fasee?"
- "What technologies do you use?"
- "Tell me about the habit tracker"
- "How do I contact you?"

---

## What this project demonstrates

- Modern full-stack development with Next.js (App Router) and TypeScript
- API integration (Gemini REST API for AI features)
- Component-driven UI design with Tailwind CSS
- Secure environment variable management (API keys never committed)
- Responsive, professional portfolio design
- (Planned) Docker containerisation, AWS cloud deployment, and Terraform infrastructure-as-code

---

## Contact

- **Email:** faseeyounis@outlook.com  
- **LinkedIn:** [linkedin.com/in/fasee-ul-hasan-younis-898694180](https://linkedin.com/in/fasee-ul-hasan-younis-898694180/)  
- **GitHub:** [github.com/fushi786](https://github.com/fushi786)

---

## License

This project is open source and available for reference. Feel free to explore the code, but please don't copy the portfolio content verbatim (it's specific to my background and projects).
