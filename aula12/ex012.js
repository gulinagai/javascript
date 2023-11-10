var idade = 76
console.log(`Idade: ${idade} anos.`)
if(idade >= 18 && idade <= 66) {
    console.log('Votante')
} else if(idade >= 16 && idade < 18) {
          console.log('Voto opcional')
       } else if(idade > 66){
                  console.log('Voto opcional')
               } else {
                    console.log('Não votante')
                  }    
   

