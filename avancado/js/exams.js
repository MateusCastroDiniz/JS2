import {months, getMonths} from "./meses.mjs";

const diasFiltro = months.filter((months) => {
    return months.dias <= 31
})

// console.log(diasFiltro)

let ToPrint = ''

diasFiltro.map(mes => {
    ToPrint += mes.mes + ' '
})

let sumDays = diasFiltro.reduce((prev, next) => {
    return {dias: prev.dias + next.dias}
})


document.getElementById('meses').innerHTML = ToPrint + '<br><br> Soma dos dias filtrados: ' + sumDays.dias + ' dias'