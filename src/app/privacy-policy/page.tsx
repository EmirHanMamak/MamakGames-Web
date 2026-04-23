import { getPrivacyPolicy, getSiteSettings, getNavigationItems } from '@/lib/actions'
import Header from '@/components/Header'
import parse from 'html-react-parser'
import { unstable_noStore } from 'next/cache'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function PrivacyPolicyPage() {
  unstable_noStore()
  const policy = await getPrivacyPolicy()
  const settings = await getSiteSettings()
  const nav = await getNavigationItems()

  return (
    <main className="min-h-screen bg-bg-base flex flex-col">
      <Header navItems={nav} logoText={settings?.logoText || 'Mamak Games'} />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-32 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy <span className="text-brand-secondary italic">Policy</span></h1>
        <p className="text-text-secondary mb-12">Last updated: {policy?.updatedAt ? new Date(policy.updatedAt).toLocaleDateString() : 'Unknown'}</p>

        <div className="prose prose-invert prose-brand max-w-none text-text-secondary w-full">
          {policy?.content ? parse(policy.content) : (
            <p>No content available.</p>
          )}
        </div>
      </div>
    </main>
  )
}
