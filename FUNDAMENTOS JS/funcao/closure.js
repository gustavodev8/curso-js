// Closure é o escopo crido quando uma funcção é declara
// Esse escopo permite a função acessar e manipular variaveis externas á função

const X = 'Global'

function fora() {

    const X = 'Local'

    function dentro() {
        return X
    }

    return dentro
}

const MinhaFunc = fora()
console.log(MinhaFunc())