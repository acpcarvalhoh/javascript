
function carregar (){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    /*var data = new Date()*/
    var horas = 22
    msg.innerHTML = `Agora são ${horas} horas`
    if (horas > 0 && horas <= 12){
        img.src = '../aula 13/imagens/manha.png'
        window.document.body.style.backgroundColor = '#fff'
    } else if(horas > 12 && horas <= 18){
        img.src = '../aula 13/imagens/tarde.png'
        window.document.body.style.backgroundColor = '#c46e00'

    } else{
        img.src = '../aula 13/imagens/noite.png'
        window.document.body.style.backgroundColor = '#0000008a'
        
    }

    

}

