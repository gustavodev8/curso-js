Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimiresultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log ("quadro de honra")
    } else if (nota.entre(7,8.99)) { // senao se
        console.log ("aprovado")
    } else if (nota.entre(1,4)) {
        console.log ("perdedor!")
    } else {
        console.log ("nota invalidada")
    }

    console.log ("fim")
}

imprimiresultado(9)