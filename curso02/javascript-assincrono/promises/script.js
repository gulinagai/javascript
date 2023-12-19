// const novaPromessa = new Promise(function(resolve, reject) {
//     let condicao = true
//     if(condicao){
//         setTimeout(()=>{
//             resolve({nome: 'guli', idade: 24})
//         }, 1000)
//     } else {
//         reject('Operação falhou')
//     }
// })

// console.log(novaPromessa)
// novaPromessa

// .then( meuObjeto =>{
//     console.log(meuObjeto)
//     meuObjeto.futuraProfissão = 'Programador'
//     console.log(meuObjeto)
//     return meuObjeto
// })
// .then( meuObjeto =>{
//     meuObjeto.cachorro = 'Toddy'
//     console.log(meuObjeto)
//     return meuObjeto
// })

// .then( meuObjeto =>{
//     meuObjeto.latir = function(){
//         return `${this.cachorro} latiu!`
//     }
//     console.log(meuObjeto.latir())
//     console.log(meuObjeto)
//     return meuObjeto
// })

// .then((meuObjeto)=> meuObjeto + 2)

// .then((meuObjeto)=> console.log(meuObjeto), (rejeicao)=>{
//     console.log(rejeicao)
// })
// .finally(()=>{
//     console.log('Aparecendo no sucesso e na falha da operação!')
// })

// .catch((rejeicao)=>{
//     console.log(rejeicao)
// })

const login = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Usuário Logado.')
    }, 2000)
})

const dados = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Dados carregados.')
    }, 1500)
})

const carregouTudo = Promise.race([login, dados])
console.log(carregouTudo)
carregouTudo.then((resolucoes)=>{
    console.log(resolucoes)
})