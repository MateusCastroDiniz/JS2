function CalcMedia(notas){
    let soma = 0;

    notas.forEach(nota => {
        soma+= parseFloat(nota)
        return soma
    })

    media = soma / notas.length

    return media
}

function verificarNota(notas){
    let nome = document.querySelector('input#nome-aluno').value

    let media = parseFloat(CalcMedia(notas)).toFixed(1);

    let condicao = media >=7 ? "aprovado(a)" : "reprovado(a)";
    let resposta = ""
    if(condicao == "aprovado(a)"){
    resposta = ("O aluno(a) " + nome +" foi " +condicao+ " com média: " +media);

    }else{
        resposta = ("O aluno(a) " + nome +" foi " +condicao+ " por obter média inferior a 7."+ "</br>" +" Média: " +media);

    }

    document.getElementById('resposta').style.display = 'block'
    document.getElementById('resultado').innerHTML = resposta;

}

document.querySelector('#valores').addEventListener('submit', function(event){
    event.preventDefault()
    
    let dados = new FormData(document.querySelector('#valores'))
    let notas = []
    
    for (let key of dados.keys()){
    
        let valor = dados.get(key).match(/[0-9]/) ? Number(dados.get(key)) : 0;
    
        if(!isNaN(valor) && valor >=0 && valor<= 10){
            notas.push(valor)
        }
    }

    verificarNota(notas)
})