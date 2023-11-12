function contar() {
var iniciocp = window.document.getElementById('inicio')
var fimcp = window.document.getElementById('fim')
var passocp = window.document.getElementById('passo')
var inicionb = Number(iniciocp.value)
var fimnb = Number(fimcp.value)
var passonb = Number(passocp.value)
var res = window.document.getElementById('res')

if(inicionb == fimnb){
    res.innerHTML = `Não há nada para ser contado :)`
    } else if(passonb == 0) {
        res.innerHTML = `O valor de passos está zerado! Não é possível realizar a conta.`
    } else
    for(var a = inicionb;a <= fimnb; a = a + passonb) {
    res.innerHTML += `&#x1F449 ${a}`
    }
}
function redefinir() {
    res.innerHTML = ''
}