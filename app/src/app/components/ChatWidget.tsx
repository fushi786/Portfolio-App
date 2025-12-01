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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userText = input.trim()
    setInput('')
    setError(null)

    const nextId = messages.length + 1
    const userMessage: Message = {
      id: nextId,
      role: 'user',
      content: userText,
    }
    setMessages((prev) => [...prev, userMessage])

    try {
      setLoading(true)
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        const msg = data.error || 'Something went wrong with the AI response.'
        setError(msg)
        setMessages((prev) => [
          ...prev,
          {
            id: nextId + 1,
            role: 'assistant',
            content: 'Sorry, there was an error contacting the AI service.',
          },
        ])
        return
      }

      const data = await res.json()
      const replyText: string =
        typeof data.reply === 'string'
          ? data.reply
          : 'No reply received from the AI service.'

      setMessages((prev) => [
        ...prev,
        {
          id: nextId + 1,
          role: 'assistant',
          content: replyText,
        },
      ])
    } catch (err) {
      console.error(err)
      setError('Network error contacting AI service.')
      setMessages((prev) => [
        ...prev,
        {
          id: nextId + 1,
          role: 'assistant',
          content:
            'Sorry, there was a network error contacting the AI service.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function quickAsk(prompt: string) {
    setInput(prompt)
  }

  return (
    <section
      id="ai-assistant"
      className="mt-6 rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-600/15 via-slate-950/90 to-slate-950 p-4 text-sm shadow-lg shadow-purple-500/20"
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-purple-200/80">
            AI assistant
          </p>
          <p className="text-sm text-slate-100">
            Ask about my experience, projects, and infra decisions.
          </p>
        </div>
        <div className="hidden gap-2 text-[10px] md:flex">
          <button
            type="button"
            className="rounded-full bg-slate-900/70 px-2 py-1 text-slate-200 hover:bg-slate-800"
            onClick={() =>
              quickAsk('Summarise my experience for a senior React/Next.js role.')
            }
          >
            React focus
          </button>
          <button
            type="button"
            className="rounded-full bg-slate-900/70 px-2 py-1 text-slate-200 hover:bg-slate-800"
            onClick={() =>
              quickAsk('Explain how the habit tracker app is designed and deployed.')
            }
          >
            Habit tracker
          </button>
          <button
            type="button"
            className="rounded-full bg-slate-900/70 px-2 py-1 text-slate-200 hover:bg-slate-800"
            onClick={() =>
              quickAsk('Describe my Python game bot and what it demonstrates.')
            }
          >
            Python bot
          </button>
        </div>
      </div>

      <div className="mb-3 h-40 space-y-2 overflow-y-auto rounded-xl bg-slate-950/80 p-3 text-xs text-slate-100">
        {messages.map((m) => (
          <div key={m.id} className="flex gap-2">
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {m.role === 'user' ? 'You' : 'AI'}
            </span>
            <p className="flex-1 whitespace-pre-wrap text-slate-200">
              {m.content}
            </p>
          </div>
        ))}
        {loading && (
          <p className="text-[11px] text-purple-200/80">Thinking…</p>
        )}
      </div>

      {error && (
        <p className="mb-2 text-[11px] text-red-400">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="h-9 flex-1 rounded-full border border-slate-700 bg-slate-950/80 px-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
          placeholder="Ask about my experience or any of the projects…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="h-9 rounded-full bg-purple-500 px-3 text-xs font-medium text-white hover:bg-purple-400 disabled:opacity-60"
        >
          {loading ? 'Sending…' : 'Ask'}
        </button>
      </form>
    </section>
  )
}
