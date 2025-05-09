function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){ // enquanto for verdadeira faça

opcao = getInteiroAleatorioEntre(-1,10)
console.log(`opções escolhidas foram ${opcao}`)
}
