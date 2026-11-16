import { describe, expect, it } from 'vitest'
import { resolveTaps } from './taps'
import { validateEmail } from './validate'

describe('resolveTaps', () => {
  it('2 toques pedem ajuda de confiança', () => expect(resolveTaps(2)).toBe('help'))
  it('3 toques acionam o SOS', () => expect(resolveTaps(3)).toBe('sos'))
  it('0 toques não fazem nada', () => expect(resolveTaps(0)).toBe('none'))
  it('1 toque e mais de 3 nunca disparam SOS', () => {
    expect(resolveTaps(1)).toBe('unknown')
    expect(resolveTaps(4)).toBe('unknown')
    expect(resolveTaps(99)).toBe('unknown')
  })
})

describe('validateEmail', () => {
  it('aceita e-mail válido', () => expect(validateEmail('ana@fiap.com.br')).toBeNull())
  it('ignora espaços nas pontas', () => expect(validateEmail('  ana@fiap.com.br ')).toBeNull())
  it('pede o e-mail quando vazio', () => expect(validateEmail('   ')).toMatch(/informe/i))
  it('rejeita formato inválido', () => {
    for (const bad of ['ana', 'ana@', '@fiap.com', 'ana@fiap', 'a b@c.d'])
      expect(validateEmail(bad)).toMatch(/válido/i)
  })
})
