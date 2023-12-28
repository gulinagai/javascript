export default function iniciarmodal(){
    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')
    const containerModal = document.querySelector('[data-modal="container"]')
    
    if(botaoAbrir && botaoFechar && containerModal){
    function toggleModal(event){
        event.preventDefault()
        containerModal.classList.toggle('ativo')
    }
    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    
    function cliqueForaModal(event){
        if(event.target === containerModal){
        toggleModal(event)
        }
    }
    containerModal.addEventListener('click', cliqueForaModal)
    }
}

