// let item1 = 1
// function funcao1(){
//     let item2 = 2
//     function funcao2(){
//         let item3 = 3
//     }
//     funcao2()
// }
// funcao1()

function contagem() {
    let total = 0
    // basicamente, está sendo retornado o próprio corpo da função incrementar(), que pode ser ativada posteriormente.
    return function incrementar(){
        total++
        console.log(total)
    }
}
const ativarIncrementar = contagem()
// ativarIncrementar basicamente é como se tivesse colocando incrementar(), só que colocou de outra forma, o retorno da função contagem() é o próprio corpo da função incrementar() que por sua vez pode ser ativada como uma função normalmente, o que foi feito é que foi colocado dentro de uma variavél para deixar o código mais entendível.
ativarIncrementar()
ativarIncrementar()
ativarIncrementar()
ativarIncrementar()
ativarIncrementar()
ativarIncrementar()
ativarIncrementar()
ativarIncrementar()