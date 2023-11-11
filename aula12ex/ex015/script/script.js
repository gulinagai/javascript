function verificar() {
    var cpnasc = window.document.getElementById('nasc')
    var data = new Date()
    var anoatual = data.getFullYear()
    var idade = anoatual - Number(cpnasc.value)
    var opsexo = window.document.getElementsByName('sexo')
    var msg = window.document.getElementById('msg')
    var img = window.document.createElement('img')
     if(cpnasc.value < 1900 || cpnasc.value > anoatual) {
        msg.innerHTML = `Os dados fornecidos são inválidos`
    } else if(opsexo[0].checked){
        var genero = 'Homem'
    if(idade >= 0 && idade <= 14 && genero == 'Homem') {
        img.setAttribute('src', 'imagens/homemcrianca.png')
    } else if(idade > 14 && idade <= 21 && genero == 'Homem') {
        img.setAttribute('src', 'imagens/homemjovem.png') 
    } else if(idade > 21 && idade < 60 && genero == 'Homem') {
        img.setAttribute('src', 'imagens/homemadulto.png')
    } else if(idade >= 60 && genero == 'Homem') {
        img.setAttribute('src', 'imagens/homemidoso.png')
    }
    } else if (opsexo[1].checked) {
        var genero = 'Mulher'
    if(idade >= 0 && idade <= 14 && genero == 'Mulher') {
        img.setAttribute('src', 'imagens/mulhercrianca.png')
    } else if(idade > 14 && idade <= 21 && genero == 'Mulher') {
        img.setAttribute('src', 'imagens/mulherjovem.png') 
    } else if(idade > 21 && idade < 60 && genero == 'Mulher') {
        img.setAttribute('src', 'imagens/mulheradulta.png')
    } else if (idade >= 60 && genero == 'Mulher') {
        img.setAttribute('src', 'imagens/mulheridosa.png')
    }
}
if(cpnasc.value >= 1900 && cpnasc.value <= anoatual) {
    msg.style.textAlign = 'center'
    msg.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
    img.style.display = 'block'
    img.style.margin = 'auto'
    msg.appendChild(img)
 }
}