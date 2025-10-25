function Carro(velocidadeMaxima = 200, delta =5) {
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

        // metodo publico
        this.getvelocidadeAtual = function() {
            return velocidadeAtual
        } 
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log (uno.getvelocidadeAtual())