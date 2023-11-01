// /*    *** Interando um array de notas com map ****  */

var alunos = {
    'Mateus': [10,10,10,10],
    'Lucas': [7,7,7,8],
    'Diego': [9,8,9,7]
}

// alunos.map((aluno) => {
//     let notaTotal = 0
//     aluno.map((nota) =>{
//         notaTotal += nota
//     })

//     let media = notaTotal/aluno.length

//     let resultado = media >= 7 ? 'aprovado' : 'reprovado'

//     console.log("O " +nome+ " foi " +resultado+ " por atingir média " +media+ " nas disciplinas.");
// })

console.log('Notas:')

Object.keys(alunos).forEach(key => {
    let media = 0
    let soma = 0
    alunos[key].map(nota => {
        soma += nota
        media = soma/alunos[key].length
        return media
    })

    let condic = media >= 7 ? 'Aprovado' : 'Reprovado'

    console.log(key+ " " + alunos[key] + ' (' + condic + ')')
})


// const CalcMedia = (notas) => {
//     let soma = 0;

//     notas.map(nota => {soma += nota})

//     media = soma / notas.length
//     return media
// }

// const verificar = (nome , notas) =>{

//     let media = CalcMedia(notas);

//     let condicao = media >= 7 ? "aprovado" : "reprovado"

//     return console.log("O (A) aluno(a) " + nome+ " foi " +condicao+ " com media final: " +media)
// }

// verificar("Mateus Diniz", [8, 8, 8]);

