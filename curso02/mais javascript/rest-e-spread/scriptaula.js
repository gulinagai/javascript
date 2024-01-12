// utilizando a palavra chave 'arguments'

function soma(n1, n2 = 5){
    console.log(arguments)
    return n1 + n2
}
console.log(soma(2, 6))

// utilizando rest:
// aqui embaixo é rest:
function premiacaoMoto(...ganhadores){
    console.log(ganhadores)
    ganhadores.forEach((ganhador)=>{
        console.log(`${ganhador} ganhou uma moto!`)
    })
}

const participantes = ['Gustavo', 'Hanna']
// aqui embaixo é spread
premiacaoMoto(...participantes)

// utilizando spread:

const frutas = ['Banana', 'Maçã', 'Pêra']
const doces = ['Chocolate', 'Nescau', 'Bolacha']

const comida = [...frutas, 'Batata Frita', ...doces]

console.log(comida)

// spread em argumentos:

const numeros = [4, 23, 51, 2, 5, 7, 25]
console.log(Math.max(...numeros))

