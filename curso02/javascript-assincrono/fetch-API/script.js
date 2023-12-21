
fetch('https://viacep.com.br/ws/19360000/json/')
.then((response)=>{
    return response.json()
})
.then((bodyJson)=>{
    // console.log(bodyJson)
    const conteudo = document.querySelector('[data-conteudo]')
    conteudo.innerText = bodyJson.localidade + ', ' + bodyJson.uf
})

fetch('./styles.css')
.then((response)=>{
    return response.text()
})
.then((body)=>{
    const style = document.createElement('style')
    document.head.appendChild(style)
        style.innerHTML = body
})

fetch('./sobre.html')
.then((response)=>{
    return response.text()
})
.then((bodyText)=>{
    // console.log(bodyText)
    const div = document.createElement('div')
    div.innerHTML = bodyText
    const h1Div = div.querySelector('h1')
    const h1Document = document.querySelector('h1')
    h1Document.innerText = h1Div.innerText
})


const minhaFetch = fetch('./teste.txt')
console.log(minhaFetch)

const retorno = minhaFetch
.then((response)=>{
   return response.text()
})
.then(bodyText=>{
    console.log(bodyText)
})
console.log(retorno)

// const response = fetch('./imagem.png')
// .then((response)=>{
//     return response.blob()
// })
// .then((objetoBlob)=>{
//     console.log(objetoBlob)
//     const imagemURL = URL.createObjectURL(objetoBlob)
//     const img = document.querySelector('img')
//     img.setAttribute('src', imagemURL)
// })

fetch('./imagemm.png')
.then((response)=>{
    console.log(response.headers)
    // response.headers.forEach(console.log)
    console.log(response.status)
    const mensagem = document.createElement('p')
    document.body.appendChild(mensagem)
    if(response.status === 200){
        mensagem.innerText = 'Imagem carregada'
    } else if (response.status === 404){
        mensagem.innerText = 'A imagem não foi encontrada :( Erro 404'
    }
    console.log(response.type)
})


