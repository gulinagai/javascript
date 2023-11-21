// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: 'Gustavo',
    sobrenome: 'Nagai',
    idade: 24,
    sexo: 'M'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomecompleto = function(nome, sobrenome){
    return (`${this.nome} ${this.sobrenome}`)
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: 'labrador',
    cor: 'preto',
    idadeemanos: 10,
    latiraoverhomem: function(pessoa){
        if(pessoa === 'homem'){
            return 'au au'
        } 
    } 
}
