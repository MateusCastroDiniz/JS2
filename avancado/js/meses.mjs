export let months = [
   {mes: 'jan',
    dias: 31,
    cor: 'branco'
},
    {mes: 'feb',
    dias: 28,
    cor: 'laranja'
},
    {mes: 'mar',
    dias: 31,
    cor: 'azul'
},
    {mes: 'apr',
    dias: 30,
    cor: 'azul'
},
    {mes: 'may',
    dias: 31,
    cor: 'amarelo'
},
    {mes: 'jun',
    dias: 30,
    cor: 'vermelho'
},
    {mes: 'jul',
    dias: 31,
    cor: 'amarelo'
},
    {mes: 'aug',
    dias: 31,
    cor: 'laranja'
},
    {mes: 'sep',
    dias: 30,
    cor: 'amarelo'
},
    {mes: 'oct',
    dias: 31,
    cor: 'rosa'
},
    {mes: 'nov',
    dias: 30,
    cor: 'azul'
},
    {mes: 'dec',
    dias: 31,
    cor: 'vermalho'
}
]

export function getMonths(){
    // return months.map(mes =>{
    //     return mes['cor'].match(/amarelo/) ? mes['mes'] : ' '
    // }) 


    const dias31 = months.filter((months) => {
        return months.dias === 31
    })
    return dias31
}