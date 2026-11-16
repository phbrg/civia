import { Reveal } from './Reveal'

const claims = [
  ['Não substitui nada que você já usa', 'O CIVIA complementa a bengala, o cão-guia e a sinalização oficial.'],
  ['Admite quando não sabe onde você está', 'Sem localização confiável, ele interrompe a orientação exata e oferece outras formas de ajuda. Não inventa direção.'],
  ['Você decide o que é usado', 'Câmera, localização e envio de imagem a contatos só com o seu consentimento, dentro da LGPD (Lei nº 13.709/2018).'],
  ['Offline funciona pouco, e ele conta', 'Sem internet o app roda de forma limitada e diz o que deixou de funcionar. O SOS depende de conexão.'],
  ['Libras ainda não está pronta', 'É uma evolução prevista, que depende de desenvolvimento e validação com a comunidade surda.'],
  ['Os resultados ainda vão ser medidos', 'Só apresentaremos números depois de testes com pessoas cegas, com baixa visão e surdas.'],
]

export function Transparency() {
  return (
    <section id="limites" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Transparência</p>
          <h2 className="h2 mt-4">
            O que o CIVIA <span className="text-gold">diz com todas as letras.</span>
          </h2>
          <p className="mt-6 text-ink/75">
            É um protótipo acadêmico. Preferimos mostrar os limites a prometer o que ninguém testou ainda.
          </p>
          <p className="mt-8 border-l-[3px] border-gold pl-5 text-sm leading-relaxed text-mute">
            Como vamos medir: tarefas concluídas sem auxílio, tempo para entender um aviso e barreiras urbanas
            verificadas.
          </p>
        </Reveal>

        <ol className="m-0 list-none divide-y divide-white/10 border-y border-white/10 p-0 lg:col-span-7">
          {claims.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 py-6">
                <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
