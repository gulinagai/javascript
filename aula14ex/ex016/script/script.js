function contar() {
var iniciocp = window.document.getElementById('inicio')
var fimcp = window.document.getElementById('fim')
var passocp = window.document.getElementById('passo')
var inicionb = Number(iniciocp.value)
var fimnb = Number(fimcp.value)
var passonb = Number(passocp.value)
var res = window.document.getElementById('res')

if(iniciocp.value.length == 0 || fimcp.value.length == 0 || passocp.value.length == 0){
    res.innerHTML = 'Faltam dados a serem preenchidos!'
} else {
if(passonb != 0){
if(inicionb == fimnb){
    res.innerHTML = `Não há nada para ser contado :)`
    }  else if(inicionb < fimnb){
    for(var a = inicionb;a <= fimnb; a = a + passonb) {
        res.innerHTML += `&#x1F449 ${a}`
    }
    } else if(inicionb > fimnb){
        for(var a = inicionb;a >= fimnb; a = a - passonb) {
            res.innerHTML += `&#x1F449 ${a}`
        }
    }
    res.innerHTML += `&#x1F3C1`
} else if(passonb == 0) {
    res.innerHTML = `O valor de passos está zerado! A conta será feita com passo 1, valor mínimo.<br>`
    passonb = 1
    if(inicionb < fimnb){
     for(var a = inicionb;a <= fimnb; a = a + passonb) {
         res.innerHTML += `&#x1F449 ${a}`
    }
        } else if(inicionb > fimnb){
            for(var a = inicionb;a >= fimnb; a = a - passonb) {
                res.innerHTML += `&#x1F449 ${a}`
            }
        }

}
}
}
function redefinir() {
    res.innerHTML = ''
}