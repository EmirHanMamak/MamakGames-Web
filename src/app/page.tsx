import { prisma } from '@/lib/prisma'
import { HomeClient } from './HomeClient'

export const dynamic = 'force-dynamic'

export default async function Home() {
  let siteSettings = null, hero = null, games: any[] = [], about = null
  let services: any[] = [], contactInfo = null, socialLinks: any[] = []
  let footer = null, navItems: any[] = []

  try {
    ;[siteSettings, hero, games, about, services, contactInfo, socialLinks, footer, navItems] =
      await Promise.all([
        (prisma as any).siteSettings?.findUnique({ where: { id: 'main' } }) ?? null,
        (prisma as any).heroSection?.findUnique({ where: { id: 'main' } }) ?? null,
        (prisma as any).game?.findMany({ where: { published: true }, orderBy: { sortOrder: 'asc' } }) ?? [],
        (prisma as any).aboutSection?.findUnique({ where: { id: 'main' } }) ?? null,
        (prisma as any).serviceItem?.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }) ?? [],
        (prisma as any).contactInfo?.findUnique({ where: { id: 'main' } }) ?? null,
        (prisma as any).socialLink?.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }) ?? [],
        (prisma as any).footerSettings?.findUnique({ where: { id: 'main' } }) ?? null,
        (prisma as any).navigationItem?.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }) ?? [],
      ])
  } catch (err) {
    console.warn('Home page: DB not ready yet, rendering with defaults.', err)
  }

  return (
    <HomeClient
      siteSettings={siteSettings}
      hero={hero}
      games={games}
      about={about}
      services={services}
      contactInfo={contactInfo}
      socialLinks={socialLinks}
      footer={footer}
      navItems={navItems}
    />
  )
}