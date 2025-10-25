// factory é uma função que retorna um objeto

//funcção simples

function CriarPessoas() {

    return {
    nome: 'gustavo',
    idade: 55
}
}

console.log (CriarPessoas())

//funcção complexa

function CriarPessoas2(nm, id) {

    return {
    nome: nm,
    idade: id
}
}

console.log (CriarPessoas2('gustavo', 87))
console.log (CriarPessoas2('joyce', 77))