import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import bcryptjs from 'bcryptjs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db')
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')

  // Admin user
  const hashedPassword = await bcryptjs.hash('mamakgames2026', 12)
  await prisma.adminUser.upsert({
    where: { email: 'admin@mamakgames.com' },
    update: {},
    create: {
      email: 'admin@mamakgames.com',
      password: hashedPassword,
      name: 'Emir Han Mamak',
    },
  })
  console.log('✅ Admin user created (admin@mamakgames.com / mamakgames2026)')

  // Site Settings
  await prisma.siteSettings.upsert({
    where: { id: 'main' },
    update: {},
    create: { id: 'main' },
  })

  // SEO
  await prisma.seoSettings.upsert({
    where: { id: 'main' },
    update: {},
    create: { id: 'main' },
  })

  // Hero
  await prisma.heroSection.upsert({
    where: { id: 'main' },
    update: {},
    create: { id: 'main' },
  })

  // About
  await prisma.aboutSection.upsert({
    where: { id: 'main' },
    update: {},
    create: { 
      id: 'main',
      founderImage: '/uploads/EmirHanMamak_Cartoon.png'
    },
  })

  // Contact
  await prisma.contactInfo.upsert({
    where: { id: 'main' },
    update: {},
    create: { id: 'main' },
  })

  // Footer
  await prisma.footerSettings.upsert({
    where: { id: 'main' },
    update: {},
    create: { id: 'main' },
  })

  // Navigation Items
  const navItems = [
    { label: 'Home', href: '#', sortOrder: 0 },
    { label: 'Games', href: '#games', sortOrder: 1 },
    { label: 'About', href: '#about', sortOrder: 2 },
    { label: 'Services', href: '#services', sortOrder: 3 },
    { label: 'Contact', href: '#contact', sortOrder: 4 },
  ]
  const existingNav = await prisma.navigationItem.count()
  if (existingNav === 0) {
    for (const item of navItems) {
      await prisma.navigationItem.create({ data: item })
    }
  }

  // Services
  const services = [
    { icon: 'Gamepad2', title: 'Game Development', description: 'Full-cycle game production from concept to launch. We design, develop, and polish games using modern engines and tools to deliver compelling experiences.', sortOrder: 0 },
    { icon: 'Smartphone', title: 'Mobile Games', description: 'Optimized gaming experiences for iOS and Android with smooth performance, intuitive controls, and engaging gameplay loops built for touch interfaces.', sortOrder: 1 },
    { icon: 'Globe', title: 'Web Games', description: 'Browser-based games built with modern web technologies. Instant play, no downloads — delivering seamless cross-platform gaming experiences.', sortOrder: 2 },
    { icon: 'Zap', title: 'Rapid Prototyping', description: 'Fast iteration and concept validation. We quickly transform game ideas into playable prototypes to test mechanics and refine the player experience.', sortOrder: 3 },
  ]
  const existingServices = await prisma.serviceItem.count()
  if (existingServices === 0) {
    for (const s of services) {
      await prisma.serviceItem.create({ data: s })
    }
  }

  // Social Links
  const socials = [
    { platform: 'Email', url: 'mailto:mamakgames@gmail.com', icon: 'Mail', sortOrder: 0 },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/emirhanmamak', icon: 'Linkedin', sortOrder: 1 },
    { platform: 'Website', url: 'https://mamakgames.com', icon: 'Globe', sortOrder: 2 },
  ]
  const existingSocials = await prisma.socialLink.count()
  if (existingSocials === 0) {
    for (const s of socials) {
      await prisma.socialLink.create({ data: s })
    }
  }

  // Legal
  const privacyContent = `
<h2>1. Introduction</h2>
<p>Mamak Games ("we", "our", or "us") respects your privacy. This Privacy Policy describes how we collect, use, and share information about you when you use our mobile applications, web games, and website (the "Services").</p>
<h2>2. Information We Collect</h2>
<p>We may collect information securely when you interact with our Services, such as game progress, device type, and anonymous usage statistics to improve performance and gameplay.</p>
<h2>3. How We Use Information</h2>
<p>We use the information we collect to operate, maintain, and improve our games and services, and to communicate with you about updates and new releases.</p>
<h2>4. Contact Us</h2>
<p>If you have any questions about this Privacy Policy, please contact us at mamakgames@gmail.com.</p>
`
  const termsContent = `
<h2>1. Acceptance of Terms</h2>
<p>By accessing or using the games and websites operated by Mamak Games, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
<h2>2. Use of Services</h2>
<p>Our games are provided for your personal, non-commercial entertainment. You agree not to modify, reverse engineer, or exploit our games for unauthorized purposes.</p>
<h2>3. User Content</h2>
<p>If our games allow you to create or submit content, you retain ownership of that content but grant us a license to use it in connection with our services.</p>
<h2>4. Disclaimer of Warranties</h2>
<p>The Services are provided "as is" without warranty of any kind. Mamak Games disclaims all warranties, whether express, implied, or statutory.</p>
`
  
  await prisma.privacyPolicy.upsert({
    where: { id: 'main' },
    update: {},
    create: {
      id: 'main',
      content: privacyContent
    }
  })

  await prisma.termsOfService.upsert({
    where: { id: 'main' },
    update: {},
    create: {
      id: 'main',
      content: termsContent
    }
  })

  // Games
  const games = [
    {
      title: 'Jelly Bounce 3D',
      slug: 'jelly-bounce-3d',
      shortDescription: 'A hyper-casual puzzle game where you bounce colorful jellies across grassy fields.',
      fullDescription: 'Jelly Bounce 3D brings bouncy, colorful gelatinous characters to life! Tap, bounce, and merge jellies to clear endlessly vibrant levels in this satisfying hyper-casual hit.',
      coverImage: '/games/cute-jelly.png',
      genre: 'Casual',
      appStoreUrl: '#',
      googlePlayUrl: '#',
      webUrl: '#',
      featured: true,
      published: true,
      sortOrder: 0,
    },
    {
      title: 'Pastel Town',
      slug: 'pastel-town',
      shortDescription: 'Build your dream cozy town with adorable animal villagers in this pastel paradise.',
      fullDescription: 'Pastel Town is a cute isometric town-building game where you manage adorable animal villagers, build colorful houses, and decorate lush green parks. Perfect for relaxing sessions.',
      coverImage: '/games/cute-town.png',
      genre: 'Simulation',
      appStoreUrl: '#',
      googlePlayUrl: '#',
      webUrl: '#',
      featured: true,
      published: true,
      sortOrder: 1,
    },
    {
      title: 'Block Harmony',
      slug: 'block-harmony',
      shortDescription: 'A meditative puzzle game where you arrange geometric shapes into perfect compositions.',
      fullDescription: 'Block Harmony is a calming puzzle experience where players arrange colorful geometric shapes to create satisfying compositions.',
      coverImage: '/games/block-harmony.png',
      genre: 'Puzzle',
      appStoreUrl: '#',
      googlePlayUrl: '#',
      featured: true,
      published: true,
      sortOrder: 2,
    },
    {
      title: 'Orbit Drift',
      slug: 'orbit-drift',
      shortDescription: 'Guide a tiny astronaut through dreamlike planets and colorful nebulas.',
      fullDescription: 'Orbit Drift is an atmospheric exploration game where you guide a small astronaut across tiny planets, through colorful nebulas, and into the unknown.',
      coverImage: '/games/orbit-drift.png',
      genre: 'Adventure',
      appStoreUrl: '#',
      googlePlayUrl: '#',
      webUrl: '#',
      featured: false,
      published: true,
      sortOrder: 3,
    },
  ]
  const existingGames = await prisma.game.count()
  if (existingGames === 0) {
    for (const g of games) {
      await prisma.game.create({ data: g })
    }
  }

  console.log('✅ Seed complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
