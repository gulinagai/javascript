// esse código serve para não precisar dar refresh toda vez que clicar em outra página, criar uma navegação mais fluida!
const links = document.querySelectorAll('a')

function handleClick(event){
    // não dá refresh pq to prevenindo o padrão :) e pegando o conteúdo da outro arquivo .html que eu criei e colocando em uma mesma página
    event.preventDefault()
    console.log(event.target.href)
    fetchPage(event.target.href)
    // console.log('clique')
    window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url){
    urlResponse = await fetch(url)
    urlText = await urlResponse.text()
    // console.log(urlText)
    replaceContent(urlText)
}

function replaceContent(newText){
    const newHtml = document.createElement('div')
    newHtml.innerHTML = newText
    console.log(newHtml)

    const oldContent = document.querySelector('.content') 
    const newContent = newHtml.querySelector('.content')

    oldContent.innerHTML = newContent.innerHTML
    document.title = newHtml.querySelector('title').innerText
}

window.addEventListener('popstate', ()=>{
    fetchPage(window.location.href)
})

links.forEach((link)=>{
    link.addEventListener('click', handleClick)
})