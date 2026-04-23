'use client'

import { useState, useEffect } from 'react'
import { getPrivacyPolicy, updatePrivacyPolicy, getTermsOfService, updateTermsOfService } from '@/lib/actions'
import { FormField, SaveButton, AdminCard, Toast } from '@/components/admin/AdminUI'
import dynamic from 'next/dynamic'

// Note: Usually you'd use a rich text editor here like react-quill or tiptap.
// For now, we will use a raw HTML textarea for flexibility.

export default function LegalAdminPage() {
  const [loading, setLoading] = useState(true)
  const [savingPrivacy, setSavingPrivacy] = useState(false)
  const [savingTerms, setSavingTerms] = useState(false)
  
  const [privacyContent, setPrivacyContent] = useState('')
  const [termsContent, setTermsContent] = useState('')
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    Promise.all([getPrivacyPolicy(), getTermsOfService()]).then(([privacy, terms]) => {
      if (privacy) setPrivacyContent(privacy.content)
      if (terms) setTermsContent(terms.content)
      setLoading(false)
    })
  }, [])

  const handleSavePrivacy = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavingPrivacy(true)
    const result = await updatePrivacyPolicy({ content: privacyContent })
    setSavingPrivacy(false)
    setToast({ message: result.success ? 'Privacy policy updated' : `Error: ${result.error}`, type: result.success ? 'success' : 'error' })
    setTimeout(() => setToast(null), 3000)
  }

  const handleSaveTerms = async (e: React.FormEvent) => {
    e.preventDefault()
    setSavingTerms(true)
    const result = await updateTermsOfService({ content: termsContent })
    setSavingTerms(false)
    setToast({ message: result.success ? 'Terms of service updated' : `Error: ${result.error}`, type: result.success ? 'success' : 'error' })
    setTimeout(() => setToast(null), 3000)
  }

  if (loading) return <div className="text-white/50 text-sm">Loading legal docs...</div>

  return (
    <div className="max-w-4xl space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Legal Documents</h2>
        <p className="text-white/50 text-sm">Manage bottom-line legal documents. You can use standard HTML to format.</p>
      </div>

      <AdminCard>
        <div className="mb-6 pb-6 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white mb-1">Privacy Policy</h3>
          <p className="text-xs text-white/40">Visible at /privacy-policy</p>
        </div>
        <form onSubmit={handleSavePrivacy} className="space-y-6">
          <FormField label="Policy Content (HTML allowed)" hint="Use <h2>, <p> etc. for formatting.">
            <textarea
              rows={15}
              value={privacyContent}
              onChange={(e) => setPrivacyContent(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-[#b30000]/40 focus:outline-none transition-colors resize-y font-mono"
            />
          </FormField>
          <div className="pt-2">
            <SaveButton loading={savingPrivacy} label="Save Privacy Policy" />
          </div>
        </form>
      </AdminCard>

      <AdminCard>
        <div className="mb-6 pb-6 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white mb-1">Terms of Service</h3>
          <p className="text-xs text-white/40">Visible at /terms-of-service</p>
        </div>
        <form onSubmit={handleSaveTerms} className="space-y-6">
          <FormField label="Terms Content (HTML allowed)">
            <textarea
              rows={15}
              value={termsContent}
              onChange={(e) => setTermsContent(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-[#111] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:border-[#b30000]/40 focus:outline-none transition-colors resize-y font-mono"
            />
          </FormField>
          <div className="pt-2">
            <SaveButton loading={savingTerms} label="Save Terms of Service" />
          </div>
        </form>
      </AdminCard>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}
