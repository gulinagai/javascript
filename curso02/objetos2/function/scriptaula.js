// const funcao = function areaquadrado(){
//     console.log('oi')
// }

// const oi = 'oi'


// const newst = new String('oi')

// const newnumb = new Number(22)

// const newbool = new Boolean(true)

// const newfunc = new Function(function area(){
//     return 2 * 2
// })

// const newarray = new Array()

// const newobj = new Object()

// const eu = {
//     nome: 'Gustavo',
//     sobrenome: 'Nagai',
//     idade: 24
// }

// const amor = {
//     nome: 'Hanna',
//     sobrenome: 'Hirotuca',
//     idade: 19
// }

// function retornareu(){
//     const msg = `Me chamo ${this.nome} ${this.sobrenome}, e tenho ${this.idade} anos.`
//     console.log(msg)
//     return msg
// }

// console.log(retornareu.call(eu))

// const role = [
//     'salmão',
//     21,
//     'dachô'
// ]

// const role2 = [
//     'batata frita',
//     19,
//     'minha casa'
// ]

// role.forEach.call(role2, function(item, index, array) {
//     console.log(item)
// })

function Dom(seletor){
    this.elemento = document.querySelector(seletor)
}

Dom.prototype.adicionarclasse = function(classe){
    this.elemento.classList.add(classe)
}

const objdom = new Dom('ul')
const objdom2 = new Dom('li')
// esse aqui debaixo será o novo this no método criado para o Dom.prototype
const li = {
    elemento: document.querySelector('li')
}
// objdom.adicionarclasse.call(li, 'ativo')
// outra forma:
Dom.prototype.adicionarclasse.call(li, 'ativo')

Array.prototype.mostrarthis = function(){
    console.log(this)
}

const comida = [
    'temaki',
    'macarrão com salsicha',
    'natô'
]

console.log(Array.prototype.pop.call(comida))

Array.prototype.mostrarthis.call(comida)
// console.log(comida)
comida.mostrarthis()

const lis = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(lis, (item)=>{
    return item.classList.contains('ativo')
})

console.log(filtro)

numeros = [2, 23, 42, 24, 524, 1236, 42, 5]
const maiornumero = Math.max.apply(null, numeros)
console.log(maiornumero)

function Personagem(nome, genero, cabelo, arma){
    this.nome = nome
    this.genero = genero
    this.cabelo = cabelo
    this.arma = arma 
}
const kat = new Personagem('Katarina', 'Feminino', 'Ruiva', 'Adaga')
console.log(kat)

const vayne = {
    nome: 'Vayne',
    genero: 'Feminino',
    cabelo: 'Preto',
    arma: 'Besta'
}

Personagem.prototype.frase = function(){
    console.log(`A ${this.nome} usa uma ${this.arma}`)
}
kat.frase()
kat.frase.call(vayne)
const a = kat.frase.bind(vayne)
a()

function calcularimc(peso, altura){
    return peso / (altura * altura)
}

const resimc = calcularimc(80, 1.8)
console.log(resimc)

const resimc2 = calcularimc.bind(null, 80)
console.log(resimc2(1.8))