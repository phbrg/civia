import { AnimatePresence, motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { img } from '../lib/img'
import { Icon, type IconName } from './Icons'
import { Reveal } from './Reveal'

const steps: { icon: IconName; title: string; text: string; src: string; alt: string }[] = [
  {
    icon: 'camera',
    title: 'Captar',
    text: 'A câmera e os microfones nas hastes identificam texto, objetos e avisos relevantes ao seu redor.',
    src: 'visao-cafe.jpg',
    alt: 'Vista de dentro dos óculos CIVIA, com uma xícara de café e pessoas ao fundo',
  },
  {
    icon: 'spark',
    title: 'Interpretar',
    text: 'A inteligência artificial cruza o que foi captado com a sua rota e escolhe o que merece ser dito. Frases curtas, sem excesso de detalhe.',
    src: 'haste-interna.jpg',
    alt: 'Corte da haste dos óculos mostrando sensor de toque, bateria e placa principal (render conceitual)',
  },
  {
    icon: 'wave',
    title: 'Comunicar',
    text: 'O aviso chega do jeito que você escolheu: voz, vibração ou legenda, nas lentes compatíveis e na tela do celular.',
    src: 'homem-cidade.jpg',
    alt: 'Homem de casaco usando os óculos CIVIA na calçada',
  },
]

function Step({ i, active, onActive }: { i: number; active: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLLIElement>(null)
  const s = steps[i]
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })
  useEffect(() => {
    if (inView) onActive(i)
  }, [inView, i, onActive])

  return (
    <li ref={ref} className="flex min-h-[60svh] flex-col justify-center py-10 lg:min-h-[72svh]">
      <img
        src={img(s.src)}
        alt={s.alt}
        loading="lazy"
        className="mb-8 aspect-video w-full rounded-2xl object-cover lg:hidden"
      />
      <div className={`transition-opacity duration-500 ${active === i ? 'opacity-100' : 'lg:opacity-35'}`}>
        <span className="flex items-center gap-3 font-display text-sm font-semibold text-gold">
          <Icon name={s.icon} className="h-6 w-6" /> 0{i + 1}
        </span>
        <h3 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{s.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/75">{s.text}</p>
      </div>
    </li>
  )
}

export function HowItWorks() {
  const [active, setActive] = useState(0)
  return (
    <section id="como" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Como funciona</p>
          <h2 className="h2 mt-4">
            Os óculos captam, o app entende, <span className="text-gold">você decide.</span>
          </h2>
        </Reveal>

        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-16">
          <ol className="m-0 list-none p-0">
            {steps.map((_, i) => (
              <Step key={i} i={i} active={active} onActive={setActive} />
            ))}
          </ol>
          <div className="relative hidden lg:block">
            <div className="sticky top-28 h-[68svh] overflow-hidden rounded-3xl border border-gold/30">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={img(steps[active].src)}
                  alt={steps[active].alt}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-5 left-5 flex gap-2" aria-hidden="true">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all ${active === i ? 'w-10 bg-gold' : 'w-4 bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
