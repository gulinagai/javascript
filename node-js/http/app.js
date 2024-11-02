// HTTP significa HyperText Transfer Protocol
// ou Protocolo de Transferência de Hipertexto.
// Esse protocolo que é possível transferir dados entre dispositivos conectados em rede, como a internet.

// IMPORTANTE:


// CRIANDO SERVIDOR HTTP COM O MÓDULO HTTP DO NODE.JS:



// continuando o assunto sobre módulos, o próprio node.js possui seus próprios módulos, onde, basta importá-los utilizando o require('') e colocar em uma variável.

// um deles é o módulo 'http' 

// utilizar esse módulo nativo do node.js para criar um servidor, não é uma boa opção, pois para aplicações mais completas existe outra alternativa, utilizando um framework. 

var http = require('http')  

// pronto, o módulo http do node.js já está sendo carregado dentro da variável http

// http.createServer().listen(8181)  // esse número pode ser qualquer número
// console.log('Meu servidor está rodando.')

// importante! explicação : esse código cria um servidor http na minha máquina na porta 8181

// explicando esse código acima:

// a variável http é o módulo http do node.js, e possui um método que se chama createServer()

// createServer(8181) cria uma instância de um servidor HTTP.

// listen() faz com que o servidor comece a escutar as requisições na porta 8181. Isso significa que o servidor ficará ativo e responderá às requisições feitas, por exemplo, em http://localhost:8181. (na porta 8181)

// localhost pq é na maquina máquina, um servidor http na minha máquina, na porta 8181

// ou seja, criei um servidor, e as requisições feitas na porta 8181 serão respondidas.

// agora temos um servidor rodando!!!



// se eu entrar no terminal (seja aqui no vscode ou no cmd) e digitar node app.js, o cursos irá "travar", isso indica que o servidor está rodando


// eu posso colocar uma função dentro de createServer, que receberá 2 objetos como parâmetros, e esses objetos tem propriedades e métodos nativos.

// o primeiro parâmetro terá um nome de requisicao pq lidará com a requisicão.

// o segundo parâmetro terá um nome de resposta, pq lidará com a resposta do servidor.

// http.createServer((requisicao, resposta)=>{
//     resposta.end('Bem vindo ao meu site amigo :)')
// }).listen(8181)

// console.log('Meu servidor está rodando.')

// esse .end() é um dos métodos que lida com a resposta do servidor.

// eu posso colocar até tags html dentro do .end():

http.createServer((requisicao, resposta)=>{
    resposta.end('<h1>Bem vindo ao meu site amigo :)<h1><p>Site do guli</p>')
}).listen(3000)

console.log('Meu servidor está rodando.')








// outro módulo do node.js é o módulo 'fs', que serve para manipulação de arquivos. (criar arquivo, editar arquivo, etc)