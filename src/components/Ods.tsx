import { Reveal } from './Reveal'

const ods = [
  ['10', 'Redução das desigualdades', 'Mais acesso à informação e mobilidade inclusiva.'],
  ['11', 'Cidades e comunidades sustentáveis', 'Mobilidade inclusiva e registro de obstáculos urbanos.'],
  ['3', 'Saúde e bem-estar', 'Autonomia no dia a dia e pedido de ajuda quando precisar.'],
  ['9', 'Indústria, inovação e infraestrutura', 'Inovação inclusiva, reunindo tecnologias que já existem.'],
  ['13', 'Ação contra a mudança global do clima', 'Atenção a alertas climáticos nos deslocamentos urbanos.'],
]

export function Ods() {
  return (
    <section id="ods" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Impacto</p>
          <h2 className="h2 mt-4">
            Cinco objetivos da ONU <span className="text-gold">na mesma rua.</span>
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {ods.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.06} className="bg-bg">
              <li className="flex h-full flex-col p-7">
                <span className="font-display text-6xl font-semibold leading-none text-gold">{n}</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-mute">ODS</span>
                <h3 className="mt-6 font-display text-base font-semibold leading-snug">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
