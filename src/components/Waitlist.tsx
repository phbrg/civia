import { AnimatePresence, motion } from 'motion/react'
import { useState, type FormEvent } from 'react'
import { validateEmail } from '../lib/validate'
import { Icon } from './Icons'
import { Reveal } from './Reveal'

const prefs = ['Voz', 'Vibração', 'Legenda'] as const

export function Waitlist() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pref, setPref] = useState<(typeof prefs)[number]>('Voz')
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const err = validateEmail(email)
    setError(err)
    if (!err) setDone(true) // simulado: nada sai do navegador
  }

  const field =
    'mt-2 w-full rounded-xl border border-white/20 bg-bg px-4 py-3.5 text-base text-ink placeholder:text-mute/70 focus:border-gold focus:outline-none'

  return (
    <section id="espera" className="relative scroll-mt-16 py-24 md:py-36">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Lista de espera</p>
          <h2 className="h2 mt-4">
            Quer saber quando o CIVIA <span className="text-gold">sair do papel?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
            Deixe seu e-mail e diga como prefere receber os avisos. Este formulário faz parte do protótipo: nada é
            enviado e nada fica guardado.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-gold/30 bg-panel p-7 md:p-10">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="py-8 text-center"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-bg">
                    <Icon name="check" className="h-7 w-7" />
                  </span>
                  <p className="mt-5 font-display text-2xl font-semibold">
                    {name.trim() ? `Anotado, ${name.trim().split(' ')[0]}.` : 'Anotado.'}
                  </p>
                  <p className="mt-2 text-sm text-mute">
                    Preferência: {pref.toLowerCase()}. De verdade mesmo, nada foi guardado: é só o protótipo.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }}>
                  <label className="block text-sm font-semibold">
                    Nome <span className="font-normal text-mute">(opcional)</span>
                    <input
                      className={field}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="given-name"
                    />
                  </label>
                  <label className="mt-5 block text-sm font-semibold">
                    E-mail
                    <input
                      className={field}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? 'email-erro' : undefined}
                      placeholder="voce@exemplo.com"
                    />
                  </label>
                  {error && (
                    <p id="email-erro" role="alert" className="mt-2 text-sm font-semibold text-red-400">
                      {error}
                    </p>
                  )}

                  <fieldset className="mt-6">
                    <legend className="text-sm font-semibold">Como prefere receber os avisos?</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {prefs.map((p) => (
                        <label
                          key={p}
                          className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-hi ${pref === p ? 'border-gold bg-gold text-bg' : 'border-white/20 text-ink/80 hover:border-gold'}`}
                        >
                          <input
                            type="radio"
                            name="pref"
                            className="sr-only"
                            checked={pref === p}
                            onChange={() => setPref(p)}
                          />
                          {p}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="mt-8 w-full rounded-full bg-gold px-7 py-4 font-semibold text-bg transition-colors hover:bg-gold-hi"
                  >
                    Entrar na lista de espera
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
