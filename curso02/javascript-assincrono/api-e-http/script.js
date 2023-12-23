fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response=>{
    return response.json()
})
.then(bodyJSON=>{
    console.log(bodyJSON)
})

fetch()