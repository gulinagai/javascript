var numvet = []
function temnalista(n, v){
    if(v.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function zeroecem(n){
    if(Number(n) > 0 && Number(n) < 100){
        return true
    } else {
        return false
    }
}
function adicionar(){
    var numstg = window.document.getElementById('num')
    if(zeroecem(numstg.value) && !temnalista(numstg.value, numvet)) {
        var numnum = Number(numstg.value)
        numvet.push(numnum)
        var list = window.document.getElementById('list')
        var op = window.document.createElement('option') 
        list.appendChild(op)
        op.innerHTML = `Valor ${numnum} adicionado`
        res.innerHTML = ''
    } else {
        window.alert('O número digitado não está entre 0 e 100 ou já foi adicionado a lista!')
    }
    if(numstg.value == ''){
        window.alert('Insira algum valor para adicionar!')
    }
    numstg.value = ''
    numstg.focus()
}
function finalizar(){
   if(numvet.length == 0) {
        window.alert('Adicione algum valor para finalizar!')
   } else { 
    var res = window.document.getElementById('res')
    res.innerHTML = `Ao todo, temos ${numvet.length} números cadastrados.`
    //maior
    var x = numvet[0]
    var maior = x
 for(c = 1; c < numvet.length; c++){
    if( numvet[c] > maior){
        maior = numvet[c] 
    } 
}
    res.innerHTML += `<br> O maior valor informado foi ${maior}.`
    //menor
    var y = numvet[0]
    var menor = y
    for(a=1; a < numvet.length ; a++){
        if(numvet[a] < menor){
            menor = numvet[a]
        }
    }
    res.innerHTML += `<br> O menor valor informado foi ${menor}.`
    //soma
    var b = 0
    var soma = 0
    for(b = 0; b < numvet.length; b++ ){
        soma += numvet[b]
    }
    res.innerHTML += `<br> Somando todos os valores, temos ${soma}`
    //média
    media = soma / numvet.length
    res.innerHTML += `<br> A média dos valores digitados é ${media}.`
}
}