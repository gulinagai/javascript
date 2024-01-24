const teste1 = 1;
const teste2 = 1;

console.log(teste1);
console.log(teste2);

// o erro que aparecia falando que deveria singlequote(aspas simples) não aparece mais, pq eu adicionei a configuração para não ter conflito entre o eslint e o prettier. Para isso adicionei "prettier" em "extends" no arquivo json do eslint e instalei a configuração $ npm install --save-dev eslint-config-prettier
const texto = "oi";

console.log(texto)

