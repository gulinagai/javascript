// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomecompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

const eu = new Pessoa('Gustavo', 'Nagai Amorim', 24)

console.log(eu.nomecompleto())

// Liste os métodos acessados por dados criados com NodeList,
// HTMLCollection, Document

const exemploNodeList = document.querySelectorAll('li')
const exemploHTMLCollection = document.getElementsByTagName('li')
console.log(exemploNodeList.constructor.name)
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(exemploHTMLCollection.constructor.name)
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li')
li.click = function () {
    return false
}
const arrayli = [
    li,
    li.click,
    li.innerText,
    li.value,
    li.hidden,
    li.offsetLeft,
    li.click()
]
arrayli.forEach((item) => {
    console.log(item.constructor.name)
})


// Qual o construtor do dado abaixo:
li.hidden.constructor.name

