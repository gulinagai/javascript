const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']
// Remova o primeiro valor de comidas e coloque em uma variável

let comidaremovida = comidas.shift()
console.log(comidaremovida)
console.log(comidas)

// Remova o último valor de comidas e coloque em uma variável

comidaremovida = comidas.pop()
console.log(comidaremovida)
console.log(comidas)

// Adicione 'Arroz' ao final da array

comidas.push('Arroz')
console.log(comidas)

// Adicione Peixe e 'Batata' ao início da array

comidas.unshift('Peixe', 'Batata')
console.log(comidas)

const estudantes = ['Márcio', 'Brenda', 'Joana', 'Klever', 'Julia']
// Arrume os estudantes em ordem alfabética

estudantes.sort()
console.log(estudantes)

// Inverta a ordem dos estudantes

estudantes.reverse()
console.log(estudantes)

// Verifique se Joana faz parte dos estudantes

console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.includes('Juliana'))

let html = '<section><div>Sobre</div><div>Produtos</div><div>Contato</div></section>'

// Substitua section por ul e div por li,
// utilizando split e join

let arraymodif = html.split('section')
arraymodif = arraymodif.join('ul')
arraymodif = arraymodif.split('div')
arraymodif = arraymodif.join('li')
console.log(arraymodif)

const carros = ['Ford', 'Fiat', 'VW', 'Honda']
// Remova o último carro, mas antes de remover
// salve o array original em outra variável

const carrosclone = carros.slice()
console.log(carrosclone)

carros.pop()
console.log(carros)

carros.forEach((item, index, array)=>{
    array[index] = 'oi'
    console.log(item)
})

console.log(carros)