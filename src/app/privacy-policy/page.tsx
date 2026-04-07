import { getSiteSettings, getNavigationItems } from '@/lib/actions'
import Header from '@/components/Header'

export default async function PrivacyPolicyPage() {
  const { prisma } = await import('@/lib/prisma')
  
  let policy = null
  try {
    if ((prisma as any).privacyPolicy) {
      policy = await (prisma as any).privacyPolicy.findUnique({ where: { id: 'main' } })
    }
  } catch (err) {
    console.warn('DB not ready for privacy policy fetch')
  }
  
  const settings = await getSiteSettings()
  const nav = await getNavigationItems()

  return (
    <main className="min-h-screen bg-bg-base flex flex-col">
      <Header navItems={nav} logoText={settings?.logoText || 'Mamak Games'} />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-32 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy <span className="text-brand-secondary italic">Policy</span></h1>
        <p className="text-text-secondary mb-12">Last updated: {policy?.updatedAt ? new Date(policy.updatedAt).toLocaleDateString() : 'Unknown'}</p>
        
        <div 
          className="prose prose-invert prose-brand max-w-none text-text-secondary w-full"
          dangerouslySetInnerHTML={{ __html: policy?.content || '<p>No content available.</p>' }}
        />
      </div>
    </main>
  )
}
