'use client'

import { useSession, signOut } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  LayoutDashboard, Settings, Image, Gamepad2, Info, Wrench,
  Mail, LinkIcon, LogOut, Menu, X, ChevronRight, MessageSquare
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Hero Section', href: '/admin/hero', icon: Image },
  { label: 'Games', href: '/admin/games', icon: Gamepad2 },
  { label: 'About', href: '/admin/about', icon: Info },
  { label: 'Services', href: '/admin/services', icon: Wrench },
  { label: 'Contact', href: '/admin/contact', icon: Mail },
  { label: 'Footer & Social', href: '/admin/footer', icon: LinkIcon },
  { label: 'Submissions', href: '/admin/submissions', icon: MessageSquare },
  { label: 'Settings & SEO', href: '/admin/settings', icon: Settings },
  { label: 'Legal Docs', href: '/admin/legal', icon: Info },
]

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/admin/login') {
      router.push('/admin/login')
    }
  }, [status, pathname, router])

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-white/50 text-sm">Loading...</div>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0a0a0a] border-r border-white/[0.06] flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 border-b border-white/[0.06]">
          <Link href="/admin" className="text-lg font-semibold text-white tracking-tight">
            Mamak Games
          </Link>
          <p className="text-[11px] text-white/30 mt-0.5">Admin Panel</p>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-[#b30000]/15 text-[#ff4d4d] font-medium'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/[0.04]'
                }`}
              >
                <Icon size={16} />
                {item.label}
                {isActive && <ChevronRight size={14} className="ml-auto" />}
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t border-white/[0.06]">
          <div className="px-3 py-2 text-xs text-white/30 truncate mb-1">
            {session.user?.email}
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:text-red-400 hover:bg-white/[0.04] transition-all w-full"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/[0.06] px-4 lg:px-8 h-14 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-white/50 hover:text-white mr-3"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-sm font-medium text-white/70">
            {navItems.find(n => pathname === n.href || (n.href !== '/admin' && pathname.startsWith(n.href)))?.label || 'Admin'}
          </h1>
          <Link href="/" target="_blank" className="ml-auto text-xs text-white/30 hover:text-white/60 transition-colors">
            View Site →
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
