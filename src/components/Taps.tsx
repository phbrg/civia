import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { resolveTaps, type TapOutcome } from '../lib/taps'
import { Icon } from './Icons'
import { Mark } from './Logo'
import { Reveal } from './Reveal'

const result: Record<Exclude<TapOutcome, 'none'>, { title: string; lines: string[]; sos?: boolean }> = {
  help: {
    title: 'Ajuda de confiança',
    lines: [
      'O pedido chega no celular do contato que você autorizou.',
      'Se você consentir, ele vê uma imagem temporária do que está à sua frente.',
      'Ele orienta por texto ou por voz.',
    ],
  },
  sos: {
    title: 'Emergência',
    sos: true,
    lines: [
      'O CIVIA envia a última localização conhecida.',
      'Você recebe uma confirmação visível, sonora ou tátil.',
      'Sem conexão, ele avisa que não conseguiu enviar.',
    ],
  },
  unknown: { title: 'Nada acontece', lines: ['Só dois toques (ajuda) e três toques (SOS) têm função. Tente de novo.'] },
}

export function Taps() {
  const count = useRef(0)
  const timer = useRef<number | undefined>(undefined)
  const [taps, setTaps] = useState(0)
  const [outcome, setOutcome] = useState<TapOutcome>('none')

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const tap = () => {
    count.current += 1
    setTaps(count.current)
    setOutcome('none')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      setOutcome(resolveTaps(count.current))
      count.current = 0
      setTaps(0)
    }, 700)
  }

  const r = outcome === 'none' ? null : result[outcome]

  return (
    <section className="relative py-24 md:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Na haste</p>
          <h2 className="h2 mt-4">
            Dois toques pedem ajuda. <span className="text-gold">Três chamam o SOS.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
            Sem procurar botão no celular, sem tirar nada do bolso. Experimente: toque na haste ao lado duas ou três
            vezes seguidas.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-panel p-6 md:p-10">
            <button
              type="button"
              onClick={tap}
              aria-label="Tocar na haste dos óculos"
              className="relative flex h-28 w-full items-center justify-between overflow-hidden rounded-full bg-gradient-to-r from-[#050508] to-[#1c1c28] px-8 ring-1 ring-white/15 transition-transform active:scale-[0.985]"
            >
              <span className="flex items-center gap-4">
                <Mark className="h-9 w-auto" />
                <span className="text-sm font-semibold text-mute">Toque aqui</span>
              </span>
              <span className="font-display text-4xl font-semibold tabular-nums text-gold" aria-hidden="true">
                {taps || ''}
              </span>
              <AnimatePresence>
                {taps > 0 && (
                  <motion.span
                    key={taps}
                    className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold"
                    initial={{ scale: 0.3, opacity: 0.9 }}
                    animate={{ scale: 3.5, opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  />
                )}
              </AnimatePresence>
            </button>

            <div aria-live="polite" className="mt-8 min-h-44">
              {r ? (
                <motion.div key={outcome} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                  <p className={`flex items-center gap-2 font-display text-xl font-semibold ${r.sos ? 'text-red-400' : 'text-gold'}`}>
                    <Icon name={r.sos ? 'alert' : 'hand'} className="h-6 w-6" />
                    {r.title}
                  </p>
                  <ol className="mt-4 space-y-3 text-sm leading-relaxed text-ink/80">
                    {r.lines.map((l, i) => (
                      <motion.li
                        key={l}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.2 }}
                        className="flex gap-3"
                      >
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {l}
                      </motion.li>
                    ))}
                  </ol>
                </motion.div>
              ) : (
                <p className="text-sm text-mute">
                  {taps ? 'Continue tocando…' : '2 toques = ajuda de confiança · 3 toques = SOS'}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
