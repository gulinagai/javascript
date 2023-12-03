const newobj = new Object({
    nome: 'Guli',
    idade: 24,
    andar() {
        return `${this.nome} andou!`
    }
})

console.log(newobj.andar())

function Jogos(jogo1, jogo2, jogo3){
    this.jogo1 = jogo1
    this.jogo2 = jogo2
    this.jogo3 = jogo3
}

const meusjogos = new Jogos('lol', 'pokémon', 'grandchase')

console.log(meusjogos)

const meusjoguinhos = {
    jogo1: 'cs',
    jogo2: 'pokémon',
    jogo3: 'grandchase',
    jogar(nome){
        return `${nome} jogou ${this.jogo1}`
    }
}

const objetonovo = Object.create(meusjoguinhos)

console.log(objetonovo)
console.log(objetonovo.jogo1)

const prototipodoobjnovo = Object.getPrototypeOf(objetonovo)

console.log(prototipodoobjnovo)
const propemetdoprot = Object.getOwnPropertyNames(prototipodoobjnovo)
console.log(propemetdoprot)

console.log(meusjoguinhos)
objetonovo.jogo1 = 'lol'
console.log(objetonovo.jogar('guli'))

const game = {
    nome: 'league of legends',
    personagempref: 'katarina',
}

const acoeslol = {
    jogar() {
        return `joguei muito lol de ${this.personagempref}`
    },
    reclamar(){
        return 'lol é muito ruim'
    }
}

console.log(Object.assign(game, acoeslol))
console.log(game)

console.log(game.reclamar())

console.log(game.jogar())

const consoles = {}

Object.defineProperties(consoles,{
    nome: {
        get(){
            return this.algo
        },
        set(valor){
            this.algo = valor + ' é legal'
        }
    }
})

const pokemon = {
    pref: 'Lucario',
    sonho: 'Lugia Dark',
    // jogados: 2,
    jogadopref: 'Pokémon Emerald',
    perder(){
        return `Perdi meu ${this.jogadopref} não sei onde :(`
    }
}

console.log(pokemon.perder())

console.log(Object.getOwnPropertyDescriptors(pokemon))

Object.defineProperties(pokemon, {
    jogados: {
        value: 2,
        enumerable: false
    }
})

console.log(Object.getOwnPropertyDescriptors(pokemon))

console.log(Object.keys(pokemon))
console.log(Object.values(pokemon))

console.log(Object.entries(pokemon))
console.log(Object.getOwnPropertyNames(pokemon))

const oi = ['oi']
const oii = ['oi']

const ois = oi

console.log(Object.is(oi, ois))

console.log(Object.preventExtensions(pokemon))

pokemon.pref = 'Rayquaza'

console.log(pokemon)

const eu = 'guli'