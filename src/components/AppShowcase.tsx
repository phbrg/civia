import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Icon, type IconName } from './Icons'
import { Mark } from './Logo'
import { Reveal } from './Reveal'

const tabs = [
  { id: 'rotina', label: 'Minha rotina', icon: 'pin' },
  { id: 'orientacao', label: 'Orientação', icon: 'route' },
  { id: 'ajuda', label: 'Ajuda', icon: 'hand' },
] as const satisfies readonly { id: string; label: string; icon: IconName }[]
type TabId = (typeof tabs)[number]['id']

function Rotina() {
  const [elev, setElev] = useState(true)
  return (
    <div className="space-y-3">
      {['Casa', 'Trabalho', 'Estação da Luz'].map((p) => (
        <div key={p} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm">
          <Icon name="pin" className="h-5 w-5 text-gold" /> {p}
        </div>
      ))}
      <button
        type="button"
        role="switch"
        aria-checked={elev}
        onClick={() => setElev((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-left text-sm"
      >
        Preferir elevadores
        <span className={`h-6 w-11 rounded-full p-0.5 transition-colors ${elev ? 'bg-gold' : 'bg-white/20'}`}>
          <span className={`block h-5 w-5 rounded-full bg-bg transition-transform ${elev ? 'translate-x-5' : ''}`} />
        </span>
      </button>
      <div className="rounded-xl bg-gold px-4 py-3.5 text-center text-sm font-semibold text-bg">Ir ao trabalho</div>
    </div>
  )
}

function Orientacao() {
  return (
    <div className="space-y-3 text-sm">
      <p className="text-xs text-mute">Rota para o trabalho, com elevadores</p>
      {['Entrada da estação à direita', 'Elevador no fim do corredor'].map((s) => (
        <div key={s} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
          <Icon name="check" className="h-5 w-5 text-gold" /> {s}
        </div>
      ))}
      <div className="flex items-center gap-3 rounded-xl border border-gold bg-gold/15 px-4 py-3 font-semibold text-gold-hi">
        <Icon name="alert" className="h-5 w-5" /> Plataforma alterada
      </div>
      <p className="pt-1 text-xs leading-relaxed text-mute">
        Sem localização confiável, o CIVIA avisa em vez de inventar uma direção.
      </p>
    </div>
  )
}

function Ajuda() {
  return (
    <div className="space-y-3 text-sm">
      <div className="rounded-xl bg-white/5 px-4 py-4">
        <p className="text-xs text-mute">Contato autorizado</p>
        <p className="mt-1 font-semibold">Pedir ajuda</p>
        <p className="mt-1 text-xs text-mute">Ele vê uma imagem temporária só se você deixar.</p>
      </div>
      <div className="rounded-xl bg-red-600 px-4 py-4 text-center font-bold tracking-wide">SOS</div>
      <p className="text-xs leading-relaxed text-mute">O envio depende de conexão. Sem ela, o app diz que não enviou.</p>
    </div>
  )
}

const screens: Record<TabId, () => React.JSX.Element> = { rotina: Rotina, orientacao: Orientacao, ajuda: Ajuda }

export function AppShowcase() {
  const [tab, setTab] = useState<TabId>('rotina')
  const Screen = screens[tab]

  return (
    <section id="app" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="wrap grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">O aplicativo</p>
          <h2 className="h2 mt-4">
            Três ações. <span className="text-gold">Nada de menu infinito.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
            Minha rotina guarda casa, trabalho e os lugares que você frequenta. Orientação mostra o trajeto certo para o
            seu perfil. Ajuda chama quem você autorizou. Tudo funciona por voz, toque, texto legível e alto contraste,
            compatível com leitor de tela.
          </p>
          <p className="mt-4 max-w-lg text-sm text-mute">
            Mapas, destinos e contatos essenciais podem ficar guardados no celular para uso offline, com funcionamento
            limitado.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center">
          <div className="relative w-[18.5rem] rounded-[2.8rem] border border-white/15 bg-[#0b0b13] p-3 shadow-[0_40px_120px_-30px_rgb(228_168_12/0.35)]">
            <div className="flex h-[35rem] flex-col overflow-hidden rounded-[2.2rem] bg-bg">
              <div className="flex items-center justify-between px-6 pb-3 pt-5">
                <Mark className="h-6 w-auto" />
                <span className="text-xs text-mute">CIVIA</span>
              </div>
              <div role="tabpanel" id={`p-${tab}`} aria-labelledby={`t-${tab}`} className="flex-1 overflow-hidden px-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Screen />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div role="tablist" aria-label="Seções do aplicativo" className="grid grid-cols-3 border-t border-white/10">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    id={`t-${t.id}`}
                    role="tab"
                    type="button"
                    aria-selected={tab === t.id}
                    aria-controls={`p-${t.id}`}
                    onClick={() => setTab(t.id)}
                    className={`flex flex-col items-center gap-1 py-3 text-[0.68rem] transition-colors ${tab === t.id ? 'text-gold' : 'text-mute'}`}
                  >
                    <Icon name={t.icon} className="h-5 w-5" />
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs text-mute">Telas ilustrativas do protótipo. Toque nas abas.</p>
        </Reveal>
      </div>
    </section>
  )
}
