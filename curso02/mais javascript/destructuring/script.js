// Extraia a backgroundColor, color e margin de btn

const btn = document.querySelector('button')
const btnStyles = getComputedStyle(btn)

const {backgroundColor, color, margin} = btnStyles

console.log(btnStyles)

console.log(color, backgroundColor, margin)

// Inverta os valores das variáveis abaixo
let cursoAtivo = 'JavaScript'
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

console.log(cursoAtivo, cursoInativo)


// Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const {cor: bobCor} = cachorro

console.log(bobCor)