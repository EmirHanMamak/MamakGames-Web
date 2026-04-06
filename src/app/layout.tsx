import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { prisma } from '@/lib/prisma'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export async function generateMetadata() {
  // Defensive check for model existence in newly generated client
  const seo = (prisma as any).seoSettings ? await (prisma as any).seoSettings.findUnique({ where: { id: 'main' } }) : null
  
  return {
    title: seo?.metaTitle || 'Mamak Games — Creating Engaging Games for Everyone',
    description: seo?.metaDescription || 'Mamak Games is an independent game studio focused on developing fun, polished, and accessible games for mobile and web platforms.',
    keywords: seo?.keywords || 'game development, indie games, mobile games',
    openGraph: {
      title: seo?.metaTitle || 'Mamak Games',
      description: seo?.metaDescription || '',
      url: 'https://mamakgames.com',
      siteName: 'Mamak Games',
      type: 'website',
      ...(seo?.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.metaTitle || 'Mamak Games',
      description: seo?.metaDescription || '',
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-bg-base text-white font-sans antialiased selection:bg-brand-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}