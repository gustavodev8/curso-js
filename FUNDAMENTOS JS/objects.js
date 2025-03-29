const prod1 = {} // objetos = {}, array = []
prod1.nome = `celular ultra mega` // pode fazer assim
prod1.preco = 4999.90
prod1['Desconto Lojal'] = 90 // como também pode ser feito dessa forma (mas evitar atributos com espaços)

console.log (prod1)


console.log(` `)

const prod2 = { // tambem pode ser feito dessa maneira
    nome: `camisa polo`,
    preco: 79.99,
    prod3: {
        nome: `camisa regata`,
        preco: 89.99,
        prod4: {
            nome: `body`,
            preco: 109.98
        }
    }
}

console.log(prod4)