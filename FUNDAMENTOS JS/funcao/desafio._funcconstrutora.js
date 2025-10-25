function CriarPessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(this.nome)
    }
}

const p1 = new CriarPessoa(`gustavin`)

p1.falar()