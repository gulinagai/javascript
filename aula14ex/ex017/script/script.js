function gerar(){
var tabcp = window.document.getElementById('tab')
var tabnb = Number(tabcp.value)
if(tabcp.value.length == 0){
    window.alert('Por favor, digite um número.')
} else {
    for(c = 0; c <= 10; c++) {
        var mult = tabnb * c
        window.document.getElementsByTagName('option')[c].innerHTML += `${tabnb} x ${c} = ${mult}`
    }
}
}
function redefinir() {
    for(c = 0; c <= 10; c++) {
        window.document.getElementsByTagName('option')[c].innerHTML += ` `
    }
}