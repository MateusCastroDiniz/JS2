class Animal {
    
    constructor(especie){
        this.especie = especie
        if(especie[especie.length-1] == 'a'){
        console.log('Veja! Uma ' + this.especie + '!!!')
    }else{
        console.log('Veja! Um '+ this.especie +'!!!')}
    }

    som(som){
        console.log('O '+ this.especie + ' disse: "' + som + '"!!!')
    }
    come(comida){
        console.log(this.especie + ' comeu ' + comida)
    }
    dorme(tempo){
        console.log(this.especie + ' dormiu por ' + tempo + 'h')
    }

}

const galinha = new Animal('pato')

galinha.som('có có')
galinha.come('milho')
galinha.dorme(4)