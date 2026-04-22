import { prisma } from '@/lib/prisma'
import { HomeClient } from './HomeClient'
import type {
  Game,
  SiteSettings,
  HeroSection,
  AboutSection,
  ServiceItem,
  ContactInfo,
  SocialLink,
  FooterSettings,
  NavigationItem,
} from '@/lib/types'

export const dynamic = 'force-dynamic'

export default async function Home() {
  let siteSettings: SiteSettings | null = null
  let hero: HeroSection | null = null
  let games: Game[] = []
  let about: AboutSection | null = null
  let services: ServiceItem[] = []
  let contactInfo: ContactInfo | null = null
  let socialLinks: SocialLink[] = []
  let footer: FooterSettings | null = null
  let navItems: NavigationItem[] = []

  try {
    const [
      siteSettingsResult,
      heroResult,
      gamesResult,
      aboutResult,
      servicesResult,
      contactInfoResult,
      socialLinksResult,
      footerResult,
      navItemsResult,
    ] = await Promise.all([
      prisma.siteSettings.findUnique({ where: { id: 'main' } }).catch(() => null),
      prisma.heroSection.findUnique({ where: { id: 'main' } }).catch(() => null),
      prisma.game.findMany({ where: { published: true }, orderBy: { sortOrder: 'asc' }, include: { images: true } }).catch(() => []),
      prisma.aboutSection.findUnique({ where: { id: 'main' } }).catch(() => null),
      prisma.serviceItem.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }).catch(() => []),
      prisma.contactInfo.findUnique({ where: { id: 'main' } }).catch(() => null),
      prisma.socialLink.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }).catch(() => []),
      prisma.footerSettings.findUnique({ where: { id: 'main' } }).catch(() => null),
      prisma.navigationItem.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } }).catch(() => []),
    ])

    siteSettings = siteSettingsResult
    hero = heroResult
    games = gamesResult
    about = aboutResult
    services = servicesResult
    contactInfo = contactInfoResult
    socialLinks = socialLinksResult
    footer = footerResult
    navItems = navItemsResult
  } catch {
    // Silently fail and render with defaults
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
