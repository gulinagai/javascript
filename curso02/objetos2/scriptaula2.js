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


