// FC = Função Construtora
// Criando botão usando função construtora
function BotaoFC (texto, background, cor){
    this.text = texto
    this.background = background
    this.cor = cor
    // adicionando método na função construtora
    this.pintar = function (){
        return `botão ${this.cor} pintado!`
    }
}
// adicionando método no protótipo da função construtora(onde o objeto criado terá acesso)
BotaoFC.prototype.fundo = function(){
    return `botão ${this.cor} de fundo ${this.background}!`
}


const botaoAzul = new BotaoFC('Comprar', 'white', 'blue')

console.log(botaoAzul.pintar())
console.log(botaoAzul.fundo())

// Criando botão usando Classe (Função construtora com outra sintaxe)

class BotaoClasse {
    constructor (texto, background, cor){
        this.text = texto
        this.background = background
        this.cor = cor
        // adicionando método na própria Classe
        this.pintar = function(){
             return `botão ${this.cor} pintado!`
        } 
    }
    fundo() {
        return `botão ${this.cor} de fundo ${this.background}!` 
    }
    }
    

const botaoVerde = new BotaoClasse('Comprar', 'white', 'green')
// console.log(botaoVerde)

console.log(botaoVerde.pintar())
console.log(botaoVerde.fundo())
