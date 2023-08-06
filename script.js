function verificar() {
    var data = new Date()
    var ano = data. getFullYear()
    var fano = document.getElementById('txtano')
    var resuldato = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 5){
                //bebe
                img.setAttribute('src', 'bebemenino.png')
            }else if (idade > 5 && idade <= 14) {
                //criança
                img.setAttribute('src', 'criançamenino.png')
                document.body.style.background = '#8d7b6d'
            }else if(idade > 14 && idade <= 23){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
                document.body.style.background = '#093246'
            }else if (idade > 23 && idade <= 50){
                //homem
                img.setAttribute('src', 'homem.png')
                document.body.style.background = '#978b7d'
            }else{
                img.setAttribute('src', 'velho.png')
                document.body.style.background = '#a8b34a'
            }

        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5){
                //bebe
                img.setAttribute('src', 'bebemenina.png')
                document.body.style.background = '#d4e3e6'
                }else if (idade >5 && idade <= 14){
                    //criança
                    img.setAttribute('src', 'criançamenina.png')
                    document.body.style.background = '#879179'
                }
                else if(idade > 14 && idade <= 23){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
                document.body.style.background = '#294060'
                }else if (idade > 23 && idade <= 50){
                    //mulher
                    img.setAttribute('src', 'mulher.png')
                    document.body.style.background = '#667d77'
                }else{
                    //velha
                    img.setAttribute('src', 'velha.png')
                    document.body.style.background = '#fdb7af'
                }
        }
        if(fsex[0].checked){
            resuldato.innerHTML = `Detectamos um ${genero} com ${idade} &nbsp &nbsp`
            resuldato.style.textAlign = 'center'
            resuldato.appendChild(img)
        }else{
            resuldato.innerHTML = `Detectamos uma ${genero} com ${idade} &nbsp &nbsp`
            resuldato.style.textAlign = 'center'
            resuldato.appendChild(img)
        }
    }
}