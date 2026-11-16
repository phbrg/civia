import { motion } from 'motion/react'
import { useState } from 'react'
import { img } from '../lib/img'
import { Reveal } from './Reveal'

const spots = [
  { id: 'camera', label: 'Câmera', x: 39.5, y: 37, text: 'Lê textos, objetos e avisos do caminho e entrega ao app o que está acontecendo ao redor.' },
  { id: 'toque', label: 'Haste de toque', x: 29, y: 44, text: 'Dois toques pedem ajuda a um contato autorizado. Três toques acionam o SOS.' },
  { id: 'audio', label: 'Áudio', x: 5.5, y: 58, text: 'Orientações curtas por voz, perto do ouvido. Para quem prefere, o aviso vem por vibração ou legenda.' },
] as const

export function Glasses() {
  const [on, setOn] = useState<(typeof spots)[number]['id']>('camera')
  const cur = spots.find((s) => s.id === on)!

  return (
    <section id="oculos" className="relative scroll-mt-16 overflow-hidden py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Os óculos</p>
          <h2 className="h2 mt-4">
            Parece um óculos comum. O trabalho acontece <span className="text-gold">por dentro.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-panel bg-[radial-gradient(ellipse_at_55%_55%,rgb(228_168_12/0.22),transparent_62%)]">
            <img
              src={img('oculos-frente.png')}
              alt="Óculos CIVIA vistos de frente e de lado, com câmera na armação e a marca na haste"
              width={2172}
              height={724}
              loading="lazy"
              className="aspect-[3/1] w-full object-cover"
            />
            {spots.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setOn(s.id)}
                onMouseEnter={() => setOn(s.id)}
                aria-pressed={on === s.id}
                aria-label={s.label}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
              >
                <span
                  className={`h-4 w-4 rounded-full border-2 transition-colors ${on === s.id ? 'border-gold-hi bg-gold' : 'border-white bg-transparent'}`}
                />
                {on === s.id && (
                  <motion.span
                    className="absolute h-11 w-11 rounded-full border border-gold"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 1.15, opacity: 0 }}
                    transition={{ duration: 1.4, repeat: 3 }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_2fr]" aria-live="polite">
            <p className="font-display text-2xl font-semibold text-gold">{cur.label}</p>
            <p className="text-lg leading-relaxed text-ink/80">{cur.text}</p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            ['oculos-mesa.jpg', 'Óculos CIVIA sobre uma mesa de mármore, ao lado de uma xícara de café'],
            ['haste-interna.jpg', 'Corte da haste dos óculos mostrando sensor de toque, bateria e placa principal (render conceitual)'],
            ['homem-cidade.jpg', 'Homem de casaco usando os óculos CIVIA numa calçada da cidade'],
          ].map(([src, alt], i) => (
            <Reveal key={src} delay={i * 0.08}>
              <img
                src={img(src)}
                alt={alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-mute">
          Imagens da modelagem conceitual do CIVIA (renders). Ainda não existe um dispositivo físico validado.
        </p>
      </div>
    </section>
  )
}
