let num = document.getElementById('inum')
let list = document.getElementById('ilista')
let res = document.getElementById('res')
let valor = []

function adicionar() {
    n = Number(num.value)

    if(n>=1 && n<=100 && !valor.includes(n)) {
        valor.push(n)

        let item = document.createElement('option')
        valor.push(item)
        item.text = `O valor ${n} foi adicionado`
        list.appendChild(item)

        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já existente na lista.')
    }
    num.value = ''
    num.focus()
}