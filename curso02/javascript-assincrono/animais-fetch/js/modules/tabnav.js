export default function iniciarnavtab(){
    const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabcontent = document.querySelectorAll('[data-tab="content"] section')
    
    if(tabmenu.length && tabcontent.length){
    tabcontent[0].classList.add('ativo')
    
    function classtabcontent(index){
        tabcontent.forEach((section)=>{
            section.classList.remove('ativo', section.dataset.anime)
        })
        tabcontent[index].classList.add('ativo', tabcontent[index].dataset.anime)
    }
    tabmenu.forEach((li, index)=>{
        li.addEventListener('click', ()=>{
            classtabcontent(index)
        })
    })
    }
    }