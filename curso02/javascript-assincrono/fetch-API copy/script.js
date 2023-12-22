// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const buscar = document.querySelector('button')
const cep = document.querySelector('input[type="number"]')
console.log(buscar)
const resultado = document.querySelector('div[data-resultado]')
const secresultados = document.querySelector('section')
function retornarEndereco(event){
    event.preventDefault()
    console.log('clicou')
    const numeroCEP = cep.value
    fetch(`https://viacep.com.br/ws/${numeroCEP}/json/`)
    .then(resolve=>{
        return resolve.text()
    })
    .then(bodyText=>{
        console.log(bodyText)
        resultado.innerText = bodyText
    })
}

buscar.addEventListener('click', retornarEndereco)


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais
// atualize este valor a cada 30s
    const divBTC = document.createElement('div')
    secresultados.appendChild(divBTC)
    fetch('https://blockchain.info/ticker', { cache: 'no-store'})
.then((response)=>{
    // console.log((response.headers))
    return response.json()
})
.then(bodyJson=>{
    divBTC.innerText = `Valor da compra de 1 bitcoin = ${bodyJson.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
})
setInterval(()=>{
    fetch('https://blockchain.info/ticker', { cache: 'no-store'})
.then((response)=>{
    // console.log((response.headers))
    return response.json()
})
.then(bodyJson=>{
    divBTC.innerText = `Valor da compra de 1 bitcoin = ${bodyJson.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
})
}, 30000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const divCN = document.createElement('div')
secresultados.appendChild(divCN)
divCN.innerText = 'Piada do Chuck Norris: '
const botaoCN = document.createElement('button')
secresultados.appendChild(botaoCN)
botaoCN.innerText = 'Próxima'
divCN.style.display = 'inline'

function novaPiada(){
    divCN.innerText = 'Piada do Chuck Norris: '
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response=>{
        return response.json()
    })
    .then(bodyJson=>{
        divCN.innerText += bodyJson.value
        console.log(bodyJson)
    })
}

botaoCN.addEventListener('click', novaPiada)
console.log(botaoCN)


