var nomeCalc = require('./nome-calc')
var calculadora = require('./calc')

// usando MODULES ou MÓDULOS no node.js:

// os módulos ou modules servem para dividir o conteúdo que ficaria no arquivo .js principal, para que não fique tão cheio.

// podemos separar de acordo com certas finalidades, por exemplo, calculadora, ou soma, subtração, uma função que retorna um nome, seja lá o que for.

// Podemos fazer módulos de funções e variáveis!!!!

// passo a passo:

// 1º no outro arquivo .js que terá a função/variável que será exportada, na ultima linha coloca o código: 

// module.exports = nomedafunção ou nomedavariável.

// podemos colocar dentro de objeto e /ou array, ficando dessa forma:

// module.exports = {
//   nomedafunção1,
//   nomedafunção2,
//   nomedavariavel1
//}

// 2º o próximo passo é importar no arquivo em que será utilizado, para isso, dentro do arquivo que será utilizado, na primeira linha, coloca o código:

// var/let/const nomedavariavel = require('./arquivo.js')

// para chamar a importação usa-se o require('arquivo.js') mas, para poder utilizar o que foi importado precisamos colocá-lo dentro de uma variável, com algum nome que irá identificá-lo.

// ex: var calculadora = require('./calc.js')

// agora, é só utilizar!

// lembrando que se for um objeto, precisa acessar com '.' seja propriedade ou método.



console.log(`Nome da Calculadora: ${nomeCalc('Guli - CALCULADORA')}`)

console.log(calculadora.soma(30, 20))
var resultadoSub = calculadora.sub(20, 40)
console.log(resultadoSub)
var resultadoMulti = calculadora.multi(10, 10)
console.log(resultadoMulti)
console.log(calculadora.div(10, 2))




// var mostrarSite = true
// const site = 'www.guiadoprogramador.com'

// console.log('Hello World!')
// console.log('Meu nome é Gustavo Nagai')
// console.log('E eu estou aprendendo node.js com o Guia do Programador')

// if(mostrarSite) {  // se mostrar site
//     console.log(site)  // printe o site
// }


// COMO EXECUTAR CÓDIGO JAVASCRIPT NO NODE.JS?

// posso usar o cmd do windows mesmo:

// 1º abro o cmd
// 2º vou até a pasta onde está o meu arquivo .js que eu quero executar
// por exemplo, ao abrir o cmd estava:

// C:Users\gulif\
// ai é só digitar:

// cd OneDrive\Desktop\programacao\javascript\node-js\inicio

// ( nesse caso, o OneDrive está ali pq meu pc está vinculado ao OneDrive, mas não necessariamente ele precisa estar )

// 3º agora é só executar, para executar em node.js, basta digitar: node nomedoapp.js

// ex: OneDrive\Desktop\programacao\javascript\node-js\inicio node app.js

// pronto!


// o comando 'cls' limpa o cmd.