fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response=>{
    return response.json()
})
.then(bodyJSON=>{
    console.log(bodyJSON)
})

fetch('./arquivo.json', {
    method: 'HEAD',
    // method: 'POST',
    // body: {
    //     "nome": "Metagross",
    //     "tipo": "Aço/Psíquico"
    // }
})
.then(response => {
     response.headers.forEach(console.log)  
})