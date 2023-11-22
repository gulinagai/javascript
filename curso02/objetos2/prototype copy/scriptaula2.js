// const Dom = {
//     seletor: 'li',
//     element()  {
//         return document.querySelector(this.seletor)
//     },
//     ativar(){
//         this.element().classList.add('ativo')
//     }
// }

// Dom.ativar()
// Dom.seletor = 'ul'
// Dom.ativar()

function Dom(seletor) {
    this.element = function(classe)  {
        return document.querySelector(seletor)
    }
    this.ativar = function(classe) {
        this.element().classList.add(classe)
    }
}

const ul = new Dom('ul')
const li = new Dom('li:last-child')
ul.ativar('ativo')
li.ativar('ativo')

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const guli = new Pessoa('Guli', 24)
guli.andar = function(){
    console.log(this.nome + ' andou')
}

console.log(Pessoa.prototype)
console.log(guli.prototype)

Pessoa.prototype.correr = function() {
    return `${this.nome} correu`
}

console.log(guli.correr())

const eu = 'guli'
const eudnv = new String('guli')

function treinar(){
    console.log('treinando')
}

const numeros = [1, 2, 3]


