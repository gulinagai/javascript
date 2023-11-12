function gerar(){
var tabcp = window.document.getElementById('tab')
var tabnb = Number(tabcp.value)
var list = window.document.getElementById('list')
if(tabcp.value.length == 0){
    window.alert('Por favor, digite um número.')
} else {
    list.innerHTML = ''
    for(c = 0; c <= 10; c++) {
        var mult = tabnb * c
        var op = window.document.createElement('option')
        list.appendChild(op)
        window.document.getElementsByTagName('option')[c].innerHTML += `${tabnb} x ${c} = ${mult}`
    }
}
}
function redefinir() {
    for(c = 0; c <= 10; c++) {
        window.document.getElementsByTagName('option')[c].innerHTML += ''
    }
}