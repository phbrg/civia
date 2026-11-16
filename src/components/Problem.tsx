import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { img } from '../lib/img'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

const TARGET = 14.4

function CountUp() {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? TARGET : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, TARGET, { duration: 1.8, ease: 'easeOut', onUpdate: setN })
    return () => c.stop()
  }, [inView, reduce])

  return (
    <span ref={ref} aria-label={`${TARGET} milhões`}>
      <span aria-hidden="true">{n.toFixed(1).replace('.', ',')} milhões</span>
    </span>
  )
}

export function Problem() {
  return (
    <section id="problema" className="relative scroll-mt-16 overflow-hidden py-28 md:py-40">
      <img
        src={img('plataforma.jpg')}
        alt=""
        loading="lazy"
        className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-right opacity-40 [mask-image:linear-gradient(to_right,transparent,black_45%)] md:w-3/5 md:opacity-100"
      />
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">O problema</p>
            <h2 className="h2 mt-4">A plataforma mudou. O aviso saiu só no alto-falante.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed text-ink/80">
              A cidade avisa por placas, painéis e anúncios sonoros. Quem não enxerga perde a placa; quem não escuta
              perde o anúncio. Na Estação da Luz, uma simples troca de plataforma já basta para transformar o trajeto de
              todo dia numa situação difícil.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              <li className="flex gap-4">
                <Icon name="eye" className="mt-1 h-7 w-7 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-mute">
                  <b className="font-semibold text-ink">Deficiência visual.</b> Pode ser impossível identificar uma
                  sinalização ou um obstáculo no caminho.
                </p>
              </li>
              <li className="flex gap-4">
                <Icon name="ear" className="mt-1 h-7 w-7 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-mute">
                  <b className="font-semibold text-ink">Deficiência auditiva.</b> Um comunicado transmitido só em áudio
                  passa batido.
                </p>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-14 border-l-[3px] border-gold pl-6">
              <p className="font-display text-5xl font-semibold tabular-nums md:text-6xl">
                <CountUp />
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">
                de pessoas com deficiência no Brasil, 7,3% da população com 2 anos ou mais. Censo 2022, IBGE (2025).
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
