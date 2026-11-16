import { img } from '../lib/img'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

const team = [
  ['Ana Luiza Santana da Rocha', '561194', 'eq1.jpg'],
  ['Evandro Yuji Kaibara de Oliveira', '559274', 'eq2.jpg'],
  ['Guilherme Rodrigues Leite', '560131', 'eq3.jpg'],
  ['Luís Filipe Crivellaro', '560877', 'eq4.jpg'],
  ['Pedro Henrique Batista Bergamin', '559443', 'eq5.jpg'],
] as const

export function Team() {
  return (
    <section id="equipe" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Quem fez</p>
            <h2 className="h2 mt-4">
              Equipe <span className="text-gold">ASTRO</span>
            </h2>
            <p className="mt-5 text-ink/75">Turma 3ESPS, FIAP. Global Solution 2026.2, desafio CitizenTech.</p>
          </div>
          <img
            src={img('logo.png')}
            alt="Logo da equipe ASTRO"
            loading="lazy"
            className="h-12 w-auto mix-blend-lighten"
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {team.map(([name, rm, src], i) => (
            <Reveal key={rm} delay={i * 0.07} className={i % 2 ? 'lg:translate-y-10' : ''}>
              <li>
                <div className="para bg-gold p-[2px]">
                  <div className="para overflow-hidden bg-panel">
                    <img
                      src={img(src)}
                      alt={`Retrato de ${name}`}
                      width={561}
                      height={701}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold leading-snug">{name}</p>
                <p className="mt-1 text-xs font-semibold tracking-wider text-gold">RM {rm}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-24">
          <a
            href="https://astro-group.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-gold underline underline-offset-4 hover:text-gold-hi"
          >
            Conheça os outros projetos da ASTRO
            <Icon name="external" className="h-4 w-4" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
