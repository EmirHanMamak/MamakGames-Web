'use client'

import { useState, useEffect } from 'react'
import { AdminCard, FormField, TextInput, TextArea, SaveButton, DeleteButton, Toast } from '@/components/admin/AdminUI'
import { getFooterSettings, updateFooterSettings, getAllSocialLinks, createSocialLink, updateSocialLink, deleteSocialLink } from '@/lib/actions'

export default function FooterPage() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')
  const [footer, setFooter] = useState({ description: '', copyrightText: '', bottomText: '' })
  const [socials, setSocials] = useState<any[]>([])
  const [socialForm, setSocialForm] = useState({ platform: '', url: '', icon: 'Globe', sortOrder: 0 })

  const loadData = async () => {
    const [f, s] = await Promise.all([getFooterSettings(), getAllSocialLinks()])
    if (f) setFooter({ description: f.description, copyrightText: f.copyrightText, bottomText: f.bottomText })
    setSocials(s)
  }

  useEffect(() => { loadData() }, [])

  const saveFooter = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const result = await updateFooterSettings(footer)
    setLoading(false)
    setToast(result.success ? 'Footer saved!' : `Error: ${result.error}`)
    setTimeout(() => setToast(''), 3000)
  }

  const addSocial = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await createSocialLink(socialForm)
    if (result.success) {
      setSocialForm({ platform: '', url: '', icon: 'Globe', sortOrder: socials.length })
      setToast('Social link added!')
      loadData()
    } else {
      setToast(`Error: ${result.error}`)
    }
    setTimeout(() => setToast(''), 3000)
  }

  const removeSocial = async (id: string) => {
    const result = await deleteSocialLink(id)
    if (result.success) {
      setToast('Social link deleted')
      loadData()
    } else {
      setToast(`Error: ${result.error}`)
    }
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">Footer & Social Links</h2>

      <AdminCard>
        <h3 className="text-sm font-medium text-white/70 mb-4">Footer Settings</h3>
        <form onSubmit={saveFooter} className="space-y-4">
          <FormField label="Description">
            <TextArea value={footer.description} onChange={v => setFooter(p => ({ ...p, description: v }))} rows={3} />
          </FormField>
          <FormField label="Copyright Text">
            <TextInput value={footer.copyrightText} onChange={v => setFooter(p => ({ ...p, copyrightText: v }))} />
          </FormField>
          <FormField label="Bottom Text">
            <TextInput value={footer.bottomText} onChange={v => setFooter(p => ({ ...p, bottomText: v }))} />
          </FormField>
          <SaveButton loading={loading} />
        </form>
      </AdminCard>

      <AdminCard>
        <h3 className="text-sm font-medium text-white/70 mb-4">Social Links</h3>
        <div className="space-y-2 mb-4">
          {socials.map(s => (
            <div key={s.id} className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <div className="text-sm">
                <span className="text-white font-medium">{s.platform}</span>
                <span className="text-white/30 ml-2 text-xs">{s.url}</span>
              </div>
              <DeleteButton onDelete={() => removeSocial(s.id)} />
            </div>
          ))}
        </div>
        <form onSubmit={addSocial} className="space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <FormField label="Platform">
              <TextInput value={socialForm.platform} onChange={v => setSocialForm(p => ({ ...p, platform: v }))} placeholder="LinkedIn" required />
            </FormField>
            <FormField label="URL">
              <TextInput value={socialForm.url} onChange={v => setSocialForm(p => ({ ...p, url: v }))} placeholder="https://..." required />
            </FormField>
            <FormField label="Icon">
              <TextInput value={socialForm.icon} onChange={v => setSocialForm(p => ({ ...p, icon: v }))} placeholder="Globe" />
            </FormField>
          </div>
          <SaveButton loading={false} label="Add Social Link" />
        </form>
      </AdminCard>
      {toast && <Toast message={toast} />}
    </div>
  )
}
