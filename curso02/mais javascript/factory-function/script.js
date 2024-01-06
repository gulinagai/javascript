function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements)
    function hide(){
        elements.forEach((element)=>{
            element.style.display = 'none'
        })
        // retornar a própria Factory Function permite que eu utilize outro método já em sequência do método que foi utilizado, fazendo um encadeamento de métodos/propriedades
        // this = $$(selectedElements)
        return this
    }
    function show(){
        elements.forEach((element)=>{
            element.style.display = 'initial'
        })
        return this
    }
    function on(onEvent, callback){
        elements.forEach((element)=>{
            element.addEventListener(onEvent, callback)
        })
        return this
    }
    function addClass(className){
        elements.forEach((element)=>{
            element.classList.add(className)
        })
        return this
    }
    function removeClass(className){
        elements.forEach((element)=>{
            element.classList.remove(className)
        })
        return this
    }
    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
}

const btns = $$('button')
// console.log(btns.elements)
console.log(btns.hide().show())

function handleClick(event){
    console.log(event.target)
    btns.addClass('ativo')
}

btns.on('click', handleClick)
