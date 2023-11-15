// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilGanhouCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com o array utilizando um loop, para mostrar
// no console a seguinte mensagem, 'O brasil ganhou a copa de ${ano}'
for(c = 0; c < brasilGanhouCopa.length ; c++){
    console.log(`O Brasil ganhou a copa de ${brasilGanhouCopa[c]}`)
}

//ou com forEach

brasilGanhouCopa.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano}`)
})

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for(i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera'){
        break
    }
}

//ou com forEach

// frutas.forEach(function(fruta) {
//     console.log(fruta)
//     if(fruta === 'Pera'){
//         break
//     }
// })
// break no if em forEach não funciona!


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array
var ultimafrutaforma1
 frutas.forEach(function(fruta){
     ultimafrutaforma1 = fruta
    
 })
 console.log(ultimafrutaforma1)

for(a = 0; a < frutas.length ; a++) {
    var ultimafrutaforma2 = frutas[a]
}
console.log(ultimafrutaforma2)
//outra forma

var ultimafrutaforma3 = frutas[frutas.length-1]
console.log(ultimafrutaforma3)
