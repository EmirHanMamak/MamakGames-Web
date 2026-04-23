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

  const [authTimeout, setAuthTimeout] = useState(false)

  useEffect(() => {
    // If auth takes more than 6 seconds it is likely misconfigured (NO_SECRET)
    const timer = setTimeout(() => {
      if (status === 'loading') setAuthTimeout(true)
    }, 6000)
    return () => clearTimeout(timer)
  }, [status])

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/admin/login' && pathname !== '/admin/setup') {
      router.push('/admin/login')
    }
  }, [status, pathname, router])

  // Pass through for login and setup pages — no auth required
  if (pathname === '/admin/login' || pathname === '/admin/setup') {
    return <>{children}</>
  }

  // Auth is taking too long — likely NEXTAUTH_SECRET is not set
  if (authTimeout && status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-lg font-bold text-white mb-2">Authentication Not Configured</h2>
          <p className="text-white/50 text-sm mb-4">
            The app cannot reach the auth service. This usually means <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">NEXTAUTH_SECRET</code> is not set in your environment variables.
          </p>
          <p className="text-white/30 text-xs mb-6">
            Go to Coolify → your service → Environment Variables → add <code className="bg-white/10 px-1 rounded">NEXTAUTH_SECRET</code>
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
            >
              Retry
            </button>
            <a
              href="/admin/setup"
              className="px-4 py-2 rounded-lg bg-[#b30000] hover:bg-[#cc0000] text-white text-sm transition-colors"
            >
              Go to Setup
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-white/50 text-sm">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-white/50 text-sm">Checking session...</div>
      </div>
    )
  }

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
