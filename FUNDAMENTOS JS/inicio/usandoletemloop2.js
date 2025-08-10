fu = []
for (let i = 0; i < 10; i++) {
    fu.push (function() {
        return console.log (i)
    })
    console.log(`RESULTADO = ${i}`)
}

fu[2]()