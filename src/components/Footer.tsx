'use client'

import Link from 'next/link'
import { Mail, Globe } from 'lucide-react'
import { LinkedinIcon } from './icons/LinkedinIcon'

interface FooterProps {
  footer: { description: string; copyrightText: string; bottomText: string } | null
  socialLinks: { id: string; platform: string; url: string; icon: string }[]
  navItems: { id: string; label: string; href: string }[]
}

const iconMap: Record<string, any> = { Mail, Globe, Linkedin: LinkedinIcon }

export default function Footer({ footer, socialLinks, navItems }: FooterProps) {
  if (!footer) return null

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]

  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white tracking-tight mb-3">Mamak Games</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-xs">{footer.description}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon] || Globe
                return (
                  <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-border hover:border-border-hover flex items-center justify-center text-white/40 hover:text-white transition-all" aria-label={s.platform}>
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href.startsWith('#') ? `/${item.href}` : item.href} className="text-sm text-text-secondary hover:text-white transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/25">{footer.copyrightText}</p>
          <p className="text-xs text-white/15">{footer.bottomText}</p>
        </div>
      </div>
    </footer>
  )
}