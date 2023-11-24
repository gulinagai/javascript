// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Taxa Cliente',
        valor: 'R$ 49',
    },
]
let somat = 0
let somare = 0
transacoes.forEach((item)=>{
    //console.log(item)
    if(item.descricao.startsWith('Taxa')){
        let valoritem1 = item.valor.split('R$ ')[1]
        //console.log(valoritem1)
        somat += Number(valoritem1)
        
    } else if(item.descricao.startsWith('Recebimento')){
        let valoritem2 = item.valor.split('R$ ')[1]
        //console.log(valoritem2)
        somare += Number(valoritem2)
    }   

})
console.log(`Soma dos valores de recebimento = R$ ${somare}`)
console.log(`Soma dos valores da taxa = R$ ${somat}`)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const transportesarray = transportes.split(';')
console.log(transportesarray)

// Substitua todos os span's por a's
const html = '<ul><li><span>Sobre</span></li><li><span>Sobre</span></li><li><span>Sobre</span></li></ul>'

htmlarray = html.split('span')
//console.log(htmlarray)
htmlstringjoin = htmlarray.join('a')
console.log(htmlstringjoin)
               
// Retorne o último caractere da frase
const frase = 'Melhor do ano!'
console.log(frase.charAt(--frase.length))

// Retorne o total de taxas

const transacoes2 = ['Taxa do Banco','    TAXA DO PÃO', '   taxa do mercado', 'depósito Bancário', 'TARIFA especial']

let c = 0
transacoes2.forEach((item)=>{
    let itemminse = item.toLowerCase().trim()
    console.log(itemminse)
    if(itemminse.startsWith('taxa')){
        c++
    }
})
console.log(`Total de taxas = ${c}`)