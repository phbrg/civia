import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="text-2xl" />
          <p className="mt-4 text-sm text-mute">A cidade se adapta a você.</p>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-mute md:text-right">
          Protótipo acadêmico, sem produto físico validado e sem resultados de eficácia comprovados. Equipe ASTRO, turma
          3ESPS, FIAP Global Solution 2026.2.
        </p>
      </div>
    </footer>
  )
}
