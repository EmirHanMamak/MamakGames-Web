import { getSiteSettings, getNavigationItems } from '@/lib/actions'
import Header from '@/components/Header'

export default async function TermsOfServicePage() {
  const { prisma } = await import('@/lib/prisma')
  
  const terms = (prisma as any).termsOfService 
    ? await (prisma as any).termsOfService.findUnique({ where: { id: 'main' } }) 
    : null
    
  const settings = await getSiteSettings()
  const nav = await getNavigationItems()

  return (
    <main className="min-h-screen bg-bg-base flex flex-col">
      <Header navItems={nav} logoText={settings?.logoText || 'Mamak Games'} />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-32 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms of <span className="text-brand-secondary italic">Service</span></h1>
        <p className="text-text-secondary mb-12">Last updated: {terms?.updatedAt ? new Date(terms.updatedAt).toLocaleDateString() : 'Unknown'}</p>
        
        <div 
          className="prose prose-invert prose-brand max-w-none text-text-secondary w-full"
          dangerouslySetInnerHTML={{ __html: terms?.content || '<p>No content available.</p>' }}
        />
      </div>
    </main>
  )
}
