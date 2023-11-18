function carregou() {
var agora = new Date()
var horaatual = agora.getHours()
window.document.getElementById('paragrafo').innerText = `Agora são ${horaatual} horas.`
if(horaatual >= 6 && horaatual <= 12) {
    window.document.getElementById('manha').style.display = 'inline-block'
    window.document.body.style.background = '#FDE0D6'
} else if(horaatual > 12 && horaatual <= 18) {
            window.document.getElementById('tarde').style.display = 'inline-block'
            window.document.body.style.background = '#EEAE1C'
        } else if (horaatual > 18 && horaatual <= 23) {
                    window.document.getElementById('noite').style.display = 'inline-block'
                    window.document.body.style.background = '#010B2E'
                } else if (horaatual >= 0 && horaatual < 6) {
                            window.document.getElementById('madrug').style.display = 'inline-block'
                            window.document.body.style.background = '#030303'
                        }
}