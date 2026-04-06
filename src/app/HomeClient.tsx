'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Games from '@/components/Games'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

interface HomeClientProps {
  siteSettings: any
  hero: any
  games: any[]
  about: any
  services: any[]
  contactInfo: any
  socialLinks: any[]
  footer: any
  navItems: any[]
}

export function HomeClient({ siteSettings, hero, games, about, services, contactInfo, socialLinks, footer, navItems }: HomeClientProps) {
  const [loaded, setLoaded] = useState(!siteSettings?.showLoadingScreen)

  useEffect(() => {
    if (siteSettings?.showLoadingScreen) {
      const timer = setTimeout(() => setLoaded(true), 1800)
      return () => clearTimeout(timer)
    }
  }, [siteSettings?.showLoadingScreen])

  return (
    <>
      {siteSettings?.showLoadingScreen && !loaded && (
        <LoadingScreen text={siteSettings?.loadingText || 'MAMAK GAMES'} />
      )}

      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header logoText={siteSettings?.logoText || 'Mamak Games'} navItems={navItems} />
        {hero?.visible !== false && <Hero data={hero} />}
        {games.length > 0 && <Games games={games} />}
        {about?.visible !== false && <About data={about} />}
        {services.length > 0 && <Services services={services} />}
        {contactInfo?.visible !== false && <Contact contactInfo={contactInfo} />}
        <Footer footer={footer} socialLinks={socialLinks} navItems={navItems} />
      </div>
    </>
  )
}
