var num = document.querySelector('#num')
var select = document.querySelector('#select')
var res = document.querySelector('#res')
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true

    }else{
        return false
    }

}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true

    }else{
        return false
    }

}

function adicionar(){
    if (isNumero(num.value) && inlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`

    }else{
        alert('Valor inválido ou já adicionado na lista')
    }

    num.value = ''
    num.focus()

}

function finalizar(){
    if (valores.length == 9){
        alert('Adicione Valores antes de finalizar')
    }else{
        res.innerHTML = ''
    }

}