'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Smartphone, Globe, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface GameImage {
  id: string
  url: string
}

interface Game {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  coverImage: string
  genre: string
  appStoreUrl: string
  googlePlayUrl: string
  webUrl: string
  steamUrl: string
  featured: boolean
  releaseDate: string
  images?: GameImage[]
}

interface GamesProps {
  games: Game[]
}

function StoreButton({ href, platform, gameTitle, small = false }: { href: string; platform: 'apple' | 'google' | 'web'; gameTitle: string; small?: boolean }) {
  const icons = {
    apple: (
      <svg viewBox="0 0 384 512" width={small ? "14" : "18"} height={small ? "14" : "18"} fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-14.7 0-51.4-22.2-84.6-21.8-42.9.6-86.2 26.9-108.1 67.9-47.1 88.3-11.9 230.3 33.1 298.4 22.1 31.8 48.9 67 84.4 65.7 34.5-1.3 46.7-23.4 88.5-23.4 41.7 0 52.7 23.4 89 22.7 36.2-.7 60.2-31.8 82.1-63.6 24.9-36.3 35.1-71.5 35.6-73.3-1-.4-67.5-25.9-67.7-104.9zM249.1 89.5c15.6-18.9 26.2-45.2 23.3-71.5-22.6 1-49.9 15.1-66.2 34.2-14.6 17.1-27.3 44.1-23.8 69.8 24.9 1.9 49.6-12.2 66.7-32.5z" />
      </svg>
    ),
    google: (
      <svg viewBox="0 0 512 512" width={small ? "14" : "18"} height={small ? "14" : "18"} fill="currentColor">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
      </svg>
    ),
    web: (
      <svg viewBox="0 0 512 512" width={small ? "14" : "18"} height={small ? "14" : "18"} fill="currentColor">
        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64h185.4c2.2 20.4 3.3 41.8 3.3 64zm28.8-64h123.1c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6 62.1 24.2 113.8 69.3 142 126.6zM277.1 32h-42.2c28.3 0 53.6 57.3 64.2 128H212.9c10.6-70.7 35.9-128 64.2-128zm-119.4 0c-25.5 34.2-45.3 87.7-55.3 151.6H18.6c28.2-57.3 79.9-102.4 142-126.6zM32 256c0-22.1 2.8-43.5 8.1-64h123.1c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H40.1c-5.3-20.5-8.1-41.9-8.1-64zm14.6 96h116.8c10 63.9 29.8 117.4 55.3 151.6-62.1-24.2-113.8-69.3-142-126.6zm13.1-443.4C164.7 18.9 208.4 8 256 8s91.3 10.9 127.3 30.6C453.9 66.8 504 126.4 504 192s-50.1 125.2-120.7 153.4c-36 19.7-79.7 30.6-127.3 30.6s-91.3-10.9-127.3-30.6C58.1 317.2 8 257.6 8 192s50.1-125.2 120.7-153.4z" />
      </svg>
    )
  }

  const platforms = {
    apple: { label: 'Download on the', store: 'App Store' },
    google: { label: 'GET IT ON', store: 'Google Play' },
    web: { label: 'PLAY NOW ON', store: 'Web Browser' }
  }

  const { label, store } = platforms[platform]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2.5 ${small ? 'px-3 py-1.5 rounded-lg' : 'px-5 py-2.5 rounded-xl'} bg-white shadow-xl hover:shadow-brand-primary/20 transition-all active:scale-95`}
      aria-label={`${gameTitle} on ${store}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-black">
        {icons[platform]}
      </div>
      <div className="flex flex-col items-start leading-none pointer-events-none">
        <span className={`font-bold uppercase tracking-tighter text-black/40 mb-0.5 ${small ? 'text-[7px]' : 'text-[9px]'}`}>{label}</span>
        <span className={`font-black tracking-tight text-black ${small ? 'text-xs' : 'text-sm'}`}>{store}</span>
      </div>
    </a>
  )
}

function GameModal({ game, onClose }: { game: Game; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0)
  const images = [game.coverImage, ...(game.images?.map(i => i.url) || [])].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        layoutId={`game-card-${game.id}`}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-primary transition-colors hover:rotate-90 duration-300"
        >
          <X size={24} />
        </button>

        {/* Media Block */}
        <div className="w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-auto bg-black relative group/media">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <Image src={images[activeImage]} alt="" fill className="object-cover" priority />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover/media:opacity-100 transition-opacity">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveImage(p => (p - 1 + images.length) % images.length) }}
                className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveImage(p => (p + 1) % images.length) }}
                className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImage(images.indexOf(img))}
                className={`w-12 h-8 rounded-md overflow-hidden border-2 transition-all ${activeImage === images.indexOf(img) ? 'border-brand-primary scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <Image src={img} alt="" width={48} height={32} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Block */}
        <div className="flex-1 p-8 sm:p-12 overflow-y-auto custom-scrollbar">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">{game.genre}</span>
              {game.releaseDate && (
                <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-white/30 tracking-widest"><Calendar size={12} /> {game.releaseDate}</span>
              )}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">{game.title}</h2>
            <div className="space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed font-medium">
              <p className="border-l-4 border-brand-primary pl-6 py-2 bg-gradient-to-r from-brand-primary/5 to-transparent">{game.shortDescription}</p>
              <div className="prose prose-invert prose-brand max-w-none">
                {game.fullDescription.split('\n').map((para, i) => (
                  <p key={`${i}-${para.slice(0, 20)}`}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 space-y-6">
            <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.3em]">Available on</h4>
            <div className="flex flex-wrap gap-4">
              {game.appStoreUrl && <StoreButton platform="apple" href={game.appStoreUrl} gameTitle={game.title} />}
              {game.googlePlayUrl && <StoreButton platform="google" href={game.googlePlayUrl} gameTitle={game.title} />}
              {game.webUrl && <StoreButton platform="web" href={game.webUrl} gameTitle={game.title} />}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Games({ games }: GamesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mouseX, setMouseX] = useState(0)

  // Duplicate games for infinite loop to ensure width always exceeds container
  const displayGames = Array.from({ length: 6 }, () => games).flat()

  useEffect(() => {
    if (!containerRef.current || isHovered) return

    let animationId: number
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 0.8

        const firstBatchWidth = (containerRef.current.scrollWidth / 6)
        if (containerRef.current.scrollLeft >= firstBatchWidth * 5) {
          containerRef.current.scrollLeft = firstBatchWidth
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isHovered, games.length])

  useEffect(() => {
    if (!isHovered || !containerRef.current || games.length === 0) return

    let animationId: number
    const updateScroll = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect()
        const center = width / 2
        const dist = mouseX - center
        const speed = (dist / center) * 15

        containerRef.current.scrollLeft += speed

        const firstBatchWidth = (containerRef.current.scrollWidth / 6)
        if (containerRef.current.scrollLeft >= firstBatchWidth * 5) {
          containerRef.current.scrollLeft = firstBatchWidth
        } else if (containerRef.current.scrollLeft <= 0) {
          containerRef.current.scrollLeft = firstBatchWidth
        }
      }
      animationId = requestAnimationFrame(updateScroll)
    }

    animationId = requestAnimationFrame(updateScroll)
    return () => cancelAnimationFrame(animationId)
  }, [isHovered, mouseX, games.length])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMouseX(e.clientX - rect.left)
  }

  return (
    <section id="games" className="py-24 md:py-32 relative bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4">Our Portfolıo</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter mb-6">
                Games that <br/> <span className="text-brand-secondary italic">Matter</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed font-medium max-w-lg">
                We believe in mechanics that feel right, visuals that pop, and experiences that stick with you.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div
        className="relative py-8 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto cursor-none no-scrollbar py-12 px-[10vw]"
        >
          {displayGames.map((game, index) => (
            <div
              key={`${game.id}-${index}`}
              onClick={() => setSelectedGame(game)}
              className="flex-shrink-0 w-[450px] group/card cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border-2 border-white/5 bg-surface transition-all duration-700 group-hover/card:border-brand-primary group-hover/card:scale-[1.02] shadow-2xl">
                {game.coverImage ? (
                  <Image
                    src={game.coverImage}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    sizes="450px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10 italic">No Key Art</div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-2 block">{game.genre}</span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{game.title}</h3>

                    <div className="flex items-center gap-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="flex -space-x-1">
                        {game.appStoreUrl && <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center border-2 border-surface"><Smartphone size={12}/></div>}
                        {game.googlePlayUrl && <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center border-2 border-surface"><Smartphone size={12}/></div>}
                        {game.webUrl && <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center border-2 border-surface"><Globe size={12}/></div>}
                      </div>
                      <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Vıew Detaıls →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Cursor for Carousel */}
        <motion.div
          animate={{
            x: mouseX,
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
          className="fixed top-0 left-0 w-24 h-24 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/50 text-white flex flex-col items-center justify-center z-50 pointer-events-none -translate-x-12 -translate-y-12"
        >
          <div className="flex gap-2 mb-1">
            <ChevronLeft size={14} className="animate-pulse" />
            <ChevronRight size={14} className="animate-pulse" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest">Interact</span>
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedGame && (
          <GameModal
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
