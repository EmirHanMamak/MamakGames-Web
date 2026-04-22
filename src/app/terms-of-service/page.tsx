import { getTermsOfService, getSiteSettings, getNavigationItems } from '@/lib/actions'
import Header from '@/components/Header'
import parse from 'html-react-parser'

export default async function TermsOfServicePage() {
  const terms = await getTermsOfService()
  const settings = await getSiteSettings()
  const nav = await getNavigationItems()

  return (
    <main className="min-h-screen bg-bg-base flex flex-col">
      <Header navItems={nav} logoText={settings?.logoText || 'Mamak Games'} />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-32 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms of <span className="text-brand-secondary italic">Service</span></h1>
        <p className="text-text-secondary mb-12">Last updated: {terms?.updatedAt ? new Date(terms.updatedAt).toLocaleDateString() : 'Unknown'}</p>

        <div className="prose prose-invert prose-brand max-w-none text-text-secondary w-full">
          {terms?.content ? parse(terms.content) : (
            <p>No content available.</p>
          )}
        </div>
      </div>
    </main>
  )
}
