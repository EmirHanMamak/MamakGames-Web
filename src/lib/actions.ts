'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath, unstable_noStore } from 'next/cache'

export type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string }

function handleError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'An unexpected error occurred'
}

// ─── Site Settings ───────────────────────────────────
export async function getSiteSettings() {
  try {
    return await prisma.siteSettings.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updateSiteSettings(data: { logoText?: string; loadingText?: string; showLoadingScreen?: boolean }) {
  try {
    const result = await prisma.siteSettings.update({ where: { id: 'main' }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── SEO ─────────────────────────────────────────────
export async function getSeoSettings() {
  try {
    return await prisma.seoSettings.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updateSeoSettings(data: { metaTitle?: string; metaDescription?: string; ogImage?: string; keywords?: string }) {
  try {
    const result = await prisma.seoSettings.update({ where: { id: 'main' }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Navigation ──────────────────────────────────────
export async function getNavigationItems() {
  try {
    return await prisma.navigationItem.findMany({ orderBy: { sortOrder: 'asc' } })
  } catch {
    return []
  }
}

export async function createNavigationItem(data: { label: string; href: string; sortOrder?: number }) {
  try {
    const result = await prisma.navigationItem.create({ data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function updateNavigationItem(id: string, data: { label?: string; href?: string; sortOrder?: number; visible?: boolean }) {
  try {
    const result = await prisma.navigationItem.update({ where: { id }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function deleteNavigationItem(id: string) {
  try {
    await prisma.navigationItem.delete({ where: { id } })
    revalidatePath('/')
    return { success: true, data: undefined } as ActionResult<undefined>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Hero ────────────────────────────────────────────
export async function getHeroSection() {
  try {
    return await prisma.heroSection.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updateHeroSection(data: {
  tagLine?: string; title?: string; highlightWord?: string; subtitle?: string;
  ctaPrimaryText?: string; ctaPrimaryLink?: string; ctaSecondaryText?: string; ctaSecondaryLink?: string; visible?: boolean
}) {
  try {
    const result = await prisma.heroSection.update({ where: { id: 'main' }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── About ───────────────────────────────────────────
export async function getAboutSection() {
  try {
    return await prisma.aboutSection.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updateAboutSection(data: {
  description?: string; founderName?: string; founderRole?: string; founderBio?: string;
  founderImage?: string; stat1Label?: string; stat1Value?: string; stat2Label?: string; stat2Value?: string;
  stat3Label?: string; stat3Value?: string; visible?: boolean
}) {
  try {
    const result = await prisma.aboutSection.update({ where: { id: 'main' }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Services ────────────────────────────────────────
export async function getServiceItems() {
  try {
    return await prisma.serviceItem.findMany({ orderBy: { sortOrder: 'asc' } })
  } catch {
    return []
  }
}

export async function createServiceItem(data: { icon: string; title: string; description: string; sortOrder?: number; visible?: boolean }) {
  try {
    const result = await prisma.serviceItem.create({ data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function updateServiceItem(id: string, data: { icon?: string; title?: string; description?: string; sortOrder?: number; visible?: boolean }) {
  try {
    const result = await prisma.serviceItem.update({ where: { id }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function deleteServiceItem(id: string) {
  try {
    await prisma.serviceItem.delete({ where: { id } })
    revalidatePath('/')
    return { success: true, data: undefined } as ActionResult<undefined>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Games ───────────────────────────────────────────
export async function getGames() {
  try {
    return await prisma.game.findMany({ orderBy: { sortOrder: 'asc' }, include: { images: true } })
  } catch {
    return []
  }
}

export async function getPublishedGames() {
  try {
    return await prisma.game.findMany({
      where: { published: true },
      orderBy: { sortOrder: 'asc' },
      include: { images: true },
    })
  } catch {
    return []
  }
}

export async function getGameById(id: string) {
  try {
    return await prisma.game.findUnique({ where: { id }, include: { images: true } })
  } catch {
    return null
  }
}

export async function createGame(data: {
  title: string; slug: string; shortDescription: string; fullDescription?: string;
  coverImage?: string; genre?: string; appStoreUrl?: string; googlePlayUrl?: string;
  webUrl?: string; steamUrl?: string; featured?: boolean; published?: boolean;
  releaseDate?: string; sortOrder?: number
}) {
  try {
    const result = await prisma.game.create({ data })
    revalidatePath('/')
    revalidatePath('/admin/games')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function updateGame(id: string, data: {
  title?: string; slug?: string; shortDescription?: string; fullDescription?: string;
  coverImage?: string; genre?: string; appStoreUrl?: string; googlePlayUrl?: string;
  webUrl?: string; steamUrl?: string; featured?: boolean; published?: boolean;
  releaseDate?: string; sortOrder?: number
}) {
  try {
    const result = await prisma.game.update({ where: { id }, data })
    revalidatePath('/')
    revalidatePath('/admin/games')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function addGameImage(gameId: string, url: string) {
  try {
    const result = await prisma.gameImage.create({ data: { gameId, url } })
    revalidatePath('/')
    revalidatePath(`/admin/games/${gameId}`)
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function deleteGameImage(id: string) {
  try {
    const image = await prisma.gameImage.findUnique({ where: { id } })
    if (!image) return { success: false, error: 'Image not found' } as ActionResult<undefined>
    await prisma.gameImage.delete({ where: { id } })
    revalidatePath('/')
    revalidatePath(`/admin/games/${image.gameId}`)
    return { success: true, data: undefined } as ActionResult<undefined>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function deleteGame(id: string) {
  try {
    await prisma.game.delete({ where: { id } })
    revalidatePath('/')
    revalidatePath('/admin/games')
    return { success: true, data: undefined } as ActionResult<undefined>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function toggleGamePublish(id: string) {
  try {
    const game = await prisma.game.findUnique({ where: { id } })
    if (!game) return { success: false, error: 'Game not found' } as ActionResult<undefined>
    const result = await prisma.game.update({ where: { id }, data: { published: !game.published } })
    revalidatePath('/')
    revalidatePath('/admin/games')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function toggleGameFeature(id: string) {
  try {
    const game = await prisma.game.findUnique({ where: { id } })
    if (!game) return { success: false, error: 'Game not found' } as ActionResult<undefined>
    const result = await prisma.game.update({ where: { id }, data: { featured: !game.featured } })
    revalidatePath('/')
    revalidatePath('/admin/games')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Contact ─────────────────────────────────────────
export async function getContactInfo() {
  try {
    return await prisma.contactInfo.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updateContactInfo(data: {
  email?: string; phone?: string; location?: string; availability?: string;
  ctaText?: string; ctaLink?: string; visible?: boolean
}) {
  try {
    const result = await prisma.contactInfo.update({ where: { id: 'main' }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Contact Submissions ─────────────────────────────
export async function createSubmission(data: { name: string; email: string; projectType?: string; message: string }) {
  try {
    const result = await prisma.contactSubmission.create({ data })
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function getSubmissions() {
  try {
    return await prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } })
  } catch {
    return []
  }
}

export async function markSubmissionRead(id: string) {
  try {
    const result = await prisma.contactSubmission.update({ where: { id }, data: { read: true } })
    revalidatePath('/admin/submissions')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function deleteSubmission(id: string) {
  try {
    await prisma.contactSubmission.delete({ where: { id } })
    revalidatePath('/admin/submissions')
    return { success: true, data: undefined } as ActionResult<undefined>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Social Links ────────────────────────────────────
export async function getSocialLinks() {
  try {
    return await prisma.socialLink.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } })
  } catch {
    return []
  }
}

export async function getAllSocialLinks() {
  try {
    return await prisma.socialLink.findMany({ orderBy: { sortOrder: 'asc' } })
  } catch {
    return []
  }
}

export async function createSocialLink(data: { platform: string; url: string; icon?: string; sortOrder?: number }) {
  try {
    const result = await prisma.socialLink.create({ data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function updateSocialLink(id: string, data: { platform?: string; url?: string; icon?: string; sortOrder?: number; visible?: boolean }) {
  try {
    const result = await prisma.socialLink.update({ where: { id }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function deleteSocialLink(id: string) {
  try {
    await prisma.socialLink.delete({ where: { id } })
    revalidatePath('/')
    return { success: true, data: undefined } as ActionResult<undefined>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Footer ──────────────────────────────────────────
export async function getFooterSettings() {
  try {
    return await prisma.footerSettings.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updateFooterSettings(data: { description?: string; copyrightText?: string; bottomText?: string }) {
  try {
    const result = await prisma.footerSettings.update({ where: { id: 'main' }, data })
    revalidatePath('/')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

// ─── Legal ───────────────────────────────────────────
export async function getPrivacyPolicy() {
  unstable_noStore()
  try {
    return await prisma.privacyPolicy.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updatePrivacyPolicy(data: { content: string }) {
  try {
    const result = await prisma.privacyPolicy.update({ where: { id: 'main' }, data })
    revalidatePath('/privacy-policy')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}

export async function getTermsOfService() {
  unstable_noStore()
  try {
    return await prisma.termsOfService.findUnique({ where: { id: 'main' } })
  } catch {
    return null
  }
}

export async function updateTermsOfService(data: { content: string }) {
  try {
    const result = await prisma.termsOfService.update({ where: { id: 'main' }, data })
    revalidatePath('/terms-of-service')
    return { success: true, data: result } as ActionResult<typeof result>
  } catch (error) {
    return { success: false, error: handleError(error) }
  }
}
