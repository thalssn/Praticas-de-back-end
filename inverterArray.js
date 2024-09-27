let array = [];
let numeros = [];

for(i=0; i<5; i++){
    let numero = Number(prompt("Digitar Número"))
    array.push(numero)
    numeros.unshift(numero)
}

document.write(`[${array}]<br>`)
document.write(`[${numeros}]<br>`)