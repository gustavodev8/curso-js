var numero = 1

{
    let numero = 2 // LET TEM UM ESCOPO APENAS DELE! OU SEJA, SO É VISIVEL APENAS AQUI DENTRO, ELE É ESCOPO DE BLOCO
    console.log(`DENTRO = ${numero}`)
}

console.log(`FORA = ${numero}`)