function numerosaleatorio(min,max) {
    const valor = Math.random() * (max - min) + min
} 

let opcao = 0

while (opcao != -1) {
    opcao = numerosaleatorio(-1,5)
    console.log(`ainda nn é diferente de -1`)
}

console.log ("agr sim apareceu um diferente")
