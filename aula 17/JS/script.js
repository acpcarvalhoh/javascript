function Tabuada() {
    var Num = document.querySelector('#num')
    var Seltab = document.querySelector('#seltab')
    if (Num.value.length == 0){
        window.alert("Porfavor digite um numero!!")

    }else{
        let n =  Number(Num.value)
        let c = 1
        Seltab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            Seltab.appendChild(item)
            c+= 1
        }
    }

    


}

