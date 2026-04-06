'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminCard, FormField, TextInput, TextArea, SaveButton, Toggle, ImageUpload, Toast } from '@/components/admin/AdminUI'
import { createGame } from '@/lib/actions'

export default function NewGamePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')
  const [form, setForm] = useState({
    title: '', slug: '', shortDescription: '', fullDescription: '', coverImage: '',
    genre: '', appStoreUrl: '', googlePlayUrl: '', webUrl: '', steamUrl: '',
    featured: false, published: true, releaseDate: '', sortOrder: 0,
  })

  const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createGame(form)
      router.push('/admin/games')
    } catch (err: any) {
      setToast(err.message || 'Error creating game')
      setTimeout(() => setToast(''), 3000)
    }
    setLoading(false)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">Add New Game</h2>
      <AdminCard>
        <form onSubmit={save} className="space-y-4">
          <FormField label="Title">
            <TextInput value={form.title} onChange={v => { setForm(p => ({ ...p, title: v, slug: p.slug || generateSlug(v) })) }} required />
          </FormField>
          <FormField label="Slug" hint="URL-friendly name, auto-generated from title">
            <TextInput value={form.slug} onChange={v => setForm(p => ({ ...p, slug: v }))} required />
          </FormField>
          <FormField label="Short Description">
            <TextArea value={form.shortDescription} onChange={v => setForm(p => ({ ...p, shortDescription: v }))} rows={2} />
          </FormField>
          <FormField label="Full Description">
            <TextArea value={form.fullDescription} onChange={v => setForm(p => ({ ...p, fullDescription: v }))} rows={5} />
          </FormField>
          <FormField label="Cover Image">
            <ImageUpload value={form.coverImage} onChange={v => setForm(p => ({ ...p, coverImage: v }))} />
          </FormField>
          <FormField label="Genre">
            <TextInput value={form.genre} onChange={v => setForm(p => ({ ...p, genre: v }))} placeholder="Puzzle, Casual, RPG..." />
          </FormField>

          <h3 className="text-sm font-medium text-white/70 pt-2">Platform Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="App Store"><TextInput value={form.appStoreUrl} onChange={v => setForm(p => ({ ...p, appStoreUrl: v }))} placeholder="https://..." /></FormField>
            <FormField label="Google Play"><TextInput value={form.googlePlayUrl} onChange={v => setForm(p => ({ ...p, googlePlayUrl: v }))} placeholder="https://..." /></FormField>
            <FormField label="Play Web"><TextInput value={form.webUrl} onChange={v => setForm(p => ({ ...p, webUrl: v }))} placeholder="https://..." /></FormField>
            <FormField label="Steam"><TextInput value={form.steamUrl} onChange={v => setForm(p => ({ ...p, steamUrl: v }))} placeholder="https://..." /></FormField>
          </div>

          <h3 className="text-sm font-medium text-white/70 pt-2">Options</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Sort Order">
              <TextInput type="number" value={String(form.sortOrder)} onChange={v => setForm(p => ({ ...p, sortOrder: parseInt(v) || 0 }))} />
            </FormField>
            <FormField label="Release Date">
              <TextInput type="date" value={form.releaseDate} onChange={v => setForm(p => ({ ...p, releaseDate: v }))} />
            </FormField>
          </div>
          <Toggle label="Published" checked={form.published} onChange={v => setForm(p => ({ ...p, published: v }))} />
          <Toggle label="Featured" checked={form.featured} onChange={v => setForm(p => ({ ...p, featured: v }))} />
          <SaveButton loading={loading} label="Create Game" />
        </form>
      </AdminCard>
      {toast && <Toast message={toast} type="error" />}
    </div>
  )
}
