let num = document.getElementById('inum')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let valor = []

function adicionar() {
    let n = Number(num.value)

    if(n >= 1 && n <= 100 && !valor.includes(n)) {
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''

        num.value = ''
        num.focus()

    } else {
        window.alert('Número inválido ou já existente na lista.')
    }
}

function finalizar() {
    if(valor.length == 0) {
        window.alert('Adicione valores antes de iniciar')
    } else {
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for(let pos in valor) {
            soma += valor[pos]
            if(valor[pos] > maior)
                maior = valor[pos]
            if(valor[pos] < menor)
                menor = valor[pos]
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}