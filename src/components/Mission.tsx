import { img } from '../lib/img'
import { Icon, type IconName } from './Icons'
import { Reveal } from './Reveal'

const items: { icon: IconName; title: string; text: string }[] = [
  { icon: 'camera', title: 'Reconhecer o ambiente', text: 'Câmera e microfones identificam texto, objetos e avisos que importam.' },
  { icon: 'bell', title: 'Receber avisos', text: 'Plataforma alterada, obra no caminho, elevador fora do ar: você fica sabendo.' },
  { icon: 'route', title: 'Orientar trajetos', text: 'Rotas que priorizam elevadores, acessos e alertas oficiais.' },
  { icon: 'hand', title: 'Pedir ajuda', text: 'Um contato autorizado e um fluxo de SOS, a poucos toques da haste.' },
]

export function Mission() {
  return (
    <section id="missao" className="relative scroll-mt-16 py-24 md:py-36">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="para bg-gold p-[2px]">
            <div className="para overflow-hidden">
              <img
                src={img('mulher-cidade.jpg')}
                alt="Mulher usando os óculos CIVIA numa rua da cidade ao pôr do sol"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Nossa missão</p>
            <h2 className="h2 mt-4">
              Mais <span className="text-gold">autonomia, segurança e acessibilidade</span> para se deslocar.
            </h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.07}>
                <li className="flex items-start gap-5 py-5">
                  <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
                  <Icon name={it.icon} className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{it.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-mute">
              Tudo de acordo com a necessidade de cada pessoa. O CIVIA complementa a bengala, o cão-guia e a sinalização
              oficial e não substitui nenhum deles.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
