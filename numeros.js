const peso1 = 1.0
const peso2 = Number('2.1') // transforma em number

console.log (peso1, peso2)
console.log (Number.isInteger(peso1)) // verificar se o numero e inteiro 
console.log (Number.isInteger(peso2))

const avaliacao = (6.142)
const avaliacao1 = (2.143)

const total = avaliacao1 * peso1 + avaliacao * peso2
const media = total/2

console.log (media.toFixed(2))
console.log (Number.isInteger(media))
console.log (media.toString()) // transforma number em string
console.log (media.toString(2)) // transforma o numero em binario
console.log (typeof media)
