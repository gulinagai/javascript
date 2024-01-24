// Function Declaration
function soma(a, b){
    return a + b
}
console.log(soma(3, 7))

// Function Expression
console.log(soma2)

var soma2 = function(a, b){
    return a + b
}

console.log(soma2(4, 10))

// também posso escrever com arrow function

// IIFE
const game = 'League Of Legends'
console.log(game);
(function (){
    // o código aqui dentro só vale aqui dentro
    const game = 'Pokémon Emerald'
    console.log(game)
})()
console.log(game)

// também posso usar arrow function aqui