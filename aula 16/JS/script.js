function Enviar() {
    var start = document.querySelector('#cont')
    var end = document.querySelector('#nun')
    var step = document.querySelector('#pass')
    var res = document.querySelector('.res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('Impossivel contar!! veririque os dados e tente novamente.')
    }else {
        res.innerHTML = '<p>Contando: </p>'
        let i = Number(start.value)
        let e = Number(end.value)
        let f = Number(step.value)

        for (var c = i; c <= e; c += f){
            res.innerHTML += `${c} `

        }
        
    }
        

}