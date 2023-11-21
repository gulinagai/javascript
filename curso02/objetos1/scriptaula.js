var pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Nagai',
    idade: 24,
    sexo: 'M',
}


var quadrado = {
    lados: 4,
    perimetro(lado){
        return lado * this.lados
    },
    area: function(lado){
        return lado * lado
    }
}
console.log(quadrado.perimetro(5))
console.log(quadrado.area(5)) 
console.table(quadrado)     