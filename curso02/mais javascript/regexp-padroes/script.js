// Padrão de regexp ou Validação para

// CEP:

const regexpCEP = /\d{5}[-\s]?\d{3}/g

const ceps = [
    '00000-000',
    '00000 000',
    '00000000'
]

for(cep of ceps){
    console.log(cep, cep.match(regexpCEP))
}

// CPF:

const regexpCPF = /(?:\d{3}[.-]?){3}\d{2}/g

const cpfs = [
    '000.000.000-00',
    '000-000-000-00',
    '000000000-00',
    '00000000000'
]

for(cpf of cpfs){
    console.log(cpf, cpf.match(regexpCPF))
}

// CNPJ:

const regexCNPJ = /\d{2}[.-]?(?:\d{3}[.-]?){2}\/?\d{4}[.-]?\d{2}/g

const cnpjs = [
    '00.000.000/0000-00',
    '00000000000000',
    '00-000-000/0000-00',
    '00-000-000-0000-00',
    '00.000.000/000000',
    '00.000.000.0000.00',
    '00.000.000.000000'
]

for(cnpj of cnpjs){
    console.log(cnpj, cnpj.match(regexCNPJ))
}

// Telefone:

const regexTELEFONE = /(?:\+?(?:55)\s?)?\(?\d{2}\)?[\s-]?\d{4,5}[-\s]?\d{4}/g

const telefones = [
    '+55 11 98888-8888',
    '+55 11 98888 8888',
    '+55 11988888888',
    '+5511988888888',
    '55 11 98888-8888',
    '55 11 98888 8888',
    '55 11 988888888',
    '55 11988888888',
    '5511988888888',
    '11 98888-8888',
    '11 98888 8888',
    '11 988888888',
    '1198888-8888',
    '11988888888',
    '(11) 98888-8888',
    '(11) 98888 8888',
    '(11) 988888888',
    '(11)98888-8888',
    '(11)98888 8888',
    '(11)988888888',
    '11-98888-8888',
    '11-98888 8888',
    '11-988888888',
]

for(telefone of telefones){
    console.log(telefone, telefone.match(regexTELEFONE))
}

// Email:

const regexEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi

const emails = [
    'email@email.com',
    'email@email.com.org',
    'email-email@email.com',
    'email_email@email.com',
    'email.email123@email.com.br',
    'email.email123@empresa-sua.com.br',
    'c@contato.cc'
]

for(email of emails){
    console.log(email, email.match(regexEMAIL))
}

// Tags:

const regexpTAG = /<\/?[\w\s="']+\/?>/gi

const tags = [
    '<div>Isso é uma div</div>',
    '<div class="ativo">Essa está ativa</div>',
    '<img src="imagem"/>',
    '<img src="imagem>',
    '<ul class="ativo">',
    '<li>Essa está ativa</li>',
    '</ul>'
]

for(tag of tags){
    console.log(tag, tag.match(regexpTAG))
}










