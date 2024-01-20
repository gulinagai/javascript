// Formas de declarar uma regexp:
// 1. Direto:
const regexpDireto = /\w+/g
// 2. no Construtor com string no primeiro argumento:
const regexpObj1 = new RegExp('\\w+', 'g')
// 3. no Construtor com regexp no primeiro argumento:
const regexpObj2 = new RegExp(/\w+/, 'g')

console.log('Eu amo a minha vo'.replace(regexpDireto, 'X'))

console.log('Eu amo a minha vo'.replace(regexpObj1, 'X'))

console.log('Eu amo a minha vo'.replace(regexpObj2, 'X'))

const frase = 'Eu amo amar minha vo'
const frase2 = 'JavaScript, TypeScript e CoffeScript'
// Propriedades:

console.log(regexpDireto.flags)
console.log(regexpDireto.global)
console.log(regexpDireto.ignoreCase)
console.log(regexpDireto.multiline)
console.log(regexpDireto.source)

// Métodos:
const regexExemplo = /am/g
const regexExemplo2 = /\w{2,}/gi
// .test()
    // console.log(regexExemplo.lastIndex)
    // console.log(regexExemplo.test(frase)) // true
    // console.log(regexExemplo.lastIndex)
    // console.log(regexExemplo.test(frase)) // true
    // console.log(regexExemplo.lastIndex)
    // console.log(regexExemplo.test(frase)) // false
    // console.log(regexExemplo.lastIndex)
    // console.log(regexExemplo.test(frase)) // true (reiniciou)
    // console.log(regexExemplo.lastIndex)

// loop de .test()'s
// let i = 0
//     while(regexExemplo.test(frase)){
//         console.log(++i, regexExemplo.lastIndex)
//     }

// .exec()
    // console.log(regexExemplo2.exec(frase2))
    // console.log(regexExemplo2.lastIndex)
    // console.log(regexExemplo2.exec(frase2))
    // console.log(regexExemplo2.lastIndex)
    // console.log(regexExemplo2.exec(frase2))
    // console.log(regexExemplo2.lastIndex)
    // console.log(regexExemplo2.exec(frase2))
    // console.log(regexExemplo2.lastIndex)
    // console.log(regexExemplo2.exec(frase2)) // reiniciou

// loop de .exec()'s

let regexpResultado 
    while((regexpResultado = regexExemplo2.exec(frase2)) !== null){
        console.log(regexpResultado[0])
    }