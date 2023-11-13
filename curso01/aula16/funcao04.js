function fatorial(num){
    var fat = 1
for(c = num; c > 1 ; c--) {
       var fat = fat * c 
}
    return fat
}
console.log(fatorial(5))
