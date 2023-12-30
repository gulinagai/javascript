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
        // adicionando método na própria Classe, que será 'copiado' para o próprio objeto
        this.pintar = function(){
             return `botão ${this.cor} pintado!`
        } 
    }
    // adicionando método no protótipo do construtor, onde o objeto criado terá acesso por herança, mas não será um método próprio
    fundo() {
        return `botão ${this.cor} de fundo ${this.background}!` 
    }
    element(){
        const buttonElement = document.createElement('button')
        buttonElement.innerText = this.text
        buttonElement.style.background = this.background
        buttonElement.style.color = this.cor
        return buttonElement
    }
    appendTo(target){
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
    }
    // adicionando método também diretamente no construtor, porém este só pode ser acessado diretamente pelo construtor, não é copiado para o objeto. Deve ser acessado como BotaoClasse.metodo()
    
    static metodo(){
        return `Método acionado!`
    }
    }
    

const botaoVerde = new BotaoClasse('Comprar', 'white', 'green')
// console.log(botaoVerde)

console.log(botaoVerde.pintar())
console.log(botaoVerde.fundo())

console.log(botaoVerde.element())

console.log(botaoVerde.appendTo('body'))

console.log(botaoVerde)
