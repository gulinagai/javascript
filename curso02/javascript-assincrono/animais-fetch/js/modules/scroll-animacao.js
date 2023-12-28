export default function animacaodoscroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const telasessentaporc = window.innerHeight * 0.6
    if(sections.length){
        function animaraoscroll(){
            sections.forEach((section)=>{
                const sectiontopo = section.getBoundingClientRect().top
                const sectionnotopocomp = (sectiontopo - telasessentaporc) < 0
                if(sectionnotopocomp){
                    section.classList.add('ativo')
                } else if(section.classList.contains('ativo')){
                    section.classList.remove ('ativo')
                }
            })
        }
        animaraoscroll()
        window.addEventListener('scroll', animaraoscroll)
    }
    }
