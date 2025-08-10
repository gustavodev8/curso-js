//funcao sem retorno

function teste(a, b,c) {
    console.log(a,b+c)
}

teste('cara', 2, 8)

//funcao com retorno

function soma (a,b = 1) {
    return a + b
}

console.log (soma(2,3))

console.log (soma(7))

