const pessoa = 
{
    nome: 'Gustavo',
    idade: 24,
    namorada: 'Hanna'
}

const {nome, idade, namorada, idadeNamorada = 19} = pessoa

console.log(idadeNamorada)

const anime = 
{
    ação: {
        espada: ['SAO', 'Nanatsu no Taizai','Bleach'],
        caderno: 'death note'
    },
    triste: ['Shingeki no Kyojin', 'Shigatsu wa Kimi no uso']
}

const {ação: {espada, caderno}} = anime

console.log(caderno)

// ou mudar a referência do objeto que está sendo atribuido, mudar ''anime'' para anime.ação por exemplo:

// const {espada, caderno} = anime.ação

// console.log(caderno)

// também posso mudar o nome da propriedade:

const game = {
    pc: 'LoL',
    ps3: 'Infamous 2',
    gameboy: 'Pokémon Emerald'
}

const {pc: computador, ps3, gameboy} = game

console.log(computador)

console.log(game) // não muda o objeto

// destructuring de array:

const frutas = ['Banana', 'Maçã', 'Pêra']

// nesse caso, coloca todos os valores em uma variável
const [primeiraFruta, segundaFruta, terceiraFruta] = frutas

console.log(segundaFruta)

// ou também, posso criar várias variáveis de uma vez, usando destructuring de array:

const [carboidrato, outroCarboidrato, proteina, micronutrientes] = ['Arroz', 'Feijão', 'Carne', 'Salada']

// criou uma variável para cada valor!

console.log(`Minha refeição preferida é ${carboidrato} com ${outroCarboidrato}, um pedaço de ${proteina} e um pouco de ${micronutrientes}`)

// também é possível desestruturar argumentos que são passados em funções, e que são objetos!

//exemplo, ao invés de:

// function handleKeyup(event){
//     console.log(event.key)
// }

function handleKeyup({key}){
    console.log(key)
}

document.addEventListener('keyup', handleKeyup)
