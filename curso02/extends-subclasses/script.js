class Veiculo{
   constructor(rodas){
      this.rodas = rodas
   }
   acelerar(){
      return 'acelerou'
   }
}

class Moto extends Veiculo {
   constructor(rodas, nome, capacete){
      // usando a palavra chave super no constructor: (precisa passar na ordem, desde as propriedades/métodos que tiverem lá na classe de cima)
      super(rodas)
      this.nome = nome
      this.capacete = capacete
   }
   frear(){
      return `${this.nome} freou`
   }
}

const carro = new Veiculo(4)
console.log(carro.acelerar())

const kawasaki = new Moto(2, 'Kawasaki', true)
console.log(kawasaki.frear())