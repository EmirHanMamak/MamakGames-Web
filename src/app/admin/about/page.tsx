'use client'

import { useState, useEffect } from 'react'
import { AdminCard, FormField, TextInput, TextArea, SaveButton, ImageUpload, Toggle, Toast } from '@/components/admin/AdminUI'
import { getAboutSection, updateAboutSection } from '@/lib/actions'

export default function AboutPage() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')
  const [data, setData] = useState({
    tagLine: '', title: '', titleHighlight: '', paragraph1: '', paragraph2: '',
    founderName: '', founderTitle: '', founderImage: '',
    stat1Label: '', stat1Value: '', stat2Label: '', stat2Value: '',
    stat3Label: '', stat3Value: '', stat4Label: '', stat4Value: '',
    visible: true,
  })

  useEffect(() => {
    getAboutSection().then(a => {
      if (a) setData({
        tagLine: a.tagLine, title: a.title, titleHighlight: a.titleHighlight,
        paragraph1: a.paragraph1, paragraph2: a.paragraph2,
        founderName: a.founderName, founderTitle: a.founderTitle, founderImage: a.founderImage,
        stat1Label: a.stat1Label, stat1Value: a.stat1Value, stat2Label: a.stat2Label, stat2Value: a.stat2Value,
        stat3Label: a.stat3Label, stat3Value: a.stat3Value, stat4Label: a.stat4Label, stat4Value: a.stat4Value,
        visible: a.visible ?? true,
      })
    })
  }, [])

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const result = await updateAboutSection({ ...data, visible: data.visible })
    setLoading(false)
    setToast(result.success ? 'About section saved!' : `Error: ${result.error}`)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">About Section</h2>
      <AdminCard>
        <form onSubmit={save} className="space-y-4">
          <FormField label="Tag Line">
            <TextInput value={data.tagLine} onChange={v => setData(p => ({ ...p, tagLine: v }))} />
          </FormField>
          <FormField label="Title">
            <TextInput value={data.title} onChange={v => setData(p => ({ ...p, title: v }))} />
          </FormField>
          <FormField label="Title Highlight (Red Text)">
            <TextInput value={data.titleHighlight} onChange={v => setData(p => ({ ...p, titleHighlight: v }))} />
          </FormField>
          <FormField label="Paragraph 1">
            <TextArea value={data.paragraph1} onChange={v => setData(p => ({ ...p, paragraph1: v }))} rows={4} />
          </FormField>
          <FormField label="Paragraph 2">
            <TextArea value={data.paragraph2} onChange={v => setData(p => ({ ...p, paragraph2: v }))} rows={4} />
          </FormField>

          <h3 className="text-sm font-medium text-white/70 pt-2">Founder</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Founder Name">
              <TextInput value={data.founderName} onChange={v => setData(p => ({ ...p, founderName: v }))} />
            </FormField>
            <FormField label="Founder Title">
              <TextInput value={data.founderTitle} onChange={v => setData(p => ({ ...p, founderTitle: v }))} />
            </FormField>
          </div>
          <FormField label="Founder Image">
            <ImageUpload value={data.founderImage} onChange={v => setData(p => ({ ...p, founderImage: v }))} />
          </FormField>

          <h3 className="text-sm font-medium text-white/70 pt-2">Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Stat 1 Label"><TextInput value={data.stat1Label} onChange={v => setData(p => ({ ...p, stat1Label: v }))} /></FormField>
            <FormField label="Stat 1 Value"><TextInput value={data.stat1Value} onChange={v => setData(p => ({ ...p, stat1Value: v }))} /></FormField>
            <FormField label="Stat 2 Label"><TextInput value={data.stat2Label} onChange={v => setData(p => ({ ...p, stat2Label: v }))} /></FormField>
            <FormField label="Stat 2 Value"><TextInput value={data.stat2Value} onChange={v => setData(p => ({ ...p, stat2Value: v }))} /></FormField>
            <FormField label="Stat 3 Label"><TextInput value={data.stat3Label} onChange={v => setData(p => ({ ...p, stat3Label: v }))} /></FormField>
            <FormField label="Stat 3 Value"><TextInput value={data.stat3Value} onChange={v => setData(p => ({ ...p, stat3Value: v }))} /></FormField>
            <FormField label="Stat 4 Label"><TextInput value={data.stat4Label} onChange={v => setData(p => ({ ...p, stat4Label: v }))} /></FormField>
            <FormField label="Stat 4 Value"><TextInput value={data.stat4Value} onChange={v => setData(p => ({ ...p, stat4Value: v }))} /></FormField>
          </div>
          <Toggle label="Visible on Landing Page" checked={data.visible} onChange={v => setData(p => ({ ...p, visible: v }))} />
          <SaveButton loading={loading} />
        </form>
      </AdminCard>
      {toast && <Toast message={toast} />}
    </div>
  )
}
