function numerosaleatorio(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

let opcao = -1

 do {
    opcao = numerosaleatorio(-1,5)
    console.log(`ainda nn é igual a -1 (${opcao})`)
} while (opcao != -1)

console.log ("agr sim é igual")


