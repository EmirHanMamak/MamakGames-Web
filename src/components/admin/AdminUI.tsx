'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

// ─── Save Button ─────────────────────────────────────
export function SaveButton({ loading, label = 'Save Changes' }: { loading: boolean; label?: string }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="px-6 py-2.5 rounded-lg bg-[#b30000] hover:bg-[#cc0000] text-white text-sm font-semibold transition-colors disabled:opacity-50"
    >
      {loading ? 'Saving...' : label}
    </button>
  )
}

// ─── Form Field ──────────────────────────────────────
export function FormField({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1.5 block">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-white/25 mt-1">{hint}</p>}
    </div>
  )
}

// ─── Text Input ──────────────────────────────────────
interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string
  onChange: (v: string) => void
}

export function TextInput({ value, onChange, placeholder, ...props }: TextInputProps) {
  return (
    <input
      {...props}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-brand-primary/40 focus:outline-none transition-colors"
    />
  )
}

// ─── Textarea ────────────────────────────────────────
export function TextArea({ value, onChange, placeholder, rows = 4 }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-2.5 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-[#b30000]/40 focus:outline-none transition-colors resize-y"
    />
  )
}

// ─── Toggle ──────────────────────────────────────────
export function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <div
        onClick={() => onChange(!checked)}
        className={`w-10 h-5 rounded-full transition-colors relative ${checked ? 'bg-[#b30000]' : 'bg-white/10'}`}
      >
        <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </div>
      <span className="text-sm text-white/60">{label}</span>
    </label>
  )
}

// ─── Status Badge ────────────────────────────────────
export function StatusBadge({ active, labelOn = 'Published', labelOff = 'Draft' }: { active: boolean; labelOn?: string; labelOff?: string }) {
  return (
    <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium ${active ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-white/30'}`}>
      {active ? labelOn : labelOff}
    </span>
  )
}

// ─── Toast ───────────────────────────────────────────
export function Toast({ message, type = 'success' }: { message: string; type?: 'success' | 'error' }) {
  if (!message) return null
  return (
    <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg text-sm font-medium shadow-lg animate-in slide-in-from-bottom-4 ${
      type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
    }`}>
      {message}
    </div>
  )
}

// ─── Image Upload ────────────────────────────────────
export function ImageUpload({ value, onChange, label = 'Upload Image' }: { value: string; onChange: (url: string) => void; label?: string }) {
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.url) onChange(data.url)
    } catch (err) {
      console.error('Upload failed:', err)
    }
    setUploading(false)
  }

  return (
    <div className="space-y-2">
      <input ref={inputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
      {value && (
        <div className="relative w-40 h-28 rounded-lg overflow-hidden border border-white/[0.08]">
          <Image src={value} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-sm text-white/60 transition-colors"
        >
          {uploading ? 'Uploading...' : label}
        </button>
        {value && (
          <button type="button" onClick={() => onChange('')} className="text-xs text-red-400 hover:text-red-300">Remove</button>
        )}
      </div>
      <TextInput value={value} onChange={onChange} placeholder="Or paste image URL..." />
    </div>
  )
}

// ─── Card ────────────────────────────────────────────
export function AdminCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl bg-[#111] border border-white/[0.06] p-6 ${className}`}>
      {children}
    </div>
  )
}

// ─── Delete Confirm ──────────────────────────────────
export function DeleteButton({ onDelete, label = 'Delete' }: { onDelete: () => void; label?: string }) {
  const [confirming, setConfirming] = useState(false)
  if (confirming) {
    return (
      <div className="flex items-center gap-2">
        <button onClick={onDelete} className="px-3 py-1.5 rounded bg-red-600 text-white text-xs font-medium hover:bg-red-500">Confirm</button>
        <button onClick={() => setConfirming(false)} className="px-3 py-1.5 rounded bg-white/10 text-white/60 text-xs hover:bg-white/20">Cancel</button>
      </div>
    )
  }
  return (
    <button onClick={() => setConfirming(true)} className="text-xs text-red-400/60 hover:text-red-400 transition-colors">
      {label}
    </button>
  )
}
