console.log ('isso é', b)
var b = 2
console.log ('aqui é', c)

function teste() { // aqui é escopo em bloco, oq há aqui dentro so existe aqui dentro, se eu decclarar fora da funcao o codigo da erro
    console.log (a)
    var a = 2
    console.log (a)
}
teste()

let c = 2 // hoisting nao acontece com LET
