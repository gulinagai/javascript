var a = [7, 2, 4, 3, 9, 5]
console.log(`Os números do meu array são: ${a}, ao todo existem ${a.length} elementos e ${a.sort()} seria a ordem crescente`)
a[6] = 8
a.push(6)
console.log(`${a}`)
console.log(`Adicionei mais números e a ordem agora deve ser: ${a.sort()}, a posição do valor 5 é a posição ${a.indexOf(5)}`)
for(c = 0; c < a.length; c++) {
    console.log(`${a[c]}`)
}
console.log(`Uma nova forma e mais fácil desse comando é:`)
for(c in a) {
    console.log(`${a[c]}`)
}
