const imprimiresultado = function (nota) {
    switch (Math.floor(nota)) {                         //aproximar pra baixo
        case 11: case 10:                               //caso 10
            console.log ("quadro de aura")
        break                                           //pare
        case 9:
            console.log ("quadro de honra")
        break
    default:                                           
            console.log ("opção invalida")
    }

}

imprimiresultado(10)