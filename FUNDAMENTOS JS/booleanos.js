let IsAtivo = false
console.log (IsAtivo)

IsAtivo = true
console.log(IsAtivo)

IsAtivo = 1
console.log(!!IsAtivo) // SE COLOCAR EXCLAMAÇÃO (!!) DUAS VEZES = FALA O VALOR ORIGINAL, SE COLOCAR SOMENTE UMA VEZ = FALA O VALOR ANTES DO ATUAL    

console.log(!!3)

console.log (!!-1)  
console.log(!!' texto ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)


console.log (`os valores falsos`)
console.log(!!0)
console.log(!!``)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(IsAtivo = false))

console.log(`pra finalizar...`)
console.log(!!('' || null || 0 || ' ')) // essas || funcionão como se fosse um 'ou', se apenas um valor for verdadeiro, ele vai devolver e amostrar como verdadeiro
console.log('' || null || 0 || ' opa ' || 345)

let nome = 'gustavo'
console.log(nome || 'desconhecido')
console.log('' || nome)
