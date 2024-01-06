function createButton(text){
    // em uma Factory Function os métodos colocados dessa forma abaixo ficam no próprio objeto, ou seja, são copiados, e não são do protótipo
    function element(){
        const newButton = document.createElement('button')
        newButton.innerText = text
        return newButton
    }
    // precisa retornar um objeto!
    // aqui embaixo usei Ice Factory (Object.freeze no objeto retornado)
    return Object.freeze({
        text: text,
        element: element
    })
}
// usando Factory Function, não precisa da palavra chave 'new' para criar o novo objeto.



const ComprarButton = createButton('Comprar')
console.log(ComprarButton)

ComprarButton.text = 'mudei'
console.log(ComprarButton)
console.log(ComprarButton.element())

const VenderButton = createButton('Vender')
console.log(VenderButton)

console.log(ComprarButton.element())

console.log(VenderButton.element())
// usando Função Construtora sem usar o 'new' em const:

function Game(nome){
    if(!(this instanceof Game)){
        return new Game(nome)
    }
    this.nome = nome
}

const lol = Game('League of Legends')
console.log(lol)