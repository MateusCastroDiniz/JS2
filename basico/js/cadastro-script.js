document.addEventListener('submit', function(event){

    event.preventDefault();
    event.stopPropagation();

    if(this.className == 'corrompido'){
        return false
    }

    let campo = document.querySelector('input')

    let nome = document.querySelector('input.nome').value
    let cpf = document.querySelector('input.cpf').value
    let email = String(document.querySelector('input.email').value)
    let telefone = document.querySelector('input.telefone').value
    let uf = document.querySelector('input.uf').value
    let cep = document.querySelector('input.cep').value

    let title_resposta = "Confirmação de dados"
    let resposta = "Nome: " + nome + "<br>" + "CPF: " + cpf + "<br>" + "email: " + email + "<br>" + "Telefone: " + telefone + "<br>" + "UF: " + uf + "<br>" + "CEP: " + cep

    document.querySelector('form#cadastro').style.display = 'none'
    document.querySelector('#resposta').style.display = 'block'
    document.querySelector('#titulo').innerHTML = title_resposta;
    document.querySelector('#resultado').innerHTML = resposta;
    

})

function verificaObrigatorios(elemento){

elemento.addEventListener('focusout', function(event){
    event.preventDefault();

    if(this.value != ""){
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')

        }else{
            document.querySelector('p#resultado').value = "Não deixe campos em vazio!"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }

})}

const resetar = (elemento) => {
    elemento.value = elemento.value.replace(/\(|\)|\-|\s|\./gi, "")
    return elemento.value
}

const lookIn = (elemento) => {
    elemento.addEventListener('focus', function(event){
        event.preventDefault();
        resetar(elemento)
    })
}


const formataCPF = (elemento) => {
    let formatCPF = elemento.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function(regex, arg1, arg2, arg3, arg4){
        return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4
    })
    return formatCPF
}


const validaCpf = (elemento) => {
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(resetar(this).match(/(\d{3})(\d{3})(\d{3})(\d{2})/)){
            document.querySelector('input.cpf').value = formataCPF(document.querySelector('input.cpf').value)
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')

        }else{
            document.querySelector('p#resultado').value = "Se lida"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
    })

    lookIn(elemento)
}


const validaCampNum = (elemento) => {
    elemento.addEventListener('focusout', function(event){
    event.preventDefault();

    if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
        document.querySelector('p#resultado').value = ""
        this.classList.remove('erro')
        this.parentNode.classList.remove('corrompido')

    }else{
        document.querySelector('p#resultado').value = "Digite um valor de 0 a 10"
        this.classList.add('erro')
        this.parentNode.classList.add('corrompido')
        this.value = ""
        return false
    }
})}

const validaUf = (elemento) => {
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        if(this.value.match(/\D{2}/)){
            document.querySelector('#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Preencha o campo UF corretamente"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
    })
}


const formataTel = (elemento) => {
    formatCell = elemento.replace(/(\d{2})(\d{5})(\d{4})/, function(regex, arg1, arg2, arg3){
        return '('+ arg1 + ')' + ' ' + arg2 + '-' + arg3
    })
    return formatCell
}


const validaTel = (elemento) => {
    lookIn(elemento)

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(resetar(this).match(/\d{10}/) && resetar(this).length === 11){
            document.querySelector('p#resultado').value = ""
            document.querySelector('input.telefone').value = formataTel(document.querySelector('input.telefone').value)
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Insira um número de telefone válido"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
        
    })
}


const validaEmail = (elemento) => {
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        
        if(this.value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i)){
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Insira um Email válido"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            this.value = ""
            return false
        }
    })
}


const formataCEP = (elemento) => {
    let formatCEP = elemento.replace(/(\d{5})(\d{3})/, function(regex, arg1, arg2){
        return arg1 + '-' + arg2
    })
    return formatCEP
}

const validaCep = (elemento) => {
    lookIn(elemento)

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(resetar(this).match(/\d{8}/)){
            this.value = formataCEP(document.querySelector('input.cep').value)
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Insira um CEP válido"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
    })

    elemento.addEventListener('focus', function(event){
        event.preventDefault();
        
        this.value = this.value.replace(/\-/, "")
    
        
    })
}


for(let campos of document.querySelectorAll('input')){
    if(campos.className.match('obrigatorio')){
    verificaObrigatorios(campos)
    }
    if(campos.className.match('cpf')){
        validaCpf(campos)}
    if(campos.className.match('email')){
        validaEmail(campos)
    }
    if(campos.className.match('telefone')){
        validaTel(campos)
    }
    if(campos.className.match('uf')){
        validaUf(campos)
    }
    if(campos.className.match('cep')){
        validaCep(campos)
        }
    }
