const games = [
    'lol',
    'grand chase',
    'pokémon emerald',
    'zelda'
]

games.forEach((item, index, array)=>{
    console.log(item)
    item = 'pão'
    console.log(item.toUpperCase())
    console.log(index)
    // array[index] = 'pão'
})
console.log(games)

const li = document.querySelectorAll('li')
const liarray = Array.from(li)

console.log(liarray.map((item)=>{
     item.classList.add('ativo')
    return item
}))

const ul = document.querySelectorAll('ul')

const arraycopiaincrementada = games.map((item)=>{
    item = item + ' é o jogo do ano,'
   return item + ' é bom'
})

console.log(arraycopiaincrementada)

const numeros = [4, 16, 20, 2, 5]

const arraynumerosmult = numeros.map((item)=>{
    return item * 2
})

console.log(arraynumerosmult)

const aula = [
    {
        materia: 'HTML1',
        aulasnasem: 20,
    },
    {
        materia: 'HTML2',
        aulasnasem: 20,
    },
    {
        materia: 'CSS1',
        aulasnasem: 10,
    },
    {
        materia: 'JS1',
        aulasnasem: 10,
    }
]

console.log(aula.map( item => item.aulasnasem))

function mudaraulasnasem (item){
    return item.materia
}

const novaarray = aula.map(mudaraulasnasem)

console.log(novaarray)

const materiaestring = function (item) {
      return item.materia + ' é difícil'
}

const novaarray2 = aula.map(materiaestring)

console.log(novaarray2)

const numeros2 = [2, 24, 13, 7]

const totalsoma = numeros2.reduce((acumulador, item)=>{ 
    console.log(acumulador) 
    return acumulador + item
})
console.log(totalsoma)

const maiorvalor = numeros2.reduce((acumulador, item)=>{
    return item > acumulador ? item : acumulador
}, numeros2[0])

console.log(maiorvalor)

const novoobjacumul = aula.reduce((ac,item,index)=>{
    ac[index] = item.materia
    return ac
}, {})

console.log(novoobjacumul) 

const frutas = ['Banana', 'Maçã', 'Uva']
const stringleft = frutas.reduce((ac, item)=>{
    return `${ac} ${item}` 
})

console.log(stringleft)

const stringright = frutas.reduceRight((ac, item)=>{
    return `${ac} ${item}`
})

console.log(stringright)

const temuva = frutas.some((item)=>{
    return item === 'Uva'
})

console.log(temuva)

const tudostring = frutas.every((item)=>{
    return item
})

console.log(tudostring)

const numero = [34, 48, 232, 22]

const temmenorque30 = numero.some((item)=>{
    return item < 30
})

console.log(temmenorque30)