function Carro(marca, preco){
    this.marca = marca
    this.preco = preco
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)

function Carro2(marca, preco){
    const taxa = 1.2
    precoFinal = preco * taxa
    this.marca = marca
    this.preco = precoFinal
}

const audi = new Carro2('Audi', 10000)
