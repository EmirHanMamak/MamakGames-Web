'use client'

import { useState } from 'react'
import { Mail, MapPin, Globe, Send, ArrowUpRight } from 'lucide-react'
import { LinkedinIcon } from './icons/LinkedinIcon'
import ScrollReveal from './ScrollReveal'
import { createSubmission } from '@/lib/actions'

interface ContactProps {
  contactInfo: {
    email: string
    linkedin: string
    linkedinUrl: string
    website: string
    websiteUrl: string
    location: string
    formEnabled: boolean
  } | null
}

export default function Contact({ contactInfo }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  if (!contactInfo) return null

  const contactCards = [
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: LinkedinIcon, label: 'LinkedIn', value: contactInfo.linkedin, href: contactInfo.linkedinUrl },
    { icon: Globe, label: 'Website', value: contactInfo.website, href: contactInfo.websiteUrl },
    { icon: MapPin, label: 'Location', value: contactInfo.location, href: '#' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await createSubmission(form)
      setStatus('success')
      setForm({ name: '', email: '', projectType: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest block mb-3">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-tighter">
              Let's <span className="text-brand-secondary italic">Connect</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mt-3 font-medium">
              Have a question about our games, found a bug, or just want to say hi? We'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <ScrollReveal>
            <div className="space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon
                return (
                  <a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-xl bg-surface border border-border hover:border-brand-primary/30 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-white/30 uppercase tracking-wider mb-0.5">{card.label}</div>
                      <div className="text-sm font-medium text-white truncate">{card.value}</div>
                    </div>
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
                  </a>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          {contactInfo.formEnabled && (
            <ScrollReveal delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-white/30 uppercase tracking-wider mb-1.5 block">Name</label>
                    <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-brand-primary/40 text-white text-sm placeholder:text-white/20 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-white/30 uppercase tracking-wider mb-1.5 block">Email</label>
                    <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-brand-primary/40 text-white text-sm placeholder:text-white/20 outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-white/30 uppercase tracking-wider mb-1.5 block">Subject</label>
                  <select value={form.projectType} onChange={e => setForm(p => ({ ...p, projectType: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-brand-primary/40 text-white text-sm outline-none transition-colors appearance-none">
                    <option value="">Select a reason...</option>
                    <option value="Question">General Question</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Hello">Just Saying Hi!</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-white/30 uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-brand-primary/40 text-white text-sm placeholder:text-white/20 outline-none transition-colors resize-none" />
                </div>

                <button type="submit" disabled={status === 'loading'} className="w-full py-3.5 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50">
                  {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : <><Send size={16} /> Send Message</>}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-400 text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  )
}