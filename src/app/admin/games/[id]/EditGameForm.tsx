'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { AdminCard, FormField, TextInput, TextArea, SaveButton, Toggle, ImageUpload, Toast, DeleteButton } from '@/components/admin/AdminUI'
import { updateGame, addGameImage, deleteGameImage } from '@/lib/actions'
import { Plus, X } from 'lucide-react'

export function EditGameForm({ game }: { game: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')
  const [newImageUrl, setNewImageUrl] = useState('')
  
  const [form, setForm] = useState({
    title: game.title, slug: game.slug, shortDescription: game.shortDescription,
    fullDescription: game.fullDescription, coverImage: game.coverImage, genre: game.genre,
    appStoreUrl: game.appStoreUrl, googlePlayUrl: game.googlePlayUrl,
    webUrl: game.webUrl, steamUrl: game.steamUrl,
    featured: game.featured, published: game.published,
    releaseDate: game.releaseDate, sortOrder: game.sortOrder,
  })

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await updateGame(game.id, form)
      setToast('Game updated!')
      router.refresh()
      setTimeout(() => setToast(''), 3000)
    } catch (err: any) {
      setToast(err.message || 'Error updating game')
    }
    setLoading(false)
  }

  const handleAddImage = async () => {
    if (!newImageUrl) return
    setLoading(true)
    try {
      await addGameImage(game.id, newImageUrl)
      setNewImageUrl('')
      setToast('Image added!')
      router.refresh()
      setTimeout(() => setToast(''), 3000)
    } catch (err: any) {
      setToast('Error adding image')
    }
    setLoading(false)
  }

  const handleDeleteImage = async (id: string) => {
    try {
      await deleteGameImage(id)
      setToast('Image deleted')
      router.refresh()
      setTimeout(() => setToast(''), 3000)
    } catch (err) {
      setToast('Error deleting image')
    }
  }

  return (
    <div className="space-y-8">
      <AdminCard>
        <form onSubmit={save} className="space-y-4">
          <FormField label="Title">
            <TextInput value={form.title} onChange={v => setForm(p => ({ ...p, title: v }))} required />
          </FormField>
          <FormField label="Slug">
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
            <TextInput value={form.genre} onChange={v => setForm(p => ({ ...p, genre: v }))} />
          </FormField>

          <h3 className="text-sm font-medium text-white/70 pt-2">Platform Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="App Store"><TextInput value={form.appStoreUrl} onChange={v => setForm(p => ({ ...p, appStoreUrl: v }))} /></FormField>
            <FormField label="Google Play"><TextInput value={form.googlePlayUrl} onChange={v => setForm(p => ({ ...p, googlePlayUrl: v }))} /></FormField>
            <FormField label="Play Web"><TextInput value={form.webUrl} onChange={v => setForm(p => ({ ...p, webUrl: v }))} /></FormField>
            <FormField label="Steam"><TextInput value={form.steamUrl} onChange={v => setForm(p => ({ ...p, steamUrl: v }))} /></FormField>
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
          <SaveButton loading={loading} label="Save Changes" />
        </form>
      </AdminCard>

      <AdminCard>
        <h3 className="text-sm font-medium text-white mb-4">Screenshots / Gallery</h3>
        
        {/* Current screenshots */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {game.images?.map((img: any) => (
            <div key={img.id} className="relative aspect-video rounded-lg overflow-hidden border border-white/5 bg-white/5 group">
              <Image src={img.url} alt="" fill className="object-cover" />
              <button 
                onClick={() => handleDeleteImage(img.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-primary"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          {game.images?.length === 0 && (
            <div className="col-span-full py-8 text-center text-white/20 text-sm">No screenshots added yet.</div>
          )}
        </div>

        {/* Add new image */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <FormField label="Add New Screenshot">
            <div className="flex gap-2">
              <div className="flex-1">
                <ImageUpload value={newImageUrl} onChange={setNewImageUrl} label="Upload Screenshot" />
              </div>
              <button 
                onClick={handleAddImage}
                disabled={!newImageUrl || loading}
                className="self-end px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors disabled:opacity-50"
              >
                <Plus size={18} />
              </button>
            </div>
          </FormField>
        </div>
      </AdminCard>

      {toast && <Toast message={toast} />}
    </div>
  )
}
