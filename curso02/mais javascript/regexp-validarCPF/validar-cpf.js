export default class ValidarCpf {
    constructor(element){
        this.element = element
    }
    limpar(cpf){
        return cpf.replace(/\D/g, '')
    }
    formatar(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }
    construir(cpf){
        const cpfLimpo = this.limpar(cpf)
        return this.formatar(cpfLimpo)
    }
    validar(cpf){
        console.log(cpf)
        const cpfMatch = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
        // console.log(cpfMatch)
        // console.log(cpfMatch[0] === cpf)
        // essa parte debaixo é importante, verifica se o que deu match é igual ao que foi digitado, pq se foi digitado numero a mais e mesmo assim deu match, vai verificar se é igual, assim não dá problema de validar números maiores do que foi passado no regexp do match.
        // a verificação cpfMatch é para ver se não retornou null, pq o .match() retorna null caso não deu nenhum match (número menor que o regexp do cpf)
        return (cpfMatch && cpfMatch[0] === cpf)
    }
    validarNoChange(cpfElement){
        // 1º validação, depois a construção = limpar + formatar,essa é a ordem.
        if(this.validar(cpfElement.value)){
           this.element.value = this.construir(cpfElement.value)
           cpfElement.classList.remove('erro')
           cpfElement.classList.add('valido')
           cpfElement.nextElementSibling.classList.remove('ativar')
        } else {
            cpfElement.classList.add('erro')
            cpfElement.classList.remove('valido')
            cpfElement.nextElementSibling.classList.add('ativar')
        }
    }
    adicionarEvento(){
        this.element.addEventListener('change', ()=>{
            this.validarNoChange(this.element)
        })
    }
    adicionarErroSpan(){
        const erroElement = document.createElement('span')
        erroElement.classList.add('erro-text')
        erroElement.innerText = 'CPF Inválido'
        this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling)
    }
    iniciar(){
        this.adicionarEvento()
        this.adicionarErroSpan()
        return this
    }
}

