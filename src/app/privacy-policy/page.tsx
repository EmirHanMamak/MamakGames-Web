import { getSiteSettings, getNavigationItems } from '@/lib/actions'
import Header from '@/components/Header'

export default async function PrivacyPolicyPage() {
  const { prisma } = await import('@/lib/prisma')
  
  // Guard against undefined model access if generation is still syncing
  const policy = (prisma as any).privacyPolicy 
    ? await (prisma as any).privacyPolicy.findUnique({ where: { id: 'main' } }) 
    : null
  
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
