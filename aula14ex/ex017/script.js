function Gerar() {
    var inputNum = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
       window.alert('Por favor digite um número!')
    } else {
        var n = Number(inputNum.value)
        var c = 1
        while (c<=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}