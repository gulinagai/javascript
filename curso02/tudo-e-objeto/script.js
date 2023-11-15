// nomeie 3 propriedades ou métodos de strings
var nome = 'Gustavo'
nome.length
nome.replace('vo', 'vin')
// nomeie 5 proprieddades ou métodos de elementos do DOM
document.innerHTML = 'olá'
document.querySelector('.corpo')
window.document.getElementsByClassName('.corpo')
var corpo = document.querySelector('.corpo')
corpo.className
corpo.addEventListener('click', function() {
    console.log('Clicou')
})
window.document.getElementsByTagName('p')[0].innerHTML = 'tchau'


// busque na web um objeto (método) capaz de interagir com o clipboard.
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var botao = window.document.querySelector('#botao')
botao.addEventListener('click', copiar)
function copiar() {
var digitar = window.document.querySelector('#digitar')
digitar.select()
digitar.setSelectionRange(0, 99999)

navigator.clipboard.writeText(digitar.value) // copiando texto dentro do campo

alert('Texto copiado!')
}
