import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import bcryptjs from 'bcryptjs'
import crypto from 'crypto'
import path from 'path'

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db')
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` })
const prisma = new PrismaClient({ adapter })

function generateRandomPassword(length = 16): string {
  return crypto.randomBytes(length).toString('base64url').slice(0, length)
}

async function main() {
  const seedPassword = process.env.ADMIN_SEED_PASSWORD || generateRandomPassword()
  const hashedPassword = await bcryptjs.hash(seedPassword, 12)

  await prisma.adminUser.upsert({
    where: { email: 'admin@mamakgames.com' },
    update: {},
    create: {
      email: 'admin@mamakgames.com',
      password: hashedPassword,
      name: 'Emir Han Mamak',
    },
  })

  if (!process.env.ADMIN_SEED_PASSWORD) {
    console.log(`\n⚠️  Random admin seed password generated: ${seedPassword}`)
    console.log('Set ADMIN_SEED_PASSWORD in your .env to use a fixed password.\n')
  }

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
<p>Mamak Games ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our mobile applications, games, and website (collectively, the "Services").</p>

<h2>2. Information Collection</h2>
<p><b>Non-Personal Information:</b> When you play our games, we may collect technical data such as device model, OS version, language, and anonymized gameplay statistics (e.g., level completion, session length) to improve our games' performance and balance.</p>
<p><b>Personal Information:</b> We do not collect names, addresses, or phone numbers unless you explicitly provide them (e.g., via a contact form). For our games that use third-party services like Google Play Games or Apple Game Center, we may receive a persistent identifier from those services to track high scores or achievements.</p>

<h2>3. Third-Party Services</h2>
<p>Our games may include features from third-party partners, such as:</p>
<ul>
  <li><b>Advertising:</b> We may use Google AdMob or Unity Ads to show advertisements. These partners may use device identifiers to serves personalized ads.</li>
  <li><b>Analytics:</b> We may use Unity Analytics or Firebase to understand how our players interact with our games.</li>
</ul>
<p>These third parties are governed by their own privacy policies.</p>

<h2>4. Children's Privacy</h2>
<p>Our games are intended for general audiences. We do not knowingly collect personal information from children under 13. If we discover we have inadvertently collected such information, we will delete it promptly.</p>

<h2>5. Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>

<h2>6. Contact Us</h2>
<p>If you have any questions about this policy, please contact us at <b>mamakgames@gmail.com</b>.</p>
`
  const termsContent = `
<h2>1. Acceptance of Terms</h2>
<p>By downloading, installing, or using Mamak Games' applications or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

<h2>2. License</h2>
<p>Mamak Games grants you a limited, non-exclusive, non-transferable, revocable license to use our games for your personal, non-commercial entertainment. You may not copy, modify, distribute, or reverse engineer any part of our games.</p>

<h2>3. User Conduct</h2>
<p>You agree not to use our services to:</p>
<ul>
  <li>Violate any laws or regulations.</li>
  <li>Hurt, harass, or threaten others.</li>
  <li>Attempt to cheat, hack, or exploit game mechanics for unauthorized gain.</li>
  <li>Engage in any activity that disrupts the gameplay experience for others.</li>
</ul>

<h2>4. Intellectual Property</h2>
<p>All content, including graphics, code, music, and characters, is the property of Mamak Games and protected by copyright and intellectual property laws. All rights not expressly granted are reserved.</p>

<h2>5. Limitation of Liability</h2>
<p>Mamak Games provides its services "as is" and "as available". We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of (or inability to use) our services.</p>

<h2>6. Termination</h2>
<p>We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.</p>
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

  console.log('Seed complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
