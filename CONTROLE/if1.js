function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("muito bem, foi aprovado")
    }
}
soBoaNoticia(8)

function seforvdd(valor) {
    if (valor) {
        console.log("esse valor é verdadeiro")
    }
}

seforvdd()
seforvdd(null)
seforvdd(undefined)
seforvdd(NaN)
seforvdd(9) // ja é verdadeiro
seforvdd('')
seforvdd(0)
seforvdd(-1) // ja é verdadeira 
seforvdd(" ") // ja é verdadeiro
seforvdd([]) // ja é verdadeiro
seforvdd([2,4]) // ja é verdadeiro
seforvdd({}) // ja é verdadeiro