function VerificarHorario() {
    var inputHora = document.getElementById('horario')
    var res = document.getElementById('res-horario')
    var hora = Number(inputHora.value)

    if (inputHora.value.length == 0 || hora < 0 || hora > 23) {
        window.alert('[ERRO] coloque um horário válido') 
    } else if (hora <= 11) {
        res.innerHTML = `<p>Agora são ${hora} horas, Bom dia!</p>`
    } else if (hora <= 17) {
        res.innerHTML = `<p>Agora são ${hora} horas, Boa tarde!</p>`
    } else {
        res.innerHTML = `<p>Agora são ${hora} horas, Boa noite!</p>`
    }
}

function VerificarIdade() {
    var inputAno = document.getElementById('idade')
    var res = document.getElementById('res-idade')
    var anoNascimento = Number(inputAno.value)

    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()

    if (inputAno.value.length == 0 || anoNascimento > anoAtual || anoAtual - anoNascimento > 110) {
        window.alert('[ERRO] coloque um ano válido')
    } else {
        var idade = anoAtual - anoNascimento
        res.innerHTML = `<p>Parabéns você tem ${idade} anos</p>`
    }
}