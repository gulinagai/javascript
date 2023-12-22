fetch('arquivo.json')
.then((response)=>{
    return response.text()
})
.then((bodyText)=>{
    console.log(bodyText)
    localStorage.config = bodyText
    const arquivoJSON = JSON.parse(bodyText)
    console.log(arquivoJSON)
})

objetoJS = 
{
    nome: 'Gustavo',
    idade: 24,
    apelido: 'Guli'
}

const JSONtextconvertido = JSON.stringify(objetoJS)

console.log(JSONtextconvertido)

const arquivoConvertidoEmObjeto = JSON.parse(localStorage.config)

console.log(arquivoConvertidoEmObjeto[2].aula)