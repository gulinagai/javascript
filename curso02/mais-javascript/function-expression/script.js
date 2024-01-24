// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.')
console.log(priceNumber('R$ 99,99'))

// Crie uma IIFE e isole o escopo de qualquer código JS.

const a = 'pão'
console.log(a);
(()=>{
    const a = 'melão'
    console.log(a)
})()
console.log(a)

// Como podemos utilizar
// a função abaixo.
const active = callback => callback()

// o de cima é a mesma coisa q escrever:

// function active(callback){
//     return callback()
// }

active(function(){
    console.log('Teste de active')
})