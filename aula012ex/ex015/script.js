function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/bebehomem.jpeg')
            } else if (idade < 10) {
                img.setAttribute('src', 'imagens/criancahomem.jpeg')
            } else if (idade < 16) {
                img.setAttribute('src', 'imagens/adolescentehomem.jpeg')
            } else if (idade < 23) {
                img.setAttribute('src', 'imagens/jovemhomem.jpeg')
            } else if (idade < 59) {
                img.setAttribute('src', 'imagens/adultohomem.jpeg')
            } else {
                img.setAttribute('src', 'imagens/idosohomem.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/bebemulher.jpeg')
            } else if (idade < 10) {
                img.setAttribute('src', 'imagens/criancamulher.jpeg')
            } else if (idade < 16) {
                img.setAttribute('src', 'imagens/adolescentemulher.jpeg')
            } else if (idade < 23) {
                img.setAttribute('src', 'imagens/jovemmulher.jpeg')
            } else if (idade < 59) {
                img.setAttribute('src', 'imagens/adultomulher.jpeg')
            } else {
                img.setAttribute('src', 'imagens/idosomulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}