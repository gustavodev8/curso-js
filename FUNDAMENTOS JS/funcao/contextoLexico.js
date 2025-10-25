const VALOR = 'global'

function Func() {
    console.log(VALOR)
} 

function EXEC() {
    const VALOR = 'Local'
    Func()
}

EXEC()

//contexto lexico de javascrpit tem noção da onde foi denominada
//por isso ela nn troca mesmo q esteja num escopo local