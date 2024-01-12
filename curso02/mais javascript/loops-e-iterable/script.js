// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll('li')
for(li of lis){
    li.classList.add('ativo')
}

// Utilize o for...in para listar
// todas as propriedades e valores
// do objeto window

for(keyDoWindow in window){
    console.log(`${keyDoWindow}: ${window[keyDoWindow]}`)
}