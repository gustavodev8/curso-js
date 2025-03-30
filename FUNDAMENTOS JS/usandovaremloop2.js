const fu = []

for (var i = 0; i < 10; i++) {
    fu.push(function () {
        return console.log (i)
    })  
}

fu[2]()