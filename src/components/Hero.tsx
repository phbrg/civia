import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { img } from '../lib/img'
import { Icon } from './Icons'
import { ease } from './Reveal'

const stagger = { show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section
      id="topo"
      ref={ref}
      className="relative isolate flex min-h-svh items-end overflow-hidden pb-14 pt-28 md:items-center md:pb-0"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={img('hero-capa.jpg')} />
        <motion.img
          src={img('oculos-pedra.jpg')}
          alt="Óculos CIVIA sobre uma pedra escura"
          width={1756}
          height={896}
          fetchPriority="high"
          style={reduce ? undefined : { y, scale }}
          className="absolute inset-x-0 top-14 -z-20 h-[50svh] w-full object-cover object-[50%_50%] md:inset-0 md:top-0 md:h-full md:object-[70%_50%]"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg from-40% via-bg/55 to-transparent md:bg-gradient-to-r md:from-bg md:via-bg/70 md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-bg to-transparent" />
      <div className="checker absolute right-0 top-20 -z-10 hidden h-24 w-44 opacity-50 md:block" />

      <motion.div variants={stagger} initial="hidden" animate="show" className="wrap">
        <motion.p variants={rise} className="eyebrow">
          CitizenTech · Acessibilidade urbana
        </motion.p>
        <motion.h1
          variants={rise}
          className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,7.4vw,6.2rem)] font-semibold leading-[1.02] tracking-tight"
        >
          A cidade se adapta <span className="text-gold">a você.</span>
        </motion.h1>
        <motion.p variants={rise} className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">
          Óculos inteligentes e um aplicativo que transformam placas, avisos e rotas em informação que cada pessoa
          consegue receber: por voz, por vibração ou por legenda.
        </motion.p>
        <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#espera"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-bg transition-colors hover:bg-gold-hi"
          >
            Entrar na lista de espera
            <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#como"
            className="rounded-full border border-white/25 px-7 py-3.5 font-semibold transition-colors hover:border-gold hover:text-gold"
          >
            Ver como funciona
          </a>
        </motion.div>
        <motion.p variants={rise} className="mt-10 text-sm text-mute">
          Protótipo acadêmico da equipe ASTRO · FIAP Global Solution 2026.2
        </motion.p>
      </motion.div>
    </section>
  )
}
