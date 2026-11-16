export type TapOutcome = 'none' | 'help' | 'sos' | 'unknown'

/** Doc §3.5: 2 toques na haste pedem ajuda a um contato autorizado, 3 acionam o SOS. */
export function resolveTaps(count: number): TapOutcome {
  if (count === 0) return 'none'
  if (count === 2) return 'help'
  if (count === 3) return 'sos'
  return 'unknown'
}
