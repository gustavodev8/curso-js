var numero = 1

{
   var numero = 2 // VAR NÃO TEM ESCOPO DE FUNCAO POR CONTA DISSO ELE IGNORA E SOBREPÕE O UTIMO VALOR, ISSO SE CHAMA ESCOPO DE GLOBAL
   console.log(`dentro = ${numero}`)
}

console.log (`fora = ${numero}`)