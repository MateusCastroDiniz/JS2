const nomeDef = 'Mateus'

export class Registro{
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
