export default function iniciartooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item)=>{
        item.addEventListener('mouseover', onMouseOver)
    })
    
    function onMouseOver(event){
        const tooltipbox = criarTooltipBox(this)
        console.log(event)
    
        onMouseMove.tooltipbox = tooltipbox
        this.addEventListener('mousemove', onMouseMove)
    
        onMouseLeave.tooltipbox = tooltipbox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
    }
    
    const onMouseLeave = {
        handleEvent(){
            this.tooltipbox.remove()
            this.element.removeEventListener('mouseleave',onMouseLeave)
            this.element.removeEventListener('mousemove',onMouseMove)
        }
    }
    
    const onMouseMove = {
        handleEvent(event){
            this.tooltipbox.style.top = event.pageY + 20 +'px'
            this.tooltipbox.style.left = event.pageX + 20 + 'px'
        }
    }
    
    function criarTooltipBox(element){
        const tooltipbox = document.createElement('div')
        tooltipbox.classList.add('tooltip')
        const text = element.getAttribute('aria-label')
        tooltipbox.innerText = text
        document.body.appendChild(tooltipbox)
        return tooltipbox
        console.log(tooltipbox)
    }
}
  
