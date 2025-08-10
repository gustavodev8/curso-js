//armazenando uma funcao em uma variavel

const imprimirsoma = function (a,b) {
    console.log(a + b)
} 

imprimirsoma (2,8)

// armazenando uma funcao arrow em uma variavel

const soma = (a,b) => {
    console.log(a+b)
}

soma (10,8)

// retorno implicito

const subtração = (a,b) => a-b 

console.log (subtração (10,1))