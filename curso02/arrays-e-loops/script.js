//plataformajogos.pop()
//plataformajogos.push('Super Nintendo')
//var ultimoitem = plataformajogos.pop()
//console.log(plataformajogos.length)
var plataformajogos = ['PlayStation 5', 'Nintendo Switch', 'PC', 'GameCube', 'GameBoy Advanced']

for(c = 0; c < plataformajogos.length; c++){
    console.log(plataformajogos[c])
    if(plataformajogos[c] == 'PC'){
        break
    }
}
