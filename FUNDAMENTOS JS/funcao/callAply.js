function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco *  (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'pc gamer',
    preco: 500,
    desc: 0.5,
    getPreco
}
console.log (produto)
console.log(produto.getPreco())

// metodo CALL
const carro = {nome: 'azera', preco: 60000, desc: 0.4}
console.log(getPreco.call(carro))

// metodo APLY
console.log(getPreco.apply(carro))

// teste

console.log(getPreco.call(carro, 0.18))