// Crie uma função para verificar se um valor é Truthy
function verificar(valor){
    if(valor){
        console.log('É verdadeiro')
        return `${true} ${!!valor} `
    } else {
        console.log('É falso')
        return `${false} ${!!valor} `
    }
}
console.log(verificar('bolacha'))
// Crie uma função matemática que retorne o perímetro de um quadrado
//lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado){
    return lado * 4
}
console.log(quadrado(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parêmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Gustavo', 'Nagai Amorim'))

//Crie uma função que verifica sse um número é par

function épar(numero){
    if(numero % 2 === 0){
        console.log('É par!')
        return `É par msm!`
    } else {
        console.log('É ímpar')
        return `É ímpar msm!`
    }
}
console.log(épar(12))   

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function timePreferido(time){
    return typeof(time)
}
console.log(timePreferido('Palmeiras'))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu  nome completo 
// quando o evento 'scroll' ocorrer.
addEventListener('click', nome1)
function nome1() {
    console.log('Gustavo Nagai')
}
addEventListener('click', function(){
    console.log('Gustavo Nagai')
})


// Corrija o erro abaixo:
var totalPaises = 193
function precisoVisitar(paisesVisitados){
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20))

