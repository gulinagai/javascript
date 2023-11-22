// Liste 5 objetos nativos
let lista = [
    String,
    Number,
    Function,
    Array,
    Object,
]
let res = ''
for(c = 0; c < lista.length ; c++){
    res += `${c+1}º ${lista[c]} \n`
}
let resultado = ''
a = 0
lista.forEach((item, index)=>{
    resultado += `${++index}º ${item} \n`
})
console.log(res)
console.log(resultado)

// Liste 5 objetos do browser
let objtsbrowser = [
    NodeList,
    HTMLCollection,
    HTMLElement,
    Element,
    Window,
] 
let result = ''
objtsbrowser.forEach((item, index)=>{
    result += `${++index}º ${item}\n`
})
console.log(result)

console.log()
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitHidden !== 'undefined'){
    console.log('Existe')
} else{
    console.log('Não existe')
}