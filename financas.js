class movimentacao{
    constructor(valor, tipo, banco){
        this.valor = valor
        this.tipo = tipo
        this.banco = banco
        this.nome = nomeDef
    }
}

const nomeDef = 'Mateus'

class registro{
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.movimentacoes = []
    }

    adicionaMov(... movimentacoes){
        movimentacoes.forEach(lancamento => this.movimentacoes.push(lancamento))
    }

    resumo(){
        const exp = new RegExp('saida', 'i')
        let valorExib = 0
        let tipo = ''
        let nome = nomeDef
        this.movimentacoes.forEach(lancamento => {
            if(lancamento.tipo){
            valorExib += lancamento.valor
            tipo += lancamento.tipo + '|'
        }
        })
        return nome + '|' + valorExib
    }
}


const lanc1 = new movimentacao(5000, 'entrada', 'inter')
const lanc2 = new movimentacao(-100, 'saida', 'inter')
const lanc3 = new movimentacao(300, 'entrada', 'inter')

let Movimentacoes = [lanc1, lanc2, lanc3]



registro = new registro(31, 'out', 2023)

Movimentacoes.map(elemento => registro.adicionaMov(elemento))

// registro.adicionaMov(lanc1, lanc2, lanc3)

console.log(registro.resumo())

