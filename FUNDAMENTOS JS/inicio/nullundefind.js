const a = {name: `opa amigos`}

console.log(a)

const b = a  

b.name = `epa`

console.log(a)  // automaticamente o objeto A muda de valor, consequentemente se eu mudar B pq os dois apontam pro mesmo lugar da memoria, isso se chama atribuição por referencia *ISSO ACONTECE COM OBJETO*

let c = 3
let d = c // aqui não acontece pois não é objeto, e sim um dado primitivo

d++
console.log (d)


let valor //n iniciado
console.log(valor)

valor = null // ausencia de valor
console.log (valor)

// console.log (valor.toString()) !erro

const produto = {}
console.log (produto.preco)

produto.preco = 3.50 // adicionando atributo 
console.log(produto)

produto.preco = null
// delete produto.preco forma correta de tirar o atributo

console.log(!!produto) // diz que o valor é verdadeiro pois ainda esta declarado
console.log(!!produto.preco) // esse aqui entretanto está sem atribuiçã
console.log (produto)

produto.preco = 98

console.log (produto)

