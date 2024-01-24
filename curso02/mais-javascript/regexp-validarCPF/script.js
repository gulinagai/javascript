import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf')
const validarCpf = new ValidarCpf(cpf)

console.log(validarCpf.limpar('234-513.423-22'))

console.log(validarCpf.construir('234-512 213-22'))

console.log(validarCpf.iniciar())