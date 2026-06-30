function gerar() {
    var num = document.getElementById('inum')
    var tab = document.getElementById('itab')

    if (num.value.length == 0) {
        window.alert('[ERRO] a calculadora está vazia!')
    } else {
        var n = Number(num.value)

        tab.innerHTML = ''

        for(var c=1;c<=10;c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}