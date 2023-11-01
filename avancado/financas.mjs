import {Movimentacao} from './Movimentacao.mjs'
import {Registro} from './Registro.mjs'

const lanc1 = new Movimentacao(300, 'entrada', 'inter')
const lanc2 = new Movimentacao(-500, 'saida', 'inter')
const lanc3 = new Movimentacao(300, 'entrada', 'inter')

const Movimentacoes = [lanc1, lanc2, lanc3]

const registro = new Registro(31, 'out', 2023)

Movimentacoes.map(elemento => registro.adicionaMov(elemento))

console.log(registro.resumo())

