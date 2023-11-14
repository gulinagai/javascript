//Verifique se a sua iade é maior do que a de algum parente
//Dependendo do resultado, coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 24
var idadeHanna = 19
if(minhaIdade > idadeHanna) {
    console.log('É maior')
} else if(minhaidade == idadeHanna) {
    console.log('É igual')
} else {
    console.log('É menor')
}

//Qual valor é retornado na seguinte expressão?
var expressão = (5 - 2) && (5 - ' ') && (5 - 2)
console.log(!!expressão)
//retorna false
//Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'
console.log(!!nome)
var idade = 28 
console.log(!!idade)
var possuiDoutorado = false
console.log(!!possuiDoutorado)
var empregoFuturo
console.log(!!empregoFuturo)
var dinheiroNaConta = 0
console.log(!!dinheiroNaConta)

//Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207
var china = 1340
if(brasil > china){
    console.log('Brasil tem mais habitantes do que a China')
} else if (brasil == china) {
    console.log('Brasil e China tem a mesma quantidade de habitantes')
} else if(brasil < china) {
    console.log('Brasil tem menos habitantes do que a China')
}
//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}
//'Falso'
//Oque irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão')
} else {
    console.log('Falso')
}
//'Cão'