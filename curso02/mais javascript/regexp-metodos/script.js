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

// Métodos de string passando regexp:

// MÉTODO 'string'.match(regexp)
// A presença da flag g quando passa o .match() muda o que é retornado.

const fraseString = 'JavaScript, TypeScript e CoffeScript'

// com flag g:
const regexpComG = /\w{2,}/g

console.log(fraseString.match(regexpComG))

// sem flag g:
const regexpSemG = /\w{2,}/

console.log(fraseString.match(regexpSemG)) // retorna uma array parecida com a array retornada de regexp.exec('string')

// se não der match nenhum, é retornado null.

// MÉTODO 'string'.split(regexp)

const fraseString2 = 'JavaScript, TypeScript, CoffeScript'

const regexpSplit = /Script,? ?/g

console.log(fraseString2.split(regexpSplit))

// MÉTODO 'string'.replace(regexp, 'oque vai substituir')

// exemplo sem função de callback no argumento:

const tags = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
`
// sem regexp (só muda 1, o primeiro ul)
console.log(tags.replace('ul', 'div'))

// com regexp:
console.log(tags.replace(/(?<=<\/?)\w+/g, 'div'))


// exemplo com função de callback no argumento:

const regexpExemploCallback = /(\w+)(@[\w]+)/g

const emails = `joao@homail.com.br
    marta@ggmail.com.br
    bruna@oulook.com.br
`
// passar uma função como segundo argumento de replace(), eu posso passar ...args (ou qualquer outro nome) e manipular esses argumentos em forma de array.

// aparecerá uma array para CADA seleção completa de regexp!

// Na posição 0 da array terá a seleção completa da regexp;
// Na posição 1 terá o primeiro grupo de captura;
// nas da frente terão os demais grupos de captura;
// após isso, terá o index
// e por último terá a string completa.

const resultado = emails.replace(regexpExemploCallback, function(...args){
    console.log(args)
    if(args[2] === '@homail'){
        return `${args[1]}@hotmail`
    } else if(args[2] === '@ggmail'){
        return `${args[1]}@gmail`
    } else if(args[2] === '@oulook'){
        return `${args[1]}@outlook`
    }
})

console.log(resultado)

// Captura e Grupos de captura:

const emails2 = `
    empresa@email.com
    contato@email.com
    suporte@email.com
`
console.log(emails2.replace(/(\w+@)\w+(.\w+)/g, '$1gmail$2'))
