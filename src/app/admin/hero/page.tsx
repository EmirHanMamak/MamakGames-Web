'use client'

import { useState, useEffect } from 'react'
import { AdminCard, FormField, TextInput, TextArea, SaveButton, Toggle, Toast } from '@/components/admin/AdminUI'
import { getHeroSection, updateHeroSection } from '@/lib/actions'

export default function HeroPage() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')
  const [data, setData] = useState({
    tagLine: '', title: '', highlightWord: '', subtitle: '',
    ctaPrimaryText: '', ctaPrimaryLink: '', ctaSecondaryText: '', ctaSecondaryLink: '', visible: true,
  })

  useEffect(() => {
    getHeroSection().then(h => {
      if (h) setData({
        tagLine: h.tagLine, title: h.title, highlightWord: h.highlightWord, subtitle: h.subtitle,
        ctaPrimaryText: h.ctaPrimaryText, ctaPrimaryLink: h.ctaPrimaryLink,
        ctaSecondaryText: h.ctaSecondaryText, ctaSecondaryLink: h.ctaSecondaryLink, visible: h.visible,
      })
    })
  }, [])

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await updateHeroSection(data)
    setToast('Hero section saved!')
    setLoading(false)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">Hero Section</h2>
      <AdminCard>
        <form onSubmit={save} className="space-y-4">
          <FormField label="Tag Line">
            <TextInput value={data.tagLine} onChange={v => setData(p => ({ ...p, tagLine: v }))} />
          </FormField>
          <FormField label="Title">
            <TextInput value={data.title} onChange={v => setData(p => ({ ...p, title: v }))} />
          </FormField>
          <FormField label="Highlight Word" hint="This word appears in red color">
            <TextInput value={data.highlightWord} onChange={v => setData(p => ({ ...p, highlightWord: v }))} />
          </FormField>
          <FormField label="Subtitle">
            <TextArea value={data.subtitle} onChange={v => setData(p => ({ ...p, subtitle: v }))} rows={3} />
          </FormField>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Primary Button Text">
              <TextInput value={data.ctaPrimaryText} onChange={v => setData(p => ({ ...p, ctaPrimaryText: v }))} />
            </FormField>
            <FormField label="Primary Button Link">
              <TextInput value={data.ctaPrimaryLink} onChange={v => setData(p => ({ ...p, ctaPrimaryLink: v }))} />
            </FormField>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Secondary Button Text">
              <TextInput value={data.ctaSecondaryText} onChange={v => setData(p => ({ ...p, ctaSecondaryText: v }))} />
            </FormField>
            <FormField label="Secondary Button Link">
              <TextInput value={data.ctaSecondaryLink} onChange={v => setData(p => ({ ...p, ctaSecondaryLink: v }))} />
            </FormField>
          </div>
          <Toggle label="Show Hero Section" checked={data.visible} onChange={v => setData(p => ({ ...p, visible: v }))} />
          <SaveButton loading={loading} />
        </form>
      </AdminCard>
      {toast && <Toast message={toast} />}
    </div>
  )
}
