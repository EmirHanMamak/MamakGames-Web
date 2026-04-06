'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

interface HeroProps {
  data: {
    tagLine: string
    title: string
    highlightWord: string
    subtitle: string
    ctaPrimaryText: string
    ctaPrimaryLink: string
    ctaSecondaryText: string
    ctaSecondaryLink: string
  } | null
}

export default function Hero({ data }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; size: number; speedY: number; opacity: number; color: string }[] = []
    const colors = ['#FF0055', '#00F0FF', '#7000FF']
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
        p.y -= p.speedY
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
      })
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  if (!data) return null

  // Split title by highlight word to render it in red
  const titleParts = data.title.split(data.highlightWord)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-primary/[0.1] rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-secondary/[0.08] rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05040A_80%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-8 animate-fade-in-up">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#FF0055] animate-pulse" />
          <span className="text-xs text-white/80 font-medium tracking-wide uppercase">{data.tagLine}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          {titleParts[0]}
          {titleParts.length > 1 && <span className="text-brand-secondary">{data.highlightWord}</span>}
          {titleParts.length > 1 && titleParts.slice(1).join(data.highlightWord)}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {data.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <a href={data.ctaPrimaryLink} className="px-8 py-3.5 rounded-lg bg-brand-primary hover:bg-brand-secondary text-white font-semibold transition-colors duration-200 text-sm">
            {data.ctaPrimaryText}
          </a>
          <a href={data.ctaSecondaryLink} className="px-8 py-3.5 rounded-lg border border-border hover:border-border-hover text-white/80 hover:text-white font-medium transition-all duration-200 text-sm">
            {data.ctaSecondaryText}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}