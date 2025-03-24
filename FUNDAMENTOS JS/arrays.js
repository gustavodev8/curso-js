const valores = [7.7,8.8,9.9,10.10, `gustavo`] // so pode usar com COXEITES

console.log(valores[1], valores[2])
console.log(valores[3], valores[4])
console.log (valores.length) // me diz quantos espaços existem em um array (vetor)

valores.push(`aqui contem valores`,false, true) // adiciona valores para a array
valores[10] = `dixaviu` // outra forma eficaz de adicionar algo nas arrays
console.log(valores)

console.log (' ')

delete valores[2] // forma mais eficaz de apagar algum valor da array 

console.log (valores)

console.log(typeof valores)