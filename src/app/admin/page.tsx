import { prisma } from '@/lib/prisma'
import { Gamepad2, MessageSquare, Eye, Settings } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const [gamesCount, publishedCount, submissionsCount, unreadCount] = await Promise.all([
    (prisma as any).game?.count() || 0,
    (prisma as any).game?.count({ where: { published: true } }) || 0,
    (prisma as any).contactSubmission?.count() || 0,
    (prisma as any).contactSubmission?.count({ where: { read: false } }) || 0,
  ])

  const stats = [
    { label: 'Total Games', value: gamesCount, icon: Gamepad2, href: '/admin/games', color: 'text-[#ff4d4d]' },
    { label: 'Published', value: publishedCount, icon: Eye, href: '/admin/games', color: 'text-green-400' },
    { label: 'Submissions', value: submissionsCount, icon: MessageSquare, href: '/admin/submissions', color: 'text-blue-400' },
    { label: 'Unread', value: unreadCount, icon: MessageSquare, href: '/admin/submissions', color: 'text-yellow-400' },
  ]

  const quickLinks = [
    { label: 'Manage Games', href: '/admin/games' },
    { label: 'Edit Hero Section', href: '/admin/hero' },
    { label: 'Site Settings & SEO', href: '/admin/settings' },
    { label: 'Edit About Page', href: '/admin/about' },
    { label: 'Manage Services', href: '/admin/services' },
    { label: 'View Contact Submissions', href: '/admin/submissions' },
  ]

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1">Dashboard</h2>
        <p className="text-sm text-white/40">Welcome back. Here&apos;s your studio overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.label} href={stat.href} className="p-5 rounded-xl bg-[#111] border border-white/[0.06] hover:border-white/[0.12] transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <div className={`${stat.color}`}><Icon size={18} /></div>
                <span className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</span>
              </div>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </Link>
          )
        })}
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-sm font-medium text-white/60 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-4 py-3 rounded-lg bg-[#111] border border-white/[0.06] hover:border-[#b30000]/30 text-sm text-white/70 hover:text-white transition-all">
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
