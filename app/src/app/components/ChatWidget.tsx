'use client'

import { useState } from 'react'

type Message = {
  id: number
  role: 'user' | 'assistant'
  content: string
}

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        'Ask about my experience, projects, or how this portfolio is deployed (Docker, AWS, Terraform, Vercel).',
    },
  ])
  const [input, setInput] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    const nextId = messages.length + 1
    const userMessage: Message = {
      id: nextId,
      role: 'user',
      content: input.trim(),
    }
    const assistantMessage: Message = {
      id: nextId + 1,
      role: 'assistant',
      content:
        "Placeholder response. Final version will call an LLM with context from my CV and project write‑ups.",
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInput('')
  }

  return (
    <section
      id="ai-assistant"
      className="mt-6 rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-600/15 via-slate-950/90 to-slate-950 p-4 text-sm shadow-lg shadow-purple-500/20"
    >
      <div className="mb-3">
        <p className="text-xs uppercase tracking-[0.18em] text-purple-200/80">
          AI assistant
        </p>
        <p className="text-sm text-slate-100">
          Ask about my projects, tech choices, and migration from Docker/AWS to Vercel.
        </p>
      </div>

      <div className="mb-3 h-40 space-y-2 overflow-y-auto rounded-xl bg-slate-950/80 p-3 text-xs text-slate-100">
        {messages.map((m) => (
          <div key={m.id} className="flex gap-2">
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {m.role === 'user' ? 'You' : 'AI'}
            </span>
            <p className="flex-1 text-slate-200">{m.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="h-9 flex-1 rounded-full border border-slate-700 bg-slate-950/80 px-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
          placeholder="e.g. How is the habit tracker deployed?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 rounded-full bg-purple-500 px-3 text-xs font-medium text-white hover:bg-purple-400"
        >
          Ask
        </button>
      </form>
    </section>
  )
}
