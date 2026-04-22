'use client'

import type { ComponentType } from 'react'
import ScrollReveal from './ScrollReveal'
import * as LucideIcons from 'lucide-react'

interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
}

interface ServicesProps {
  services: ServiceItem[]
}

export default function Services({ services }: ServicesProps) {
  const getIcon = (name: string): ComponentType<{ size?: number; className?: string }> => {
    const icon = (LucideIcons as unknown as Record<string, ComponentType<{ size?: number; className?: string }> | undefined>)[name]
    return icon || LucideIcons.Wrench
  }

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest block mb-3">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From initial concept to polished release, we offer end-to-end game development services tailored for mobile and web platforms.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon)
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-surface border border-border hover:border-brand-primary/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-5 border border-brand-primary/20">
                      <Icon size={20} className="text-brand-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
