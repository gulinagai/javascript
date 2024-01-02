const button = {
   get element(){
        return this._elementType
   },
   set element(tipo){
     const elemento = document.createElement(tipo)
     elemento.innerText = 'olá'
     this._elementType = elemento
   },
   metodo(){
      return 'oi'
   }
}
button.element = 'div'

console.log(button.element)

const games = {
   games: [],
   set novoGame(game){
      this.games.push(game)
   }
}

console.log(games)

games.novoGame = 'League of Legends'

console.log(games)

games.novoGame = 'Pokémon Emerald'

console.log(games)

// Juntando Classes com GET + SET
class Button{
   constructor(text, color){
      this.text = text
      this.color = color
   }
   get element(){
      // const buttonElement = document.createElement('button')
      const ElementType = this._elementType || 'button'
      const buttonElementOrAnother = document.createElement(ElementType)
      buttonElementOrAnother.innerText = this.text
      buttonElementOrAnother.style.color = this.color
      return buttonElementOrAnother
   }
   set element(type){
      this._elementType = type
   }
}

const greenButton = new Button('Clique aqui', 'green')


// mudando(setando) o novo valor que será passado para ElementType como um h1, criando um novo h1:
greenButton.element = 'h1'

console.log(greenButton.element)