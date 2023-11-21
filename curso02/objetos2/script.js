// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar(){
//         console.log(this.nome + ' andou')
//     }
// }

function Pessoa(nome,idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log(this.nome + ' andou')
    }
}
const gustavo = new Pessoa('Gustavo', 24)

// Crie 3 pessoas, João - 20 anos
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elementos, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Manipulação(lista){
    this.elementos = document.querySelectorAll(lista)
    this.addClass = function(classe){
        this.elementos.forEach((elemento) =>{
            elemento.classList.add(classe)
        })
    }
    this.removeClass = function(classe){
        this.elementos.forEach((elemento)=>{
            elemento.classList.remove(classe)
        })
    }

}

const li = new Manipulação('li')
li.addClass('ativo')
const ul = new Manipulação('ul')
ul.addClass('ativo')
ul.removeClass('ativo')