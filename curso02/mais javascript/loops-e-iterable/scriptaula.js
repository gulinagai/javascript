// exemplos de objetos que possuem o método Symbol.iterator:

const nome = 'Gustavo'
const frutas = ['Banana', 'Maçã', 'Pêra']


fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => {
    for(const item of headers){
        console.log(item)   
    }
        console.log(headers)})

// utilizando for...of, só funciona com objetos iterable(que possuem o método Symbol.iterator)
for(const letra of nome){
    console.log(letra)
}

for(const fruta of frutas){
    console.log(`${fruta} é gostoso`)
}
// spread operator + for...of
const botoes = document.querySelectorAll('button')
console.log(botoes)

for(const botao of botoes){
    botao.style.color = 'red'
    const botaoEstilos = getComputedStyle(botao)
    for(estilo of botaoEstilos){
        console.log(`${estilo}: ${botaoEstilos[estilo]}`)
    }
}

console.log(...botoes)


// utilizando for... in, funciona para qualquer objeto mas só mostra as propriedades que são enumeráveis(enumerable true)

const eu = {
    nome: 'Gustavo',
    idade: 24
}

Object.defineProperties(eu, {
    joga: {
        value: 'lol',
        enumerable: true
    }
})

for(const keyDoObjetoEu in eu){
    console.log(eu[keyDoObjetoEu])
}