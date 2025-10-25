class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()

// outro metodo parecido

const criarPessoa = nome => {
    return {
        falar: () => console.log (`meu nomezinho é ${nome}`)
    }
}

const p2 = criarPessoa(`gustavo`)
p2.falar()