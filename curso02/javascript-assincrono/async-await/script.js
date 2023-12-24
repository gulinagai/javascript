async function puxarDados(){
    try {
    const promiseDados = fetch('./dados.json')
    const promiseClientes = fetch('./clientes.json')
    
    // const responseDados = await promiseDados 
    
    const jsonDados = await (await promiseDados).json()
    const jsonClientes = await (await promiseClientes).json()

    console.log(jsonDados)
    console.log(jsonClientes)
    }
    catch (erro) {
        console.log(erro)
        console.log('Erro de sintaxe')
    }
}
puxarDados()

// fetch('./dados.json')
// .then(response =>{
//     console.log(response)
// })
// é a mesma coisa com outra sintaxe

async function asyncSemPromise(){
    await setTimeout(()=>{
        console.log('Passou 1s (tomada 1)')
    }, 1000)
    console.log('acabou (tomada 1)')
}
asyncSemPromise()
// desse jeito acima, o console ''acabou'' não espera o setTimeOut, pq setTimeOut não é uma promise, portanto await não tem efeito sobre ela.

async function asyncComPromise(){
    await new Promise(resolve=>{
        setTimeout(()=>{
            console.log('Passou 1s (tomada 2)')
            resolve()
        }, 1000)
    })
    console.log('acabou (tomada 2)')
}
asyncComPromise()