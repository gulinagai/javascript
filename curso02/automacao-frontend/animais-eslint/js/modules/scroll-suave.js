export default function initScrollSuave(){
    const linksinternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
    
    function scrollarparasection(event){
        event.preventDefault()
        const href = this.getAttribute('href')
        console.log(href)
        const section = document.querySelector(href)
        console.log(section)
    
        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        //})
         section.scrollIntoView({
             behavior: 'smooth',
             block: 'start',
         })
    }
    
    linksinternos.forEach((link)=>{
        link.addEventListener('click', scrollarparasection)
    })
}
