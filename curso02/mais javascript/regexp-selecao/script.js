// Literal:
const frase = 'Isso é JavaScript'

console.log(frase.replace(/J/, 'B'))

console.log(frase.replace(/Java/, 'Type'))

// Character class(criando classe em regexp([])):

const regexpclass = /[ua]/
// nesse caso só vai pegar o primeiro caractere e trocar por x, para trocar todos precisa utilizar as flags.

console.log('Hoje eu guli, estive lá na academia'.replace(regexpclass, 'x'))

// utilizando flags: 

// flag g:

const regexpflagg = /a/g

console.log('Hoje eu guli, estive lá na academia'.replace(regexpflagg, 'X'))

// flag i:

const regexpflagi = /[gh]/gi

console.log('Gustavo e Hanna'.replace(regexpflagi, 'a'))

// character class e caracteres especiais:

const regexpclassesp = /[.]/g

console.log('Compra. Venda. Revenda'.replace(regexpclassesp, ','))

console.log('111.222-333-44'.replace(/[-.]/g, ''))

// character class e flags:

console.log('Não se diz brazil no Brasil, e sim brasil'.replace(/bra[sz]il/gi, 'Brasil'))

// [A-Z], [0-9], [a-z], ou qualquer outro segundon a tabela unicode (- na character class):

console.log('estou pronto!'.replace(/[a-z]/g, 'x'))

console.log('HTML5 e CSS3 são linguagens de marcação e estilos, respectivamente'.replace(/[a-zA-Z0-3]/g, '0'))

// Negar (é uma forma de excluir os caracteres que não quero selecionar e selecionar todo o resto [^]):

console.log('HTML5 e CSS3 são linguagens de marcação e estilos, respectivamente'.replace(/[^a-z ,]/gi, '2'))

console.log('Brasil é com z, Brazil'.replace(/[^a-z]/g, ' '))

// Escapar caracteres especiais. Existem alguns caracteres que possuem funções especiais em regexp, para que não seja exercido essa função, e seja tratado de forma literal, existe a seguinte forma (barra invertida antes do caractere especial):

// Caracteres Especiais: + * ? ^ $ \ . [] {} () | /

console.log('Segundo esse livro, está escrito'.replace(/\,/, ''))

console.log('indo ali, treinar.'.replace(/[\,\.]/g, ' :)'))

// LETRAS ESPECIAIS (são utilizadas com contra barra antes delas):
// Para negar as letras especiais, basta colocar em maiúsculo.

// a) Word /\w/:
// o /\w/ irá selecionar qualquer caractere alfanumérico e e o underline _
// seria a mesma coisa que /[a-zA-Z0-9_]/

console.log('Estamos em 2024!'.replace(/\w/g, 'x'))

// b) Not Word /\W/ (seleciona oque não for alfanúmerico, underline):

console.log('Estamos em 2024!'.replace(/\W/g, 'x'))

// c) Digit /\d/:
// o /\d/ irá selecionar qualquer dígito numérico
// seria a mesma coisa que /[0-9]/

console.log('Estamos em 2024!'.replace(/\d/g, 'X'))
console.log('+55 (21) 2222-2222'.replace(/\d/g, 'X'))
// d) Not Digit /\D/ (seleciona oque não for digito numérico):

console.log('Estamos em 2024!'.replace(/\D/g, 'x'))
console.log('+55 (21) 2222-2222'.replace(/\D/g, ''))

// e) Whitespace /\s/:
// o /\s/ irá selecionar qualquer espaço em branco. Isso inclui: espaços, tabs e quebras de linha:

console.log('Estamos em 2024!'.replace(/\s/g, ''))
console.log('+55 (18)2222-2222'.replace(/\s/g, ''))

// f) Not Whitespace /\S/ (seleciona o que não for espaço em branco(incluindo espaços, tabs e quebras de linha)):

console.log('Estamos em 2024!'.replace(/\S/g, 'é'))

// Formas de selecionar tudo: /./g, /[^]g, /[\s\S]/g, /[\w\W]/g, /[\d\D]/g

console.log('Selecionando todos os caracteres!'.replace(/[\w\W]/g, 'K'))

// Quantificadores {}:

// É possível selecionar caracteres seguidos com /bbb/g por exemplo.
// Mas existe outra forma de selecionar com o quantificador, basta identificar a quantidade dentro das chaves, e um caractere como referência.

// /bbb/g === /b{3}/g

console.log('Você está acompanhando o BBB?'.replace(/b{3}/gi, 'Jujustu Kaisen'))
console.log('Você está acompanhando o BBB?'.replace(/bbb/gi, 'Jujustu Kaisen'))

console.log('vaaaai lá treinar'.replace(/a{4}/g, 'a'))

// Também é possível informar o mínimo e o máximo dentro do quantificador, dessa forma, sempre será procurado agrupar pelo maior número, caso não consiga, vai para o menor número.

console.log('Taaaaaava indo aaaaaali treinaaaaaaaaaaaaaar'.replace(/a{2,14}/g, 'a'))/

// misturando quantificadores com letras especiais:

console.log('Estamos em 2024 no dia 15/01!'.replace(/\d{1,3}/g, 'X'))

// não é necessarimante obrigatório passar os valores de min E max, pode ser um ou outro, só deixar a vírgula que será entendido como sem limites.

console.log('Estamos em 2024 no dia 15/01!'.replace(/\w{3,}/g, 'x'))

console.log('A melhor linguagem é JavaScript!'.replace(/\w{1,}/g, 'X'))

// Caracteres Especiais:

// a) Mais +:
// o + indica que devemos selecionar quando existir pelo menos uma ou mais aparições daquele caractere.
// é a mesma coisa que {1,}
// ou seja:    /a{1,}/ === /a+/

console.log('232.412.542-46'.replace(/\d+/g, 'x'))

console.log('Macarrão, mesmo, múuuu, morango, m4, m_ico, m'.replace(/m\w+/gi, 'mudou'))

// b) Asterisco *:
// o * indica que devemos selecionar quando existir 0 ou mais aparições(essa é a única diferença para o +)

console.log('Macarrão, mesmo, múuuu, morango, m4, m_ico, m'.replace(/m\w*/gi, 'mudou'))

// Opcional ?:
// o ? indica que a aparição do caractere a qual está relacionado é opcional

console.log('Tanto regex quanto regexp estão certos.'.replace(/regexp?/g, 'Regular Expression'))

// Alternado |
// o | indica que irá selecionar qualquer um que aparecer, um ou outro aparecendo já será selecionado.

console.log('Sapo cururu na beira do rio'.replace(/sapo|rio/gi, 'guli'))

// Word Boundary \b (outra letra especial):
// É uma letra que delimita o que deve ser selecionado, é útil quando existem dois textos que possuem os mesmos caracteres iniciais e se diferem após isso.
// a delimitação funciona da seguinte forma: é como se no no lugar de \b tivesse um espaço em branco(espaço, tab ou quebra de linha), se tiver alguma coisa dessas, será selecionado.

// Por exemplo 'Javasript' e 'Java', e eu quero selecionar só 'Java'

console.log('Javascript e Java não são a mesma coisa!'.replace(/\bJava\b/, 'X'))

// Not Word Boundary \B
// é basicamente o contrário do \b, caso não haja um espaço em branco nas delimitações \b, será selecionado.
// deve ser um não w, ou seja, um não alfanumérico/underline

console.log('jJavascript e Java não são mesma coisa!'.replace(/\BJava\B/, 'x'))











