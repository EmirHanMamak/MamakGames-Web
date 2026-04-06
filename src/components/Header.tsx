'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  logoText: string
  navItems: { id: string; label: string; href: string }[]
}

export default function Header({ logoText, navItems }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-base/90 backdrop-blur-md border-b border-border' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white tracking-tight">{logoText}</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.id} href={item.href.startsWith('#') ? `/${item.href}` : item.href} className="text-sm text-text-secondary hover:text-white transition-colors duration-200">
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="px-5 py-2 rounded-lg bg-brand-primary hover:bg-brand-secondary text-white text-sm font-semibold transition-colors">
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/70 hover:text-white p-2">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg-base/98 backdrop-blur-lg z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-white/80 hover:text-white font-medium transition-all"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setMenuOpen(false)} className="mt-4 px-8 py-3 rounded-lg bg-brand-primary text-white font-semibold text-lg">
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}