let array = [];
let soma = 0;
let impares = [];

for(i=0; i<5; i++){
    let numero = Number(prompt("Digitar Número"))
    array.push(numero)
    
    if(array[i]%2 != 0){
        soma += numero
        impares.push(numero)
    }
}

document.write(`A soma dos números: ${soma}<br>`)
document.write(`[${impares}]`)