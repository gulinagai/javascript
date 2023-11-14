//Declare uma variável contendo uma string
var a = 'bolacha'
//Declare uma variavél contendo um número dentro de uma string
var b = 29
//Declare uma variável com a sua idade
let idade = 24
//Declare duas variáveis, uma com seu nome
//e outra com seu sobrenome e some as mesmas
var nome = 'Gustavo'
var sobrenome = 'Nagai'
var nomeCompleto1 = nome + ' ' + sobrenome
//ou por template string
var nomeCompleto2 = `${nome} ${sobrenome}`
//Coloque a seguinte frase em uma variável: It's time
var frase = 'It\'s time'
//Verifique o tipo da variável que contém o seu nome
console.log(typeof nome)
console.log(nomeCompleto1)

console.log(a, b)
console.log(nomeCompleto1, idade, 'anos')
console.log(nomeCompleto2)
