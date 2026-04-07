'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SetupPage() {
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'ready' | 'done' | 'error'>('loading')
  const [envStatus, setEnvStatus] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', name: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/setup')
      .then((r) => r.json())
      .then((data) => {
        if (data.setupComplete) {
          setStatus('done')
        } else {
          setStatus('ready')
          setEnvStatus(data.envStatus || {})
        }
      })
      .catch(() => setStatus('error'))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password, name: form.name }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Setup failed.')
        setSubmitting(false)
        return
      }
      setStatus('done')
    } catch {
      setError('Network error. Please try again.')
      setSubmitting(false)
    }
  }

  // Loading state
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-white/50 text-sm">Checking system status...</div>
      </div>
    )
  }

  // Database error
  if (status === 'error') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h1 className="text-xl font-bold text-white mb-2">Database Not Ready</h1>
          <p className="text-white/50 text-sm mb-6">
            The database has not been initialized yet. Make sure <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">prisma db push</code> has been run.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-lg bg-[#b30000] hover:bg-[#cc0000] text-white text-sm font-medium transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  // Setup already completed - redirect to login
  if (status === 'done') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="text-4xl mb-4">✅</div>
          <h1 className="text-xl font-bold text-white mb-2">Setup Complete</h1>
          <p className="text-white/50 text-sm mb-6">
            Your admin account has been created. You can now sign in.
          </p>
          <button
            onClick={() => router.push('/admin/login')}
            className="px-6 py-3 rounded-lg bg-[#b30000] hover:bg-[#cc0000] text-white text-sm font-semibold transition-colors"
          >
            Go to Login →
          </button>
        </div>
      </div>
    )
  }

  // Setup form
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-tight">Mamak Games</h1>
          <p className="text-sm text-white/40 mt-1">First-Run Setup</p>
        </div>

        {/* Environment status warnings */}
        {envStatus.NEXTAUTH_SECRET === 'MISSING' && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">
            <strong>Warning:</strong> NEXTAUTH_SECRET is not set. Authentication will not work in production.
            Generate one with: <code className="bg-black/30 px-1 py-0.5 rounded">openssl rand -base64 32</code>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5 block">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-[#b30000]/40 focus:outline-none transition-colors"
              placeholder="Admin Name"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5 block">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-[#b30000]/40 focus:outline-none transition-colors"
              placeholder="admin@mamakgames.com"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5 block">Password *</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-[#b30000]/40 focus:outline-none transition-colors"
              placeholder="Min 8 characters"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5 block">Confirm Password *</label>
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(e) => setForm((p) => ({ ...p, confirmPassword: e.target.value }))}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-[#b30000]/40 focus:outline-none transition-colors"
              placeholder="Repeat password"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg bg-[#b30000] hover:bg-[#cc0000] text-white text-sm font-semibold transition-colors disabled:opacity-50"
          >
            {submitting ? 'Creating Account...' : 'Create Admin Account'}
          </button>
        </form>

        <p className="text-center text-xs text-white/20 mt-6">
          This page is only available during initial setup.
        </p>
      </div>
    </div>
  )
}
