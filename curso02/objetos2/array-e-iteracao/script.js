// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const nlcursos = document.querySelectorAll('.curso')
arraycursos = Array.from(nlcursos)
// console.log(arraycursos)

const arraynova = arraycursos.reduce((ac, item, index)=>{
      ac[index] = {
            titulo: item.children[0].innerHTML,
            descricao: item.children[1].innerHTML,
            aulas: document.querySelector('.aulas').innerHTML = 20,
            horas: document.querySelector('.horas').innerHTML = 15
                  }
      return ac
}, [])

console.log(arraynova)

const arraynovamap = arraycursos.map((item, index)=>{
    return item[index] = {
        titulo: item.children[0].innerHTML,
        descricao: item.children[1].innerHTML,
        aulas: document.querySelector('.aulas').innerHTML = 20,
        horas: document.querySelector('.horas').innerHTML = 15
              }
})
console.log(arraynovamap)


// Retorne uma lista com os números maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33]

const maiorque100 = numeros.filter((item)=>{
    return item > 100
})

console.log(maiorque100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const tembaixoporsome = instrumentos.some((item)=>{
    return item === 'Baixo'
})
console.log(tembaixoporsome)

// ou

const tembaixoporincludes = instrumentos.includes('Baixo')

console.log(tembaixoporincludes)

// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]

const totalcompra = compras.reduce((ac, item)=>{
    let precolimpo = +item.preco.slice(3).replace(',', '.')
    return ac + precolimpo
}, 0)

console.log(`Total: ${totalcompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)