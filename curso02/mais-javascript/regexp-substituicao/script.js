// Referência de Seleção $&

console.log('Java é uma linguagem diferente de php'.replace(/java/gi, '$&Script'))

console.log('Java é uma linguagem diferente de php'.replace(/[\wé]+/gi, '\n$&'))

// Grupo de captura ()

console.log('gulifiree@gmail.com'.replace(/(\w+)@[\w.]+/gi, '$1'))

// é possível também ter mais de um grupo de captura!

console.log('Nagai, Gustavo'.replace(/(\w+),\s(\w+)/g, '$2 $1'))

// mais do que captura apenas...

// Os parênteses ou os grupos também servem para agruparmos uma sequência de caracteres que queremos em repetição:

console.log('tatata, tata, ta'.replace(/(ta)+/g, 'pa $1'))

// Existe uma forma de usar dessa funcionalidade acima do grupo de captura, de isolar uma sequência de caracteres específica, sem que seja criado gripos que serão referência ($numero), para isso basta adicionar ?: no início e dentro do grupo de captura.

console.log('tatata, tata, ta'.replace(/(?:ta)+/g, 'pa $1')) // a referência não existe mais

// Positive Lookahead (?=):

// Faz a seleção dos itens que possuirem o padrão dentro de (?=) à sua frente.
// Basicamente vai selecionar o que tiver antes do texto passado, e esse texto no regexp está após o ?=, dentro de parênteses.
// Por exemplo: /\d(?=px)/g vai selecionar o dígito numérico que tiver antes de px, mas o px não é selecionado.

console.log('2em, 4px, 5%, 2px, 1px'.replace(/\d(?=px)/g, 'x')) // selecionou todo dígito que tem px na frente

// Negative Lookahead (?!):

// é o contrário. Faz a seleção dos itens que não possuirem o padrão passado dentro de (?!) à sua frente

console.log('2em, 4px, 5%, 2px, 1px'.replace(/\d(?!px)/g, 'z')) // selecionou todo dígito que não tem px na frente