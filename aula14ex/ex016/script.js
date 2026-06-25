function Contar() {
    var inputInicio = document.getElementById('inicio')
    var inputFim = document.getElementById('fim')
    var inputPasso = document.getElementById('passo')
    var res = document.getElementById('res')

    var inicio = Number(inputInicio.value)
    var fim = Number(inputFim.value)
    var passo = Number(inputPasso.value)

    if (inicio == 0 || fim == 0 || passo == 0) {
        window.alert('[ERRO] FALTAM DADOS!')
    }
    if (passo <= 0) {
        window.alert('[ERRO] PASSO INVÁLIDO, VAMOS CONSIDERAR O PASSO COMO 1.')
        passo = 1
    }

    res.innerHTML = 'Contando: '

    if (inicio < fim) {
        for(var c=inicio;c<=fim;c+=passo) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for(var c=inicio;c>=fim;c-=passo) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}