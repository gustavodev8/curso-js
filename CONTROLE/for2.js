const notas = [8.2,8,2.6,4.1,9.2,1.8]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'gustavo',
    idade: 27,
    peso: '80 kg',
    estado: 'infeliz'
}

for (let i in pessoa) {
    console.log (`${i} = ${pessoa[i]}`)
}