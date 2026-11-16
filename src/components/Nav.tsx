import { Logo } from './Logo'

const links = [
  ['Problema', '#problema'],
  ['Como funciona', '#como'],
  ['Óculos', '#oculos'],
  ['App', '#app'],
  ['Equipe', '#equipe'],
] as const

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <nav aria-label="Principal" className="wrap flex h-16 items-center justify-between">
        <a href="#topo" aria-label="CIVIA, voltar ao início" className="text-[1.05rem] text-ink">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 text-sm text-mute lg:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a className="transition-colors hover:text-ink" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#espera"
          className="rounded-full border border-gold/60 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-bg"
        >
          Lista de espera
        </a>
      </nav>
    </header>
  )
}
