var Agora = new Date()
var hora = Agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora <= 12){
    console.log('"Bom dia!!"')
} else if (hora > 12 && hora <= 18){
    console.log('"BOA TARDE!!"')
}else if (hora >= 1 && hora < 6 ){
    console.log('"BOA MADRUGADA!!"')
}else{
   console.log('"BOA NOITE!!"')
}