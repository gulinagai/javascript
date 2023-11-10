function verificar() {
    var ver = window.document.getElementById('msg')
    //var masc = window.document.getElementById('masc')
    //var fem = window.document.getElementById('fem')

    var nascstg = window.document.getElementById('nasc')
    var nascnumberv = Number.(nascstg).value 
    var data = new Date()
    var anoatual = data.getFullYear
    var idade = anoatual - nascnumberv
    window.alert(`${idade} anos`)
    

 ver.innerHTML = `Detectamos # com ${idade} anos`


}
