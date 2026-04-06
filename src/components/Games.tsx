'use client'

import { useRef } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

interface Game {
  id: string
  title: string
  slug: string
  shortDescription: string
  coverImage: string
  genre: string
  appStoreUrl: string
  googlePlayUrl: string
  webUrl: string
  steamUrl: string
  featured: boolean
}

interface GamesProps {
  games: Game[]
}

// ─── Platform Buttons ────────────────────────────────
function StoreButton({ href, platform, gameTitle }: { href: string; platform: 'apple' | 'google' | 'web'; gameTitle: string }) {
  const icons = {
    apple: (
      <svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-14.7 0-51.4-22.2-84.6-21.8-42.9.6-86.2 26.9-108.1 67.9-47.1 88.3-11.9 230.3 33.1 298.4 22.1 31.8 48.9 67 84.4 65.7 34.5-1.3 46.7-23.4 88.5-23.4 41.7 0 52.7 23.4 89 22.7 36.2-.7 60.2-31.8 82.1-63.6 24.9-36.3 35.1-71.5 35.6-73.3-1-.4-67.5-25.9-67.7-104.9zM249.1 89.5c15.6-18.9 26.2-45.2 23.3-71.5-22.6 1-49.9 15.1-66.2 34.2-14.6 17.1-27.3 44.1-23.8 69.8 24.9 1.9 49.6-12.2 66.7-32.5z" />
      </svg>
    ),
    google: (
      <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
      </svg>
    ),
    web: (
      <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor">
        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64h185.4c2.2 20.4 3.3 41.8 3.3 64zm28.8-64h123.1c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6 62.1 24.2 113.8 69.3 142 126.6zM277.1 32h-42.2c28.3 0 53.6 57.3 64.2 128H212.9c10.6-70.7 35.9-128 64.2-128zm-119.4 0c-25.5 34.2-45.3 87.7-55.3 151.6H18.6c28.2-57.3 79.9-102.4 142-126.6zM32 256c0-22.1 2.8-43.5 8.1-64h123.1c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H40.1c-5.3-20.5-8.1-41.9-8.1-64zm14.6 96h116.8c10 63.9 29.8 117.4 55.3 151.6-62.1-24.2-113.8-69.3-142-126.6zm13.1-443.4C164.7 18.9 208.4 8 256 8s91.3 10.9 127.3 30.6C453.9 66.8 504 126.4 504 192s-50.1 125.2-120.7 153.4c-36 19.7-79.7 30.6-127.3 30.6s-91.3-10.9-127.3-30.6C58.1 317.2 8 257.6 8 192s50.1-125.2 120.7-153.4z" />
      </svg>
    )
  }

  const platforms = {
    apple: { label: 'Download on the', store: 'App Store', color: 'hover:bg-white hover:text-black border-white/20' },
    google: { label: 'GET IT ON', store: 'Google Play', color: 'hover:bg-white hover:text-black border-white/20' },
    web: { label: 'PLAY NOW ON', store: 'Web Browser', color: 'hover:bg-brand-secondary hover:text-black border-brand-secondary/30' }
  }

  const { label, store, color } = platforms[platform]

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center gap-3 px-4 py-2 rounded-xl bg-black border transition-all duration-300 group/btn ${color}`}
      aria-label={`${gameTitle} on ${store}`}
    >
      <div className="flex-shrink-0">
        {icons[platform]}
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[9px] font-bold uppercase tracking-tighter opacity-60 mb-0.5">{label}</span>
        <span className="text-sm font-bold tracking-tight">{store}</span>
      </div>
    </a>
  )
}

export default function Games({ games }: GamesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return
    const { left, width } = scrollRef.current.getBoundingClientRect()
    const x = e.clientX - left
    
    // Auto-scroll logic: scroll when mouse is near edges
    const threshold = 150
    const maxSpeed = 15
    
    if (x < threshold) {
      // Scroll left
      scrollRef.current.scrollLeft -= maxSpeed * (1 - x / threshold)
    } else if (x > width - threshold) {
      // Scroll right
      scrollRef.current.scrollLeft += maxSpeed * (1 - (width - x) / threshold)
    }
  }

  return (
    <section id="games" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-widest block mb-3">Our Games</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Crafted with <span className="text-brand-secondary">Care</span>
              </h2>
              <p className="text-text-secondary mt-3 max-w-lg text-sm leading-relaxed">
                Each game is a personal journey — designed, developed, and polished to deliver a memorable experience — from the first tap to the hundredth hour.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal scroll */}
        <div 
          ref={scrollRef} 
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto pb-12 -mx-6 px-6 no-scrollbar"
        >
          {games.map((game, index) => (
            <ScrollReveal key={game.id} delay={index * 0.1}>
              <div className="group flex-shrink-0 w-[320px] sm:w-[380px] md:w-[460px] snap-start">
                {/* Cover */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-surface border border-border group-hover:border-brand-primary/30 transition-all duration-500 shadow-2xl">
                  {game.coverImage ? (
                    <Image src={game.coverImage} alt={game.title} fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 460px" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">No Image</div>
                  )}
                  {/* Genre badge */}
                  {game.genre && (
                    <div className="absolute top-5 left-5 z-20">
                      <span className="px-4 py-2 rounded-xl text-[10px] font-black bg-brand-primary text-white shadow-[0_4px_20px_rgba(255,0,85,0.6)] uppercase tracking-[0.1em]">
                        {game.genre}
                      </span>
                    </div>
                  )}
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Neon border on hover */}
                  <div className="absolute inset-0 border-2 border-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none z-30" />
                </div>

                {/* Info */}
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-brand-primary transition-colors">{game.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3 font-medium opacity-80">{game.shortDescription}</p>

                {/* Platform buttons */}
                <div className="flex flex-wrap gap-3">
                  {game.appStoreUrl && <StoreButton platform="apple" href={game.appStoreUrl} gameTitle={game.title} />}
                  {game.googlePlayUrl && <StoreButton platform="google" href={game.googlePlayUrl} gameTitle={game.title} />}
                  {game.webUrl && <StoreButton platform="web" href={game.webUrl} gameTitle={game.title} />}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}