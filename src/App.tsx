import { MotionConfig } from 'motion/react'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { AppShowcase } from './components/AppShowcase'
import { Footer } from './components/Footer'
import { Glasses } from './components/Glasses'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Mission } from './components/Mission'
import { ModeDemo } from './components/ModeDemo'
import { Nav } from './components/Nav'
import { Ods } from './components/Ods'
import { Problem } from './components/Problem'
import { ScrollLine } from './components/ScrollLine'
import { Taps } from './components/Taps'
import { Team } from './components/Team'
import { Transparency } from './components/Transparency'
import { Waitlist } from './components/Waitlist'

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.1, anchors: true })
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    })
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-gold px-5 py-2 font-semibold text-bg focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo" className="relative">
        <ScrollLine />
        <Hero />
        <Problem />
        <Mission />
        <HowItWorks />
        <Glasses />
        <AppShowcase />
        <ModeDemo />
        <Taps />
        <Transparency />
        <Ods />
        <Team />
        <Waitlist />
      </main>
      <Footer />
    </MotionConfig>
  )
}
