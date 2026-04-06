'use client'

import { useState, useEffect } from 'react'
import { AdminCard, FormField, TextInput, SaveButton, Toggle, Toast } from '@/components/admin/AdminUI'
import { getContactInfo, updateContactInfo } from '@/lib/actions'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')
  const [data, setData] = useState({
    email: '', linkedin: '', linkedinUrl: '', website: '', websiteUrl: '', location: '',
    formEnabled: true, visible: true,
  })

  useEffect(() => {
    getContactInfo().then(c => {
      if (c) setData({
        email: c.email, linkedin: c.linkedin, linkedinUrl: c.linkedinUrl,
        website: c.website, websiteUrl: c.websiteUrl, location: c.location,
        formEnabled: c.formEnabled, visible: c.visible,
      })
    })
  }, [])

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await updateContactInfo(data)
    setToast('Contact info saved!')
    setLoading(false)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">Contact Information</h2>
      <AdminCard>
        <form onSubmit={save} className="space-y-4">
          <FormField label="Contact Email">
            <TextInput value={data.email} onChange={v => setData(p => ({ ...p, email: v }))} />
          </FormField>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="LinkedIn Username">
              <TextInput value={data.linkedin} onChange={v => setData(p => ({ ...p, linkedin: v }))} />
            </FormField>
            <FormField label="LinkedIn URL">
              <TextInput value={data.linkedinUrl} onChange={v => setData(p => ({ ...p, linkedinUrl: v }))} />
            </FormField>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Website Name">
              <TextInput value={data.website} onChange={v => setData(p => ({ ...p, website: v }))} />
            </FormField>
            <FormField label="Website URL">
              <TextInput value={data.websiteUrl} onChange={v => setData(p => ({ ...p, websiteUrl: v }))} />
            </FormField>
          </div>
          <FormField label="Location">
            <TextInput value={data.location} onChange={v => setData(p => ({ ...p, location: v }))} />
          </FormField>
          <Toggle label="Enable Contact Form" checked={data.formEnabled} onChange={v => setData(p => ({ ...p, formEnabled: v }))} />
          <Toggle label="Show Contact Section" checked={data.visible} onChange={v => setData(p => ({ ...p, visible: v }))} />
          <SaveButton loading={loading} />
        </form>
      </AdminCard>
      {toast && <Toast message={toast} />}
    </div>
  )
}
