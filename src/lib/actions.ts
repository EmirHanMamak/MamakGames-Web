'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// ─── Site Settings ───────────────────────────────────
export async function getSiteSettings() {
  return prisma.siteSettings.findUnique({ where: { id: 'main' } })
}

export async function updateSiteSettings(data: { logoText?: string; loadingText?: string; showLoadingScreen?: boolean }) {
  const result = await prisma.siteSettings.update({ where: { id: 'main' }, data })
  revalidatePath('/')
  return result
}

// ─── SEO ─────────────────────────────────────────────
export async function getSeoSettings() {
  return prisma.seoSettings.findUnique({ where: { id: 'main' } })
}

export async function updateSeoSettings(data: { metaTitle?: string; metaDescription?: string; ogImage?: string; keywords?: string }) {
  const result = await prisma.seoSettings.update({ where: { id: 'main' }, data })
  revalidatePath('/')
  return result
}

// ─── Navigation ──────────────────────────────────────
export async function getNavigationItems() {
  return prisma.navigationItem.findMany({ orderBy: { sortOrder: 'asc' } })
}

export async function createNavigationItem(data: { label: string; href: string; sortOrder?: number }) {
  const result = await prisma.navigationItem.create({ data })
  revalidatePath('/')
  return result
}

export async function updateNavigationItem(id: string, data: { label?: string; href?: string; sortOrder?: number; visible?: boolean }) {
  const result = await prisma.navigationItem.update({ where: { id }, data })
  revalidatePath('/')
  return result
}

export async function deleteNavigationItem(id: string) {
  await prisma.navigationItem.delete({ where: { id } })
  revalidatePath('/')
}

// ─── Hero ────────────────────────────────────────────
export async function getHeroSection() {
  return prisma.heroSection.findUnique({ where: { id: 'main' } })
}

export async function updateHeroSection(data: {
  tagLine?: string; title?: string; highlightWord?: string; subtitle?: string;
  ctaPrimaryText?: string; ctaPrimaryLink?: string; ctaSecondaryText?: string; ctaSecondaryLink?: string; visible?: boolean
}) {
  const result = await prisma.heroSection.update({ where: { id: 'main' }, data })
  revalidatePath('/')
  return result
}

// ─── About ───────────────────────────────────────────
export async function getAboutSection() {
  return prisma.aboutSection.findUnique({ where: { id: 'main' } })
}

export async function updateAboutSection(data: Record<string, any>) {
  const result = await prisma.aboutSection.update({ where: { id: 'main' }, data })
  revalidatePath('/')
  return result
}

// ─── Services ────────────────────────────────────────
export async function getServiceItems() {
  return prisma.serviceItem.findMany({ orderBy: { sortOrder: 'asc' } })
}

export async function createServiceItem(data: { icon: string; title: string; description: string; sortOrder?: number }) {
  const result = await prisma.serviceItem.create({ data })
  revalidatePath('/')
  return result
}

export async function updateServiceItem(id: string, data: { icon?: string; title?: string; description?: string; sortOrder?: number; visible?: boolean }) {
  const result = await prisma.serviceItem.update({ where: { id }, data })
  revalidatePath('/')
  return result
}

export async function deleteServiceItem(id: string) {
  await prisma.serviceItem.delete({ where: { id } })
  revalidatePath('/')
}

// ─── Games ───────────────────────────────────────────
export async function getGames() {
  return prisma.game.findMany({ orderBy: { sortOrder: 'asc' }, include: { images: true } })
}

export async function getPublishedGames() {
  return prisma.game.findMany({
    where: { published: true },
    orderBy: { sortOrder: 'asc' },
    include: { images: true },
  })
}

export async function getGameById(id: string) {
  return prisma.game.findUnique({ where: { id }, include: { images: true } })
}

export async function createGame(data: {
  title: string; slug: string; shortDescription: string; fullDescription?: string;
  coverImage?: string; genre?: string; appStoreUrl?: string; googlePlayUrl?: string;
  webUrl?: string; steamUrl?: string; featured?: boolean; published?: boolean;
  releaseDate?: string; sortOrder?: number
}) {
  const result = await prisma.game.create({ data })
  revalidatePath('/')
  revalidatePath('/admin/games')
  return result
}

export async function updateGame(id: string, data: Record<string, any>) {
  const result = await prisma.game.update({ where: { id }, data })
  revalidatePath('/')
  revalidatePath('/admin/games')
  return result
}

export async function deleteGame(id: string) {
  await prisma.game.delete({ where: { id } })
  revalidatePath('/')
  revalidatePath('/admin/games')
}

export async function toggleGamePublish(id: string) {
  const game = await prisma.game.findUnique({ where: { id } })
  if (!game) throw new Error('Game not found')
  const result = await prisma.game.update({ where: { id }, data: { published: !game.published } })
  revalidatePath('/')
  revalidatePath('/admin/games')
  return result
}

// ─── Contact ─────────────────────────────────────────
export async function getContactInfo() {
  return prisma.contactInfo.findUnique({ where: { id: 'main' } })
}

export async function updateContactInfo(data: Record<string, any>) {
  const result = await prisma.contactInfo.update({ where: { id: 'main' }, data })
  revalidatePath('/')
  return result
}

// ─── Contact Submissions ─────────────────────────────
export async function createSubmission(data: { name: string; email: string; projectType?: string; message: string }) {
  return prisma.contactSubmission.create({ data })
}

export async function getSubmissions() {
  return prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } })
}

export async function markSubmissionRead(id: string) {
  return prisma.contactSubmission.update({ where: { id }, data: { read: true } })
}

export async function deleteSubmission(id: string) {
  await prisma.contactSubmission.delete({ where: { id } })
}

// ─── Social Links ────────────────────────────────────
export async function getSocialLinks() {
  return prisma.socialLink.findMany({ where: { visible: true }, orderBy: { sortOrder: 'asc' } })
}

export async function getAllSocialLinks() {
  return prisma.socialLink.findMany({ orderBy: { sortOrder: 'asc' } })
}

export async function createSocialLink(data: { platform: string; url: string; icon?: string; sortOrder?: number }) {
  const result = await prisma.socialLink.create({ data })
  revalidatePath('/')
  return result
}

export async function updateSocialLink(id: string, data: { platform?: string; url?: string; icon?: string; sortOrder?: number; visible?: boolean }) {
  const result = await prisma.socialLink.update({ where: { id }, data })
  revalidatePath('/')
  return result
}

export async function deleteSocialLink(id: string) {
  await prisma.socialLink.delete({ where: { id } })
  revalidatePath('/')
}

// ─── Footer ──────────────────────────────────────────
export async function getFooterSettings() {
  return prisma.footerSettings.findUnique({ where: { id: 'main' } })
}

export async function updateFooterSettings(data: { description?: string; copyrightText?: string; bottomText?: string }) {
  const result = await prisma.footerSettings.update({ where: { id: 'main' }, data })
  revalidatePath('/')
  return result
}

// ─── Legal ───────────────────────────────────────────
export async function getPrivacyPolicy() {
  if (!(prisma as any).privacyPolicy) return null
  return (prisma as any).privacyPolicy.findUnique({ where: { id: 'main' } })
}

export async function updatePrivacyPolicy(data: { content: string }) {
  if (!(prisma as any).privacyPolicy) return null
  const result = await (prisma as any).privacyPolicy.update({ where: { id: 'main' }, data })
  revalidatePath('/privacy-policy')
  return result
}

export async function getTermsOfService() {
  if (!(prisma as any).termsOfService) return null
  return (prisma as any).termsOfService.findUnique({ where: { id: 'main' } })
}

export async function updateTermsOfService(data: { content: string }) {
  if (!(prisma as any).termsOfService) return null
  const result = await (prisma as any).termsOfService.update({ where: { id: 'main' }, data })
  revalidatePath('/terms-of-service')
  return result
}
