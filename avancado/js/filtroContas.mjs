import {ContaBancaria} from './contas.mjs';

const conta1 = new ContaBancaria("12345", "João", "2023-01-15", 1000.00);
const conta2 = new ContaBancaria("67890", "Maria", "2023-02-20", 2500.50);
const conta3 = new ContaBancaria("54321", "Pedro", "2023-03-10", 500.25);


const contasBancarias = [conta1, conta2, conta3];


let ContasFiltradas = []

const filtroContas = contasBancarias.filter((conta) => {
    conta.saldo == 1000 ? ContasFiltradas.push(conta) : false
})

ContasFiltradas.map(conta => {
    console.log( '--------------------------')
    console.log('Proprietario: ' + conta.nome)
    console.log('Número da conta: ' + conta.id)
    console.log('Data de ingresso: ' + conta.dataCadastro)
    console.log('Salto atual: ' + conta.saldo)
})
