'use client'

import { useState, useEffect } from 'react'
import { AdminCard, FormField, TextInput, TextArea, SaveButton, Toggle, Toast } from '@/components/admin/AdminUI'
import { getSiteSettings, updateSiteSettings, getSeoSettings, updateSeoSettings } from '@/lib/actions'

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')
  const [site, setSite] = useState({ logoText: '', loadingText: '', showLoadingScreen: true })
  const [seo, setSeo] = useState({ metaTitle: '', metaDescription: '', keywords: '', ogImage: '' })

  useEffect(() => {
    Promise.all([getSiteSettings(), getSeoSettings()]).then(([s, se]) => {
      if (s) setSite({ logoText: s.logoText, loadingText: s.loadingText, showLoadingScreen: s.showLoadingScreen })
      if (se) setSeo({ metaTitle: se.metaTitle, metaDescription: se.metaDescription, keywords: se.keywords, ogImage: se.ogImage })
    })
  }, [])

  const saveSite = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await updateSiteSettings(site)
    setToast('Site settings saved!')
    setLoading(false)
    setTimeout(() => setToast(''), 3000)
  }

  const saveSeo = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await updateSeoSettings(seo)
    setToast('SEO settings saved!')
    setLoading(false)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">Settings & SEO</h2>

      <AdminCard>
        <h3 className="text-sm font-medium text-white/70 mb-4">Site Settings</h3>
        <form onSubmit={saveSite} className="space-y-4">
          <FormField label="Logo Text">
            <TextInput value={site.logoText} onChange={v => setSite(p => ({ ...p, logoText: v }))} />
          </FormField>
          <FormField label="Loading Screen Text">
            <TextInput value={site.loadingText} onChange={v => setSite(p => ({ ...p, loadingText: v }))} />
          </FormField>
          <Toggle label="Show Loading Screen" checked={site.showLoadingScreen} onChange={v => setSite(p => ({ ...p, showLoadingScreen: v }))} />
          <SaveButton loading={loading} />
        </form>
      </AdminCard>

      <AdminCard>
        <h3 className="text-sm font-medium text-white/70 mb-4">SEO Settings</h3>
        <form onSubmit={saveSeo} className="space-y-4">
          <FormField label="Meta Title">
            <TextInput value={seo.metaTitle} onChange={v => setSeo(p => ({ ...p, metaTitle: v }))} />
          </FormField>
          <FormField label="Meta Description">
            <TextArea value={seo.metaDescription} onChange={v => setSeo(p => ({ ...p, metaDescription: v }))} rows={3} />
          </FormField>
          <FormField label="Keywords" hint="Comma-separated keywords">
            <TextInput value={seo.keywords} onChange={v => setSeo(p => ({ ...p, keywords: v }))} />
          </FormField>
          <FormField label="OG Image URL">
            <TextInput value={seo.ogImage} onChange={v => setSeo(p => ({ ...p, ogImage: v }))} placeholder="/og-image.png" />
          </FormField>
          <SaveButton loading={loading} />
        </form>
      </AdminCard>
      {toast && <Toast message={toast} />}
    </div>
  )
}
