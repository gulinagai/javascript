const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const precos = [
    49,
    99,
    69,
    89
]

const dados = [new String('oi'), ['Carro', 'Portas', {cor: 'Azul', preco: 2008}], function andar(nome){ console.log(nome)}]

const newstring = new String('oi')

const stringarray = ['o', 'i']


function Seila(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

const gu = new Seila('gustavo', 'nagai', 24)

const novoarray = new Array('pão', 'mortadela', 'carne')


const novoobj = new Object({ chave1: 'aham', chave2: 'vdd', chave3: 'isso ai'})

const carros = ['Mazda', 'Viper', 'Paganni']
console.log(carros.unshift('Supra'))

console.log(carros)

console.log(carros.push('Corvette', 'Audi'))

console.log(carros)

console.log(carros.shift())

console.log(carros)

console.log(carros.pop())

console.log(carros)

console.log(carros.reverse())

console.log(carros)