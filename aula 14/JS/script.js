function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.querySelector('#nasc')
    var res = document.querySelector('#result')
    var imagem = document.createElement('img')
    if (Fano.value.length <= 1 || Number(Fano.value) > ano ){
        window.alert('Error!! Data de nascimento inválida')

    }else{
        var Nsexo = document.getElementsByName('vsexo')
        var idade = ano - Fano.value
        var genero = ''
        if (Nsexo[0].checked){
            res.innerHTML = `Você é um Homem de ${idade} anos`
            if(idade > 0 && idade <10){
                //criança
                res.innerHTML = `Você é uma menino de ${idade} anos`
                imagem.setAttribute('src', './imagens/foto-bebe-m.png')
                res.appendChild(imagem)
            }else if (idade > 10 && idade <=20){
                //jovem
                res.innerHTML = `Você é um jovem de ${idade} anos`
                imagem.setAttribute('src', './imagens/foto-jovem-m.png')
                res.appendChild(imagem)
            }else if (idade > 20 && idade <=45){
                //adulto
                imagem.setAttribute('src', './imagens/foto-adulto-m.png')
                res.appendChild(imagem)
            }else{
                //idoso
                res.innerHTML = `Você é um idoso de ${idade} anos`
                imagem.setAttribute('src', './imagens/foto-idoso-m.png')
                res.appendChild(imagem)
            }
        }else if(Nsexo[1].checked){
            res.innerHTML = `Você é uma Mulher de ${idade} anos`
            if(idade > 0 && idade <10){
                //criança
                res.innerHTML = `Você é uma menina de ${idade} anos`
                imagem.setAttribute('src', './imagens/foto-bebe-f.png')
                res.appendChild(imagem)
            }else if (idade > 10 && idade <=20){
                //adolescente
                res.innerHTML = `Você é uma jovem de ${idade} anos`
                imagem.setAttribute('src', './imagens/foto-jovem-f.png')
                res.appendChild(imagem)
            }else if (idade > 20 && idade <=45){
                //adulto
                imagem.setAttribute('src', './imagens/foto-adulto-f.png')
                res.appendChild(imagem)
            }else{
                //idoso
                res.innerHTML = `Você é uma idosa de ${idade} anos`
                imagem.setAttribute('src', './imagens/foto-idoso-f.png')
                res.appendChild(imagem)
            }
        }else{
            window.alert('ATEÇÃO marque "M" ou "F"')
        }
    }res.style.textAlign = 'center'


}




