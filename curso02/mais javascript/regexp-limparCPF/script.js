const cpfs = document.querySelectorAll('.cpf li')
console.log(cpfs)

const elementsInnerText = (elements)=>{
    const elementsArray = Array.from(elements)
    return elementsArray.map(element=>{
        return element.innerText
    })
}

arrayCPFS = elementsInnerText(cpfs)

// console.log(arrayCPFS)

const limparCPF = (cpf)=>{
    return cpf.replace(/\D/g, '')
}

const formatarCPF =(cpf)=>{
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

const criarCPF = (cpfs)=>{
    return cpfs.map(cpf=>{
        return limparCPF(cpf)
    }).map(cpf =>{
        return formatarCPF(cpf)
    })
}

const mudarNoBrowser = ()=>{
    const CPFScorrigidos = criarCPF(arrayCPFS)
    cpfs.forEach((element, index) =>{
        element.innerText = CPFScorrigidos[index]
    })
}

mudarNoBrowser()


// console.log(formatarCPF('22341245233'))

// console.log(limparCPF('423.425 123-44'))