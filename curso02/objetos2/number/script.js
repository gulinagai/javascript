// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)

// Retorne o maior número da lista abaixo

const numeros = '4, 5, 20, 8, 9'
numerosarray = numeros.split(', ')
console.log(Math.max(...numerosarray))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$59,99', ' R$100,222',
                     'R$ 230 ', 'r$ 200']

let soma = 0
listaPrecos.forEach((preco)=>{
    precolimpo = preco.trim().toUpperCase()

    if(!precolimpo.startsWith('R$ ')){
        let res = precolimpo.replace('R$', 'R$ ')
        console.log(`R$ ${(+res.replace(',', '.').slice(3)).toFixed()}`)
    } else {
        console.log(precolimpo)
    }
    //segunda parte:  soma
    let valor = +precolimpo.slice(2).trim().replace(',', '.')
    let valorar = +(valor.toFixed())
    soma = soma + valorar
})
console.log(`Total: ${soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`)