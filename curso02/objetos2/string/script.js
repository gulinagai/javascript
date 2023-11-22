const string1 = 'oi'

const string2 = new String('tchau')

const frase = 'não sou feio'
const frase2 = ', sou só o básico'
console.log(frase.concat(frase2, '!!'))

const numeros = [
    '0',
    '42',
    '2310',
    '15000',
]

console.log(numeros[0].padStart(10, '.'))

numeros.forEach((numero)=>{
    console.log(numero.padStart(10))
})
