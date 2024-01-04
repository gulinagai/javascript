import Countdown from "./countdown.js";

// como criar uma contagem regressiva para um dia futuro específico a partir do dia atual:


// esse código leva em conta os dias, horas, minutos e segundos restantes.

const tempoParaONatal = new Countdown('24 December 2024 23:59:59 GMT-0300')

const tempoParaOAnoNovo = new Countdown('31 December 2024 23:59:59 GMT-0300')

const tempoPara1AnoDeNamoro = new Countdown('15 September 2024 23:59:59 GMT-0300')

console.log(tempoParaONatal._actualDate)
console.log(tempoParaONatal._futureDate.getTime())
console.log(tempoParaONatal.days)

// .total é um get que retorna justamente o objetivo principal desse código :)
console.log(tempoParaONatal.total)


console.log(tempoParaOAnoNovo.total)

// setInterval(()=>{
//    console.log(tempoParaONatal.total)
// }, 1000)

setInterval(()=>{
   console.log(tempoPara1AnoDeNamoro.total)
}, 1000)