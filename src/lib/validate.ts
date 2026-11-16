/** Devolve a mensagem de erro, ou null quando o e-mail serve. */
export function validateEmail(raw: string): string | null {
  const email = raw.trim()
  if (!email) return 'Informe seu e-mail.'
  // shortcut: checagem de formato simples, suficiente para um formulário simulado
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? null : 'Digite um e-mail válido.'
}
