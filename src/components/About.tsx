'use client'

import { User } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

interface AboutProps {
  data: {
    tagLine: string
    title: string
    titleHighlight: string
    paragraph1: string
    paragraph2: string
    founderName: string
    founderTitle: string
    founderImage: string
    stat1Label: string; stat1Value: string
    stat2Label: string; stat2Value: string
    stat3Label: string; stat3Value: string
    stat4Label: string; stat4Value: string
  } | null
}

export default function About({ data }: AboutProps) {
  if (!data) return null

  const stats = [
    { label: data.stat1Label, value: data.stat1Value },
    { label: data.stat2Label, value: data.stat2Value },
    { label: data.stat3Label, value: data.stat3Value },
    { label: data.stat4Label, value: data.stat4Value },
  ]

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Card */}
          <ScrollReveal>
            <div className="relative rounded-3xl border border-white/5 overflow-hidden bg-surface shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative p-8 md:p-12 flex flex-col items-center text-center">
                <div className="relative mb-8 group">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-x-0 inset-y-0 bg-brand-primary/20 blur-3xl rounded-full scale-125 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative w-48 h-48 rounded-3xl bg-brand-primary/10 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                    {data.founderImage ? (
                      <Image 
                        src={data.founderImage} 
                        alt={data.founderName} 
                        width={192} 
                        height={192} 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    ) : (
                      <User size={64} className="text-brand-primary" />
                    )}
                  </div>
                  
                  {/* Neon ring */}
                  <div className="absolute -inset-1 rounded-[32px] border border-brand-primary/30 animate-pulse" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{data.founderName}</h3>
                <p className="text-brand-secondary font-medium tracking-wide uppercase text-xs">{data.founderTitle}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 mt-10 w-full pt-8 border-t border-white/5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center group-stats">
                      <div className="text-lg font-black text-white group-hover:text-brand-primary transition-colors">{stat.value}</div>
                      <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.15}>
            <div>
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest block mb-3">{data.tagLine}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                {data.title}<br />
                <span className="text-brand-secondary italic">{data.titleHighlight}</span>
              </h2>
              <div className="space-y-4 mt-6">
                <p className="text-text-secondary leading-relaxed">{data.paragraph1}</p>
                <p className="text-text-secondary leading-relaxed">{data.paragraph2}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}