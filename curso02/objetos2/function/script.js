// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll('p')
const totalcaractp = Array.prototype.reduce.call(p, (ac, item)=>{
    return ac + item.innerText.length
}, 0)
console.log(totalcaractp)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteúdo.

function retornohtml (elementonovo){
    const elemnovo = document.createElement(elementonovo)
    elemnovo.classList.add(this.classe)
    elemnovo.innerHTML = this.conteudo
    const htmlel = window.document.body.appendChild(elemnovo)
    return `${elemnovo.tagName}, ${elemnovo.className}, ${elemnovo.innerHTML}`
}

console.log(retornohtml('li'))

//outro jeito

function criarelemento (tagg, classee, conteudoo){
    const elementonovo = document.createElement(tagg)
    elementonovo.classList.add(classee)
    elementonovo.innerHTML = conteudoo
    return elementonovo
}
const h1 = {
    classe: 'título',
    conteudo: 'oi eu sou o gustavo'
}

// const criandoh1 = criarelemento.call(h1)

// console.log(criandoh1)

console.log(criarelemento('h2', 'blabla', 'somos todos iguais'))

// Crie uma nova função utilizando  anterior como base
// essa função dever sempre criar h1 com a
// classe título. Porém o parâmetro conteudo continuará dinâmico


console.log(retornohtml.call(h1, 'h1'))

//outro jeito (só o parâmetro conteudo é dinâmico)

const h1novo = criarelemento.bind(null, 'h1', 'título')
console.log(h1novo('sdadaw'))












// function criarh1 (texto){
//     const novoh1 = document.createElement('h1')
//     novoh1.classList.add('titulo')
//     novoh1.innerHTML = texto
//     document.body.appendChild(novoh1)
//     return `Elemento criado: ${novoh1}, classes: ${novoh1.classList}, conteúdo: ${novoh1.innerHTML}`
// }
// const h1criado = criarh1.call(null,'oi eu sou o gustavo')
// console.log(h1criado)





