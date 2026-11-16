import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

type Mode = 'visao' | 'audicao'

function Voice({ reduce }: { reduce: boolean | null }) {
  return (
    <div>
      <div className="flex h-16 items-center gap-1" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-full bg-gold"
            initial={{ height: 8 }}
            animate={reduce ? { height: 14 } : { height: [8, 14 + ((i * 7) % 5) * 9, 8] }}
            transition={{ duration: 0.9, repeat: reduce ? 0 : 4, delay: i * 0.05 }}
          />
        ))}
      </div>
      <p className="mt-5 font-display text-2xl font-semibold leading-snug md:text-3xl">
        “A plataforma mudou. Siga para a direita.”
      </p>
      <p className="mt-3 text-sm text-mute">Voz curta, direto na haste. Sem ler placa nenhuma.</p>
    </div>
  )
}

function Caption({ reduce }: { reduce: boolean | null }) {
  return (
    <div>
      <motion.div
        className="inline-block rounded-2xl bg-black px-5 py-4 ring-1 ring-gold/60"
        animate={reduce ? undefined : { x: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 0.5, repeat: 2, repeatDelay: 0.3 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Legenda na lente</p>
        <p className="mt-1 font-display text-2xl font-semibold md:text-3xl">Plataforma alterada</p>
      </motion.div>
      <div className="mt-5 flex items-center gap-3 text-sm text-mute">
        <Icon name="bell" className="h-5 w-5 text-gold" />
        Vibração diferente para mudança de plataforma, também na tela do celular.
      </div>
    </div>
  )
}

export function ModeDemo() {
  const [mode, setMode] = useState<Mode>('visao')
  const [run, setRun] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section className="relative py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Mesmo aviso, dois jeitos</p>
          <h2 className="h2 mt-4">
            A informação certa, no formato <span className="text-gold">de cada pessoa.</span>
          </h2>
          <p className="mt-5 text-ink/75">
            Imagine a mesma cena na Estação da Luz: a plataforma acabou de mudar. Escolha quem está ali.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <fieldset className="inline-flex rounded-full border border-white/15 p-1">
            <legend className="sr-only">Como a pessoa recebe os avisos</legend>
            {(
              [
                ['visao', 'eye', 'Não enxerga'],
                ['audicao', 'ear', 'Não escuta'],
              ] as const
            ).map(([id, icon, label]) => (
              <label
                key={id}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-hi ${mode === id ? 'bg-gold text-bg' : 'text-ink/80 hover:text-ink'}`}
              >
                <input
                  type="radio"
                  name="modo"
                  className="sr-only"
                  checked={mode === id}
                  onChange={() => {
                    setMode(id)
                    setRun((n) => n + 1)
                  }}
                />
                <Icon name={icon} className="h-5 w-5" />
                {label}
              </label>
            ))}
          </fieldset>

          <div className="relative mt-6 min-h-72 overflow-hidden rounded-3xl border border-gold/30 bg-panel p-8 md:p-12">
            <div className="checker absolute right-0 top-0 h-20 w-36 opacity-40" aria-hidden="true" />
            <div aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${mode}-${run}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {mode === 'visao' ? <Voice reduce={reduce} /> : <Caption reduce={reduce} />}
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={() => setRun((n) => n + 1)}
              className="mt-8 text-sm font-semibold text-gold underline underline-offset-4 hover:text-gold-hi"
            >
              Reenviar o aviso
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
